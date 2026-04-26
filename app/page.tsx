import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { BandSection } from "@/components/BandSection";
import { SpecsTable } from "@/components/SpecsTable";
import { SchematicsSection } from "@/components/SchematicsSection";
import { GallerySection } from "@/components/GallerySection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { BookingCard } from "@/components/BookingCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <BandSection
        quote={
          <>
            &ldquo;Redemption&rsquo;s for suckers —{" "}
            <em className="not-italic text-flame">
              <span className="italic">this swan&rsquo;s here to burn shit down.</span>
            </em>
            &rdquo;
          </>
        }
        caption="// Plate 002 — Playa, Burning Man"
        background="url('/images/playa-burningman.jpg') center / cover no-repeat var(--color-ink-2)"
      />
      <SpecsTable />
      <SchematicsSection />
      <BandSection
        quote={
          <>
            &ldquo;We broke it,{" "}
            <em className="not-italic text-flame">
              <span className="italic">we fixed it,</span>
            </em>{" "}
            now duck.&rdquo;
          </>
        }
        caption="// Plate 003 — Sunset Dancer"
        background="url('/images/sunset-dancer.jpg') center / cover no-repeat var(--color-ink-2)"
      />
      <GallerySection />
      <EcosystemSection />
      <BookingCard />
    </>
  );
}
