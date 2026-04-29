import { Metadata } from "next";
import { CTAButtons } from "@/components/cta-buttons";
import { FAQList } from "@/components/faq-list";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { TrustBar } from "@/components/trust-bar";
import { brands, primaryAreas } from "@/content/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "What printer problems can you handle?",
    answer:
      "We handle paper jams, printer offline errors, WiFi setup, driver installation, poor print quality, toner issues, ink problems, scanner issues and no-power complaints."
  },
  {
    question: "Do you visit offices for printer service?",
    answer:
      "Yes. Office repair visits and recurring AMC support are available for teams with single or multiple printers."
  },
  {
    question: "Do you support WiFi and network printers?",
    answer:
      "Yes. We help with WiFi printers, shared printers, network configuration and driver setup."
  }
];

export const metadata: Metadata = pageMetadata({
  title: "Printer Repair Services Hyderabad",
  description:
    "Printer repair, HP repair, paper jam fixes, WiFi setup and office printer AMC services from Harsha Technologies in Hyderabad.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" }
            ])
          ])
        }}
      />
      <HeroSection
        title="Printer Repair Services in Hyderabad"
        description="Doorstep support for urgent repair issues, printer setup needs and recurring office maintenance. Built for homes, small offices and business teams that need quick action."
        image="/images/services/laser-printer-repair-hyderabad.jpg"
        imageAlt="Laser printer repair service in Hyderabad"
        points={["Printer repair", "HP printer support", "Paper jam fixes", "Office AMC"]}
        commercial
      />
      <TrustBar />
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            title="Core services"
            text="Phase 1 focuses on services that directly generate calls, WhatsApp conversations and office AMC inquiries."
          />
          <ServiceGrid />
        </div>
      </section>
      <section className="section-pad bg-brand-soft">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Common issues solved"
              text="A quick description on the call helps classify the repair visit and urgency."
            />
            <ul className="grid gap-3">
              {[
                "Printer not printing or printing blank pages",
                "Paper jam and repeated feed errors",
                "Printer offline or not detected",
                "WiFi printer not connecting",
                "Faint print, toner issue or cartridge error",
                "Scanner not working on multifunction printers"
              ].map((item) => (
                <li className="rounded-md border border-line bg-white px-4 py-3 font-semibold text-slate-700" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Brands and areas" />
            <p className="leading-8 text-muted">
              Supported brands include {brands.slice(0, 8).join(", ")} and other major printer brands.
              Service coverage includes {primaryAreas.slice(0, 8).join(", ")} and nearby Hyderabad areas.
            </p>
            <CTAButtons commercial className="mt-8" />
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <SectionHeading title="Service FAQs" />
          <FAQList items={faqs} />
        </div>
      </section>
    </main>
  );
}
