import { Metadata } from "next";
import { CTAButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { business } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Request Callback - Printer Repair Hyderabad",
  description:
    "Request a callback from Harsha Technologies for printer repair or office AMC support in Hyderabad. Fast response guaranteed.",
  path: "/request-callback"
});

export default function RequestCallbackPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Request Callback", url: "/request-callback" }
            ])
          )
        }}
      />

      <div className="bg-brand-soft py-16">
        <div className="container-page">
          <h1 className="text-4xl font-black text-brand-navy sm:text-5xl">
            Request a callback
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
            Leave your details and we will call you back. Or call and WhatsApp directly for fastest response.
          </p>
        </div>
      </div>

      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading title="Fastest ways to reach us" />
            <div className="grid gap-4">
              <div className="rounded-lg border border-line bg-brand-soft p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Call Now</p>
                <a
                  className="mt-2 block text-2xl font-black text-brand-navy hover:text-brand-blue"
                  href={business.phoneHref}
                >
                  {business.phoneDisplay}
                </a>
                <p className="mt-1 text-sm text-muted">Available {business.hours}, 7 days a week</p>
              </div>
              <div className="rounded-lg border border-line bg-brand-soft p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">WhatsApp</p>
                <a
                  className="mt-2 block text-2xl font-black text-brand-navy hover:text-brand-blue"
                  href={business.whatsappHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Message on WhatsApp
                </a>
                <p className="mt-1 text-sm text-muted">Share printer brand, area and issue for fast booking</p>
              </div>
            </div>
            <CTAButtons commercial className="mt-6" />
          </div>

          <div className="rounded-lg border border-line bg-brand-soft p-8">
            <SectionHeading title="What to have ready when you call" />
            <ul className="mt-2 grid gap-4">
              {[
                ["Printer brand and model", "HP LaserJet M1005, Epson L3150, Canon PIXMA G2010, etc."],
                ["Your area in Hyderabad", "Kukatpally, Madhapur, KPHB, Gachibowli, etc."],
                ["Home or office use", "Single printer or multiple printers on-site"],
                ["The exact issue", "Paper jam, offline, not printing, WiFi issue, etc."],
                ["Urgency", "Same-day needed or flexible scheduling"]
              ].map(([label, hint]) => (
                <li className="rounded-md bg-white p-4" key={label}>
                  <p className="font-bold text-brand-navy">{label}</p>
                  <p className="mt-1 text-xs text-muted">{hint}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
