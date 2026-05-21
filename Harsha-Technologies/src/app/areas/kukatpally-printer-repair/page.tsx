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
    question: "Do you provide printer repair in Kukatpally?",
    answer:
      "Yes. Harsha Technologies is based in Kukatpally and provides doorstep printer repair for homes, offices and nearby business areas."
  },
  {
    question: "How fast can a technician visit Kukatpally?",
    answer:
      "Same-day support is available subject to technician route and slot availability. Call with your printer brand and issue for quick classification."
  },
  {
    question: "Do you support KPHB, JNTU and Miyapur from Kukatpally?",
    answer:
      "Yes. Kukatpally, KPHB, JNTU, Miyapur, Nizampet, Moosapet and nearby areas are priority service zones."
  }
];

export const metadata: Metadata = pageMetadata({
  title: "Printer Repair & Printer Service Kukatpally",
  description:
    "Need printer repair or printer service Kukatpally? Harsha Technologies provides doorstep HP printer repair Kukatpally, Epson printer service Kukatpally, and Canon printer repair Kukatpally.",
  path: "/areas/kukatpally-printer-repair"
});

export default function KukatpallyPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Kukatpally Printer Repair", url: "/areas/kukatpally-printer-repair" }
            ])
          ])
        }}
      />
      <HeroSection
        title="Printer Repair in Kukatpally"
        description="Doorstep printer repair for Kukatpally homes, offices, clinics, shops and nearby business zones. Call Harsha Technologies when you need fast local support."
        image="/images/areas/printer-repair-kukatpally-hyderabad.jpg"
        imageAlt="Printer repair service in Kukatpally Hyderabad"
        points={["Kukatpally local support", "KPHB and JNTU nearby", "HP and multi-brand repair", "Office AMC available"]}
        commercial
      />
      <TrustBar />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="prose-copy">
            <SectionHeading
              title="Local support around New Balaji Nagar and KPHB"
              text="Kukatpally has homes, hostels, offices, clinics, coaching centers and shops where a printer breakdown can quickly interrupt work. This page is focused on fast practical repair and repeat support for nearby customers."
            />
            <p>
              Harsha Technologies handles common printer issues such as paper jams, offline errors, WiFi setup, driver installation, faint prints, toner problems and HP printer troubleshooting in and around Kukatpally. If you need a certified **printer technician Kukatpally** home or business users can call on, we are based locally.
            </p>
            <p className="mt-4">
              We specialize in brand-specific doorstep support, offering **HP printer repair Kukatpally**, **Epson printer service Kukatpally**, and **Canon printer repair Kukatpally**. Our technicians provide reliable **printer service Kukatpally** residents trust for same-day troubleshooting and scheduled printer maintenance.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-brand-soft p-6">
            <h2 className="text-xl font-black text-brand-navy">Nearby areas</h2>
            <div className="mt-5 grid gap-3">
              {["KPHB", "JNTU", "Miyapur", "Nizampet", "Moosapet", "Pragathi Nagar"].map((area) => (
                <div className="rounded-md bg-white px-4 py-3 font-semibold text-slate-700" key={area}>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-soft">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            ["Home printer repair", "Fast support for student, freelancer and home office printers."],
            ["Office printer repair", "Support for shared printers and business printing downtime."],
            ["HP printer repair", "LaserJet, DeskJet, OfficeJet and ink tank troubleshooting."]
          ].map(([title, text]) => (
            <div className="rounded-lg border border-line bg-white p-6" key={title}>
              <h2 className="text-lg font-extrabold text-brand-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeading title="Book Kukatpally service" />
            <CTAButtons commercial />
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/services">
              View printer repair services
            </Link>
          </div>
          <FAQList items={faqs} />
        </div>
      </section>
    </main>
  );
}
