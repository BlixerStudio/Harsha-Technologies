import { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/cta-buttons";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { brandsData } from "@/content/brands-data";

export const metadata: Metadata = pageMetadata({
  title: "Printer Brands We Repair - HP, Canon, Epson and More",
  description:
    "Harsha Technologies repairs HP, Canon, Epson, Brother, Samsung, Xerox, Ricoh, Kyocera and Panasonic printers across Hyderabad.",
  path: "/brands"
});

const topBrands = [
  { name: "HP", slug: "hp-printer-repair", summary: "LaserJet, DeskJet, OfficeJet and HP ink tank repair." },
  { name: "Canon", slug: "canon-printer-repair", summary: "PIXMA, imageCLASS, imageRUNNER and MAXIFY repair." },
  { name: "Epson", slug: "epson-printer-repair", summary: "EcoTank, L-series and inkjet printer repair." },
];

export default function BrandsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Brands We Repair", url: "/brands" }
            ])
          )
        }}
      />
      <HeroSection
        title="Printer Brands We Repair in Hyderabad"
        description="Harsha Technologies supports all major printer brands used in Hyderabad homes, offices and businesses. HP, Canon, Epson, Brother, Samsung, Xerox, Ricoh, Kyocera and more."
        image="/images/services/hp-printer-repair-hyderabad.jpg"
        imageAlt="Printer brand repair support in Hyderabad"
        points={[
          "10+ major printer brands supported",
          "Laser, inkjet and multifunction repair",
          "Home and office support",
          "AMC available for all brands"
        ]}
      />
      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            title="Most repaired brands in Hyderabad"
            text="HP, Canon and Epson are the most commonly repaired printer brands in Hyderabad homes and offices."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {topBrands.map(({ name, slug, summary }) => (
              <div className="rounded-lg border border-line bg-brand-soft p-6" key={slug}>
                <h2 className="text-2xl font-black text-brand-navy">{name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{summary}</p>
                <Link
                  className="mt-4 inline-flex font-bold text-brand-blue"
                  href={`/brands/${slug}`}
                >
                  {name} printer repair →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="All brands we repair"
            text="Every brand we support with doorstep printer repair in Hyderabad."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              className="rounded-lg border border-line bg-white p-5 font-bold text-brand-navy hover:border-brand-blue transition-colors"
              href="/brands/hp-printer-repair"
            >
              HP Printer Repair
            </Link>
            {brandsData.map((brand) => (
              <Link
                className="rounded-lg border border-line bg-white p-5 font-bold text-brand-navy hover:border-brand-blue transition-colors"
                href={`/brands/${brand.slug}`}
                key={brand.slug}
              >
                {brand.name} Printer Repair
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              title="Not sure which brand?"
              text="If your printer brand is not listed or you are unsure, call with the model number. We support most brands used in Hyderabad."
            />
          </div>
          <CTAButtons commercial className="self-center" />
        </div>
      </section>
    </main>
  );
}
