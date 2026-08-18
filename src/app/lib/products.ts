export type Product = {
  id: string;
  name: string;
  price: number;
  tagline: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "refill-4",
    name: "Refill 4-pack",
    price: 99,
    tagline: "Ett år av rena händer.",
    description:
      "Fyra tabletter, en flaska vatten. Räcker i ett år vid vanlig användning.",
  },
  {
    id: "startkit",
    name: "Startkit",
    price: 399,
    tagline: "Allt du behöver för att börja.",
    description: "Pump av glas och keramik, plus två refills. Fyller du på själv.",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
