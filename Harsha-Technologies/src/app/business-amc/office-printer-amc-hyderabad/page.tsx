import { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/cta-buttons";
import { FAQList } from "@/components/faq-list";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { commercialSegments } from "@/content/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Do you provide office printer AMC in Hyderabad?",
    answer:
      "Yes. Harsha Technologies provides office printer AMC and recurring maintenance support for businesses in Hyderabad."
  },
  {
    question: "Who is office printer AMC best for?",
    answer:
      "AMC is useful for offices, schools, clinics, co-working spaces, Xerox centers and businesses with repeated printer downtime or multiple printers."
  },
  {
    question: "Can you support multiple printers?",
    answer:
      "Yes. The first conversation should identify number of printers, brands, area, issue frequency and urgency."
  }
];

export const metadata: Metadata = pageMetadata({
  title: "Office Printer AMC Hyderabad",
  description:
    "Office printer AMC in Hyderabad for businesses that need recurring maintenance, priority repair support and multi-printer service.",
  path: "/business-amc/office-printer-amc-hyderabad"
});

export default function OfficeAmcPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Office Printer AMC", url: "/business-amc/office-printer-amc-hyderabad" }
            ])
          ])
        }}
      />
      <HeroSection
        title="Office Printer AMC Hyderabad"
        description="Printer downtime slows teams, billing counters and front desks. Harsha Technologies provides recurring office printer maintenance and priority repair support for Hyderabad businesses."
        image="/images/office-amc/office-printer-amc-hyderabad.jpg"
        imageAlt="Office printer AMC support in Hyderabad"
        points={["Multi-printer support", "Preventive maintenance", "Emergency breakdown visits", "Office callback available"]}
        commercial
      />
      <TrustBar />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="prose-copy">
            <SectionHeading
              title="Built for businesses that need uptime"
              text="AMC is not about one repair visit. It is about reducing repeated breakdowns and giving offices a dependable support path."
            />
            <p>
              Harsha Technologies supports office printer maintenance for teams that rely on printing for invoices, forms, reports, student documents, patient billing, shipping papers and daily operations.
            </p>
            <p className="mt-4">
              During an AMC inquiry, share the number of printers, brands, location, current issues and whether your office needs monthly, quarterly or emergency priority support.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-brand-soft p-6">
            <h2 className="text-xl font-black text-brand-navy">Ideal for</h2>
            <div className="mt-5 grid gap-3">
              {commercialSegments.map((segment) => (
                <div className="rounded-md bg-white px-4 py-3 font-semibold text-slate-700" key={segment}>
                  {segment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="AMC support can include"
            text="Final scope depends on printer count, brands, location and response expectations."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Scheduled preventive checks",
              "Breakdown response support",
              "Multi-brand printer maintenance",
              "Office callback and quote flow"
            ].map((item) => (
              <div className="rounded-lg border border-line bg-white p-5 font-bold text-brand-navy" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeading title="Request AMC callback" />
            <CTAButtons commercial />
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/contact#amc-callback">
              Send printer count and office area
            </Link>
          </div>
          <FAQList items={faqs} />
        </div>
      </section>
    </main>
  );
}
