"use client";

import { useRef, useState } from "react";
import { withBasePath } from "../lib/base-path";

export default function VideoCard({
  src,
  poster,
  alt,
  label,
}: {
  src: string;
  poster: string;
  alt: string;
  label: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function play() {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  }

  return (
    <div className="relative w-full aspect-[9/16] max-w-[280px] mx-auto bg-lin border border-sand/40 overflow-hidden">
      <video
        ref={videoRef}
        poster={withBasePath(poster)}
        controls={playing}
        playsInline
        className="w-full h-full object-cover"
        aria-label={alt}
      >
        <source src={withBasePath(`${src}.webm`)} type="video/webm" />
        <source src={withBasePath(`${src}.mp4`)} type="video/mp4" />
      </video>
      {!playing && (
        <button
          onClick={play}
          aria-label={`Spela video: ${label}`}
          className="absolute inset-0 flex items-end justify-center pb-6"
        >
          <span className="flex items-center gap-2 bg-krita/90 px-4 py-2 border border-sand/60">
            <span
              className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-kol"
              aria-hidden="true"
            />
            <span className="font-sans font-light text-xs tracking-[0.04em] uppercase text-kol">
              {label}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
