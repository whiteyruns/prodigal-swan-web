import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { SpecsTable } from "@/components/SpecsTable";
import { SchematicsSection } from "@/components/SchematicsSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "How a 1996 Taylor-Dunn cargo mover became a fire-breathing mechaswan. The Beezus origin, the 2016 rebirth, and the Vegas-to-playa annual rampage.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <AboutSection />
      <SpecsTable />
      <SchematicsSection />
    </main>
  );
}
