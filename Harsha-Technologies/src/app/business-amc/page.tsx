import { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle } from "lucide-react";
import { CTAButtons } from "@/components/cta-buttons";
import { FAQList } from "@/components/faq-list";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { amcData } from "@/content/amc-data";

export const metadata: Metadata = pageMetadata({
  title: "Office Printer AMC Hyderabad - Business Printer Support",
  description:
    "Printer AMC and commercial support for Hyderabad offices, schools, clinics and businesses. Recurring maintenance from Harsha Technologies.",
  path: "/business-amc"
});

const faqs = [
  {
    question: "What is included in a printer AMC?",
    answer:
      "Printer AMC includes scheduled preventive visits, priority breakdown response, on-site diagnosis and labor. Consumables like toner and drum units are billed separately unless included in the agreement."
  },
  {
    question: "How many printers do I need for an AMC?",
    answer:
      "AMC is available from a single business-critical printer to large multi-device fleet contracts. It is most cost-effective for offices with 2 or more regularly used printers."
  },
  {
    question: "Can I get AMC for multiple office branches?",
    answer:
      "Yes. Multi-branch AMC contracts are available for businesses with offices across different Hyderabad locations."
  },
  {
    question: "How do I get an AMC quote?",
    answer:
      "Call or WhatsApp with your office location, number of printers, brands and usage level. We will provide a same-day proposal."
  }
];

const amcBenefits = [
  "Planned maintenance reduces surprise failures",
  "Priority response — no cold-start wait time",
  "Technician knows your fleet and its history",
  "Predictable maintenance budget",
  "GST invoice for all contracts",
  "Multi-branch and multi-printer support"
];

export default function BusinessAmcPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Business AMC", url: "/business-amc" }
            ])
          ])
        }}
      />
      <HeroSection
        title="Office Printer AMC Hyderabad"
        description="Convert unplanned printer breakdowns into a structured maintenance plan. Harsha Technologies provides printer AMC for Hyderabad offices, schools, clinics and commercial businesses."
        image="/images/office-amc/office-printer-amc-hyderabad.jpg"
        imageAlt="Office printer AMC support in Hyderabad"
        points={[
          "Preventive maintenance visits",
          "Priority breakdown response",
          "All major printer brands covered",
          "GST invoice for business accounts"
        ]}
        commercial
      />
      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            title="AMC plans for every business type"
            text="Choose the plan that matches your office type and printer volume."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {amcData.map((plan) => (
              <div className="rounded-lg border border-line bg-brand-soft p-6" key={plan.slug}>
                <Building2 className="mb-3 text-brand-blue" size={24} />
                <h2 className="text-xl font-black text-brand-navy">{plan.name}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">{plan.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {plan.targetCustomers.slice(0, 3).map((c) => (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-navy" key={c}>{c}</span>
                  ))}
                </div>
                <Link
                  className="mt-4 inline-flex font-bold text-brand-blue"
                  href={`/business-amc/${plan.slug}`}
                >
                  View {plan.name} →
                </Link>
              </div>
            ))}
            <div className="rounded-lg border border-line bg-brand-soft p-6">
              <Building2 className="mb-3 text-brand-blue" size={24} />
              <h2 className="text-xl font-black text-brand-navy">Office Printer AMC Hyderabad</h2>
              <p className="mt-2 text-sm leading-7 text-muted">
                Full-featured AMC for general office printer fleets. Priority support and preventive care.
              </p>
              <Link
                className="mt-4 inline-flex font-bold text-brand-blue"
                href="/business-amc/office-printer-amc-hyderabad"
              >
                View Office AMC →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="Why AMC beats on-demand repair"
            text="For businesses where printing is daily, reactive repair is more expensive and disruptive than a maintenance contract."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amcBenefits.map((benefit) => (
              <div className="flex gap-3 rounded-lg border border-line bg-white p-5" key={benefit}>
                <CheckCircle className="mt-0.5 shrink-0 text-brand-blue" size={18} />
                <p className="font-semibold text-brand-navy">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-navy text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Get a same-day AMC quote
            </h2>
            <p className="mt-4 leading-8 text-blue-100">
              Call or WhatsApp with your office area, printer brands and number of devices. We will share a structured proposal the same day.
            </p>
          </div>
          <CTAButtons commercial className="self-center" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <SectionHeading title="AMC questions" />
          <FAQList items={faqs} />
        </div>
      </section>
    </main>
  );
}
