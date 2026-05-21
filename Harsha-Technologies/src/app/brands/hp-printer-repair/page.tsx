import { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/cta-buttons";
import { FAQList } from "@/components/faq-list";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Do you repair HP printers in Hyderabad?",
    answer:
      "Yes. Harsha Technologies supports HP LaserJet, DeskJet, OfficeJet and HP ink tank printer issues across Hyderabad."
  },
  {
    question: "Can you fix HP printer offline issues?",
    answer:
      "Yes. HP offline issues may involve WiFi, driver, IP address, spooler or shared printer settings. A technician can diagnose the cause."
  },
  {
    question: "Do you support HP office printers?",
    answer:
      "Yes. Offices can book urgent HP printer repair visits or ask about recurring AMC support for multiple printers."
  }
];

export const metadata: Metadata = pageMetadata({
  title: "HP Printer Repair & HP Printer Servicing Hyderabad",
  description:
    "Looking for HP printer repair near me or HP printer servicing near me? Harsha Technologies provides doorstep HP printer repairs and HP printer servicing centre alternatives.",
  path: "/brands/hp-printer-repair"
});

export default function HpPrinterRepairPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "HP Printer Repair", url: "/brands/hp-printer-repair" }
            ])
          ])
        }}
      />
      <HeroSection
        title="HP Printer Repair Hyderabad"
        description="Fast doorstep support for HP LaserJet, DeskJet, OfficeJet and ink tank printer problems. Useful for urgent home repairs and office teams with repeated HP printer downtime."
        image="/images/services/hp-printer-repair-hyderabad.jpg"
        imageAlt="HP printer repair service in Hyderabad"
        points={["HP LaserJet repair", "HP printer offline fix", "Paper jam and toner issues", "Office HP printer AMC"]}
        commercial
      />
      <TrustBar />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="prose-copy">
            <SectionHeading
              title="Common HP printer problems"
              text="HP printers are common in Hyderabad homes and offices, so the page focuses on problems people search for when they need action quickly."
            />
            <p>
              Harsha Technologies helps with HP printers that are not printing, showing offline, jamming paper, printing faded output, reporting cartridge or toner errors, or failing during WiFi setup. If you are looking for an **HP printer repair shop near me** or a reliable source for **HP printer repairs** in Hyderabad, our doorstep service makes visiting a physical **HP printer servicing centre near me** unnecessary.
            </p>
            <p className="mt-4">
              We specialize in on-site **HP printer servicing** for both LaserJet and ink tank models. Whether it is a home user seeking **HP printer repair near me** or an office team needing corporate printer maintenance, our local technicians are ready to dispatch.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-brand-soft p-6">
            <h2 className="text-xl font-black text-brand-navy">HP model families</h2>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
              {["HP LaserJet", "HP DeskJet", "HP OfficeJet", "HP Ink Tank", "HP Smart Tank", "HP multifunction printers"].map((item) => (
                <li className="rounded-md bg-white px-4 py-3" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="HP repair service process"
            text="The call should identify brand, area, home or office use, number of printers and the exact issue."
          />
          <div className="grid gap-4 md:grid-cols-5">
            {["Call", "Diagnose", "Visit", "Repair", "Support"].map((step, index) => (
              <div className="rounded-lg border border-line bg-white p-5" key={step}>
                <p className="text-sm font-black text-brand-gold">Step {index + 1}</p>
                <h2 className="mt-2 font-extrabold text-brand-navy">{step}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeading title="Book HP printer repair" />
            <CTAButtons commercial />
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/areas/kukatpally-printer-repair">
              HP printer repair in Kukatpally
            </Link>
          </div>
          <FAQList items={faqs} />
        </div>
      </section>
    </main>
  );
}
