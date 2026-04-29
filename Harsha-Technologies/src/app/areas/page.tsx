import { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CTAButtons } from "@/components/cta-buttons";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { areasData } from "@/content/areas-data";

export const metadata: Metadata = pageMetadata({
  title: "Printer Repair Areas - Hyderabad Service Zones",
  description:
    "Harsha Technologies provides doorstep printer repair across Hyderabad. Find your area and book same-day support.",
  path: "/areas"
});

const primaryAreaLinks = [
  { name: "Kukatpally", slug: "kukatpally-printer-repair" },
  { name: "KPHB", slug: "kphb-printer-repair" },
  { name: "Miyapur", slug: "miyapur-printer-repair" },
  { name: "Madhapur", slug: "madhapur-printer-repair" },
  { name: "HITEC City", slug: "hitech-city-printer-repair" },
  { name: "Gachibowli", slug: "gachibowli-printer-repair" },
];

export default function AreasPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Areas We Serve", url: "/areas" }
            ])
          )
        }}
      />
      <HeroSection
        title="Printer Repair Across Hyderabad"
        description="Harsha Technologies provides doorstep printer repair from Kukatpally across West and Central Hyderabad. Find your area below and book same-day support."
        image="/images/areas/printer-repair-kukatpally-hyderabad.jpg"
        imageAlt="Printer repair service areas in Hyderabad"
        points={[
          "20+ service areas covered",
          "Same-day doorstep support",
          "Priority for Kukatpally and KPHB zones",
          "Commercial office AMC available"
        ]}
      />
      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            title="Priority service zones"
            text="These areas receive fastest response due to proximity to our Kukatpally base."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {primaryAreaLinks.map(({ name, slug }) => (
              <Link
                className="flex items-center gap-3 rounded-lg border border-line bg-brand-soft p-5 font-bold text-brand-navy hover:border-brand-blue hover:bg-blue-50 transition-colors"
                href={`/areas/${slug}`}
                key={slug}
              >
                <MapPin className="shrink-0 text-brand-blue" size={20} />
                {name} Printer Repair
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="All areas we cover"
            text="Complete list of Hyderabad areas with doorstep printer repair service."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areasData.map((area) => (
              <Link
                className="rounded-lg border border-line bg-white p-4 font-semibold text-brand-navy hover:border-brand-blue transition-colors"
                href={`/areas/${area.slug}`}
                key={area.slug}
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-navy text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Not sure if we cover your area?
            </h2>
            <p className="mt-4 leading-8 text-blue-100">
              Call or WhatsApp with your area name. We will confirm coverage and book the earliest available slot.
            </p>
          </div>
          <CTAButtons commercial className="self-center" />
        </div>
      </section>
    </main>
  );
}
