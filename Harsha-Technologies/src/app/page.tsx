import { Metadata } from "next";
import Link from "next/link";
import { Building2, MapPinned, Printer, Wrench } from "lucide-react";
import { CTAButtons } from "@/components/cta-buttons";
import { FAQList } from "@/components/faq-list";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { TrustBar } from "@/components/trust-bar";
import { areasData } from "@/content/areas-data";
import { brandsData } from "@/content/brands-data";
import { brands, business, commercialSegments, primaryAreas } from "@/content/site";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Do you provide same-day printer repair in Hyderabad?",
    answer:
      "Yes. Same-day doorstep support is available based on your area, technician route and issue urgency."
  },
  {
    question: "Do you repair office printers and multiple printers?",
    answer:
      "Yes. Harsha Technologies supports offices, schools, clinics, co-working spaces and other businesses with single printer visits and recurring AMC support."
  },
  {
    question: "Which printer brands do you repair?",
    answer:
      "We support HP, Canon, Epson, Brother, Samsung, Xerox, Ricoh, Kyocera, Panasonic, Zebra and other major printer brands."
  },
  {
    question: "Can I book printer service on WhatsApp?",
    answer:
      "Yes. You can call or send your printer brand, area and issue on WhatsApp for faster booking."
  }
];

function areaHref(areaName: string) {
  if (areaName === "Kukatpally") return "/areas/kukatpally-printer-repair";
  const area = areasData.find((item) => item.name === areaName);
  return area ? `/areas/${area.slug}` : "/areas";
}

function brandHref(brandName: string) {
  if (brandName === "HP") return "/brands/hp-printer-repair";
  const brand = brandsData.find((item) => item.name === brandName);
  return brand ? `/brands/${brand.slug}` : "/brands";
}

function commercialSegmentHref(segment: string) {
  const links: Record<string, string> = {
    Offices: "/business-amc/office-printer-amc-hyderabad",
    "IT companies": "/business-amc/corporate-printer-support",
    "Schools and colleges": "/business-amc/school-printer-amc",
    "Clinics and hospitals": "/business-amc/clinic-printer-support",
    "Co-working spaces": "/business-amc/printer-amc-hyderabad",
    "Xerox centers": "/services/copier-repair",
    "Retail outlets": "/business-amc/printer-amc-hyderabad",
    "Multi-branch teams": "/business-amc/corporate-printer-support"
  };

  return links[segment] ?? "/business-amc";
}

export const metadata: Metadata = pageMetadata({
  title: "Printer Service and Repair Near Me | Printer Repair Hyderabad",
  description:
    "Harsha Technologies offers doorstep printer service and repair near me. Same-day computer printer repair, printer servicing near me, and printer technician support across Hyderabad.",
  path: "/"
});

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <HeroSection
        title="Printer Repair & Service Center in Hyderabad"
        description={`Need a printer fix near me or computer printer repair? Harsha Technologies provides doorstep printer service and repair in Hyderabad for homes, offices, and schools from ${business.shortAddress}.`}
        image="/images/services/printer-repair-hyderabad-temporary.png"
        imageAlt="Harsha Technologies printer service and repair near me Hyderabad"
        points={[
          "Epson, HP, Canon, and Brother printer servicing",
          "Same-day computer printer repair near me",
          "Experienced printer technician near me",
          "Printer repair Hyderabad and surrounding areas"
        ]}
        commercial
      />
      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            title="Printer services built around urgent calls"
            text="If you are looking to repair printers near me or need a professional computer printer repair service, we can help. Harsha Technologies is a premier printing repair shop near me offering doorstep printer service repair near me for homes and offices."
          />
          <ServiceGrid />
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              title="Commercial printer support for Hyderabad offices"
              text="Printer downtime wastes staff time. Harsha Technologies supports businesses that need accountable repair visits, recurring checks and a faster path for repeat issues."
            />
            <CTAButtons commercial />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {commercialSegments.map((segment) => (
              <Link
                className="rounded-lg border border-line bg-white p-5 transition hover:border-brand-blue hover:bg-blue-50"
                href={commercialSegmentHref(segment)}
                key={segment}
              >
                <Building2 aria-hidden="true" className="mb-3 text-brand-blue" size={22} />
                <p className="font-bold text-brand-navy">{segment}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Areas covered from Kukatpally"
              text="Priority starts around Kukatpally and expands across West and Central Hyderabad for homes and commercial customers."
            />
            <div className="flex flex-wrap gap-2">
              {primaryAreas.map((area) => (
                <Link
                  className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-blue hover:text-brand-blue"
                  href={areaHref(area)}
                  key={area}
                >
                  {area}
                </Link>
              ))}
            </div>
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/areas/kukatpally-printer-repair">
              Printer repair in Kukatpally
            </Link>
          </div>
          <div>
            <SectionHeading title="Brands supported" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {brands.map((brand) => (
                <Link
                  className="rounded-lg border border-line bg-brand-soft p-4 text-center font-extrabold text-brand-navy transition hover:border-brand-blue hover:bg-blue-50"
                  href={brandHref(brand)}
                  key={brand}
                >
                  {brand}
                </Link>
              ))}
            </div>
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/brands/hp-printer-repair">
              HP printer repair Hyderabad
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-navy text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Printer not working? Call before downtime spreads.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-blue-100">
              Share your printer brand, area, home or office use, and issue. The call flow is simple so a technician can understand urgency quickly.
            </p>
          </div>
          <CTAButtons commercial className="self-center" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeading
              title="Common questions"
              text="Fast answers for urgent home users and office admins."
            />
          </div>
          <FAQList items={faqs} />
        </div>
      </section>
    </main>
  );
}
