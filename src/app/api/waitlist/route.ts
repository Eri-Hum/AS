import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Signup = { email: string; createdAt: string };

async function readSignups(): Promise<Signup[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Signup[];
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const signup: Signup = { email, createdAt: new Date().toISOString() };

  // TODO: swap for Mailchimp/Klaviyo API call
  console.log("Alva waitlist signup:", signup);

  const signups = await readSignups();
  if (!signups.some((s) => s.email === email)) {
    signups.push(signup);
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(signups, null, 2));
  }

  return NextResponse.json({ ok: true });
}
