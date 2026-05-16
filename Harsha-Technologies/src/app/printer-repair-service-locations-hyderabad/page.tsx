import { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, MapPin, Printer, Wrench } from "lucide-react";
import { CTAButtons } from "@/components/cta-buttons";
import { FAQList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { amcData } from "@/content/amc-data";
import { areasData } from "@/content/areas-data";
import { brandsData } from "@/content/brands-data";
import { servicesData } from "@/content/services-data";
import { business } from "@/content/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const issueGroups = [
  "Printer not printing or printing blank pages",
  "HP printer offline, driver error or WiFi connection failure",
  "Paper jam, roller issue or repeated paper feed problem",
  "Faint print, lines on page, toner leakage or cartridge error",
  "Scanner not detected, ADF jam or scan to email issue",
  "Office printer downtime affecting staff, billing or documents",
  "New WiFi printer setup for laptop, mobile and shared office use",
  "Laser printer fuser, drum, toner and print quality problems"
];

const solutionBlocks = [
  {
    title: "Home printer repair",
    text: "Doorstep support for HP, Canon, Epson and Brother printers used for student work, home offices and daily documents."
  },
  {
    title: "Office printer support",
    text: "Commercial printer repair and AMC support for offices, clinics, schools, shops, co-working spaces and multi-printer teams."
  },
  {
    title: "Service-location matching",
    text: `Calls are routed from ${business.shortAddress}. Share your area so the nearest available technician slot can be checked.`
  },
  {
    title: "Issue-first diagnosis",
    text: "Tell us the printer brand, model, area and exact issue. This helps classify paper jam, offline, ink, toner, scanner or WiFi problems faster."
  }
];

const faqs = [
  {
    question: "Why does Harsha Technologies have a dedicated service locations page?",
    answer:
      "This page helps customers quickly find printer repair services by area, brand and issue. It also gives search engines a clear internal map of the main service pages."
  },
  {
    question: "Are all listed areas eligible for same-day printer repair?",
    answer:
      "Same-day support depends on technician route, area and slot availability. Call or WhatsApp with your area and printer issue to confirm the earliest available visit."
  },
  {
    question: "Who owns Harsha Technologies?",
    answer: `Harsha Technologies is operated by ${business.ownerName}. The service location is ${business.address}.`
  }
];

export const metadata: Metadata = pageMetadata({
  title: "Printer Repair Services and Locations in Hyderabad",
  description:
    "Harsha Technologies printer repair service locations in Hyderabad. Find service pages for printer repair, HP support, brands, areas, issues and office AMC.",
  path: "/printer-repair-service-locations-hyderabad"
});

function brandLinks() {
  return [
    { name: "HP Printer Repair", href: "/brands/hp-printer-repair" },
    ...brandsData.map((brand) => ({
      name: `${brand.name} Printer Repair`,
      href: `/brands/${brand.slug}`
    }))
  ];
}

export default function ServiceLocationsPage() {
  const serviceLinks = servicesData.map((service) => ({
    name: service.title,
    href: `/services/${service.slug}`
  }));

  const areaLinks = [
    { name: "Printer Repair in Kukatpally", href: "/areas/kukatpally-printer-repair" },
    ...areasData.map((area) => ({
      name: `${area.title}`,
      href: `/areas/${area.slug}`
    }))
  ];

  const commercialLinks = [
    { name: "Office Printer AMC Hyderabad", href: "/business-amc/office-printer-amc-hyderabad" },
    ...amcData.map((item) => ({
      name: item.title,
      href: `/business-amc/${item.slug}`
    }))
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              {
                name: "Printer Repair Services and Locations",
                url: "/printer-repair-service-locations-hyderabad"
              }
            ])
          ])
        }}
      />

      <section className="bg-brand-soft py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.78fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">
              Printer repair service locations
            </p>
            <h1 className="mt-3 text-4xl font-black text-brand-navy sm:text-5xl">
              Printer Repair Services and Locations in Hyderabad
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Find Harsha Technologies printer repair pages by service, brand, area and common issue. We serve homes and businesses from {business.shortAddress}.
            </p>
            <CTAButtons commercial className="mt-8" />
          </div>
          <div className="rounded-lg border border-line bg-white p-6">
            <h2 className="text-xl font-black text-brand-navy">Business details</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-bold text-muted">Owner</dt>
                <dd className="mt-1 font-semibold text-brand-navy">{business.ownerName}</dd>
              </div>
              <div>
                <dt className="font-bold text-muted">Address</dt>
                <dd className="mt-1 leading-6 text-brand-navy">{business.address}</dd>
              </div>
              <div>
                <dt className="font-bold text-muted">Phone</dt>
                <dd className="mt-1">
                  <a className="font-bold text-brand-blue" href={business.phoneHref}>
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <div>
            <SectionHeading
              title="Services"
              text="Direct pages for printer repair, setup and maintenance searches."
            />
            <LinkList icon="service" items={serviceLinks} />
          </div>
          <div>
            <SectionHeading
              title="Brands"
              text="Brand-specific repair pages for high-intent local searches."
            />
            <LinkList icon="brand" items={brandLinks()} />
          </div>
          <div>
            <SectionHeading
              title="Commercial"
              text="Office printer AMC and business maintenance pages."
            />
            <LinkList icon="service" items={commercialLinks} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="Service areas"
            text="Clickable location pages help customers choose the closest service area and improve local SEO coverage."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areaLinks.map((item) => (
              <Link
                className="flex min-h-16 items-center gap-3 rounded-lg border border-line bg-white p-4 font-semibold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
                href={item.href}
                key={item.href}
              >
                <MapPin aria-hidden="true" className="shrink-0 text-brand-blue" size={18} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              title="Printer issues people call about"
              text="These issue phrases match real customer problems without making unsafe promises."
            />
            <div className="grid gap-3">
              {issueGroups.map((issue) => (
                <div
                  className="flex items-start gap-3 rounded-lg border border-line bg-brand-soft p-4 font-semibold text-brand-navy"
                  key={issue}
                >
                  <AlertTriangle aria-hidden="true" className="mt-1 shrink-0 text-brand-gold" size={18} />
                  {issue}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="How we solve them" />
            <div className="grid gap-4 sm:grid-cols-2">
              {solutionBlocks.map((block) => (
                <div className="rounded-lg border border-line bg-white p-5 shadow-sm" key={block.title}>
                  <Wrench aria-hidden="true" className="mb-3 text-brand-blue" size={22} />
                  <h2 className="font-extrabold text-brand-navy">{block.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-navy text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Need printer repair in your area?
            </h2>
            <p className="mt-4 leading-8 text-blue-100">
              Call or WhatsApp with your printer brand, area and issue. Same-day visits are checked based on route and technician availability.
            </p>
          </div>
          <CTAButtons commercial className="self-center" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <SectionHeading title="Service location FAQs" />
          <FAQList items={faqs} />
        </div>
      </section>
    </main>
  );
}

function LinkList({
  icon,
  items
}: {
  icon: "brand" | "service";
  items: Array<{ name: string; href: string }>;
}) {
  const Icon = icon === "brand" ? Printer : Wrench;

  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <Link
          className="flex min-h-14 items-center gap-3 rounded-lg border border-line bg-white p-4 font-semibold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
          href={item.href}
          key={item.href}
        >
          <Icon aria-hidden="true" className="shrink-0 text-brand-blue" size={18} />
          {item.name}
        </Link>
      ))}
    </div>
  );
}
