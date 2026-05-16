import { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CTAButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { business, primaryAreas } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Harsha Technologies",
  description:
    "Call or WhatsApp Harsha Technologies for printer repair, HP printer support and office printer AMC in Kukatpally, Hyderabad.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Contact", url: "/contact" }
            ])
          )
        }}
      />
      <section className="bg-brand-soft py-16">
        <div className="container-page max-w-4xl">
          <h1 className="text-4xl font-black text-brand-navy sm:text-5xl">
            Contact Harsha Technologies
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Need urgent printer repair or office AMC support? Call directly or send your printer brand, area and issue on WhatsApp.
          </p>
          <CTAButtons commercial className="mt-8" />
        </div>
      </section>
      <TrustBar />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading title="Fast contact options" />
            <div className="grid gap-4">
              <a className="rounded-lg border border-line bg-white p-5 shadow-sm" href={business.phoneHref}>
                <Phone className="mb-3 text-brand-blue" aria-hidden="true" size={24} />
                <h2 className="font-extrabold text-brand-navy">Call now</h2>
                <p className="mt-2 text-sm text-muted">{business.phoneDisplay}</p>
              </a>
              <a className="rounded-lg border border-line bg-white p-5 shadow-sm" href={business.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="mb-3 text-brand-green" aria-hidden="true" size={24} />
                <h2 className="font-extrabold text-brand-navy">WhatsApp booking</h2>
                <p className="mt-2 text-sm text-muted">Share brand, area, home or office use, and issue.</p>
              </a>
              <a className="rounded-lg border border-line bg-white p-5 shadow-sm" href={business.directionsHref} target="_blank" rel="noreferrer">
                <MapPin className="mb-3 text-brand-blue" aria-hidden="true" size={24} />
                <h2 className="font-extrabold text-brand-navy">Service location</h2>
                <p className="mt-2 text-sm font-semibold text-brand-navy">Owner: {business.ownerName}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{business.address}</p>
              </a>
            </div>
          </div>
          <div id="amc-callback">
            <SectionHeading
              title="Send service details"
              text="This form opens WhatsApp with your details filled in, which keeps the Phase 1 lead flow simple and easy to test."
            />
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="Service areas"
            text="Use the nearest known area when you contact us. It helps classify same-day route availability."
          />
          <div className="flex flex-wrap gap-2">
            {primaryAreas.map((area) => (
              <span className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-slate-700" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
