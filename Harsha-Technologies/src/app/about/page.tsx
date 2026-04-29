import { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { business, brands, primaryAreas } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "About Harsha Technologies - Printer Repair Hyderabad",
  description:
    "Harsha Technologies provides printer repair in Hyderabad with 13+ years experience. Based in Kukatpally, serving homes, offices and businesses.",
  path: "/about"
});

const trustPoints = [
  {
    title: "13+ years experience",
    text: "Printer repair since before most brands introduced the models we now commonly service. Practical expertise built over years of field work."
  },
  {
    title: "Doorstep service model",
    text: "We come to your location — home, office, clinic, school or business. No need to carry your printer anywhere."
  },
  {
    title: "Multi-brand capability",
    text: "HP, Canon, Epson, Brother, Samsung, Xerox, Ricoh, Kyocera and more. We are not tied to a single brand or manufacturer."
  },
  {
    title: "Commercial support available",
    text: "Offices and businesses can book AMC contracts for recurring maintenance and priority breakdown response."
  },
  {
    title: "Same-day support",
    text: "Same-day doorstep visits available subject to technician slot and area. Call early for best availability."
  },
  {
    title: "Local Hyderabad presence",
    text: "Based in Kukatpally with coverage across West and Central Hyderabad. No distant call center — direct booking."
  }
];

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" }
            ])
          )
        }}
      />

      <div className="bg-brand-soft py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">About us</p>
            <h1 className="mt-3 text-4xl font-black text-brand-navy sm:text-5xl">
              Harsha Technologies
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Harsha Technologies is a printer repair service based in Kukatpally, Hyderabad. We provide doorstep printer repair, setup and maintenance for homes, offices, schools and commercial businesses across Hyderabad.
            </p>
            <CTAButtons className="mt-8" />
          </div>
          <div className="rounded-lg border border-line bg-white p-8">
            <dl className="grid gap-5">
              <div>
                <dt className="text-sm font-bold text-muted">Experience</dt>
                <dd className="mt-1 text-xl font-black text-brand-navy">{business.years} in printer repair</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-muted">Location</dt>
                <dd className="mt-1 font-semibold text-brand-navy">{business.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-muted">Service hours</dt>
                <dd className="mt-1 font-semibold text-brand-navy">{business.hours}, 7 days a week</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-muted">Phone</dt>
                <dd className="mt-1">
                  <a className="font-bold text-brand-blue" href={business.phoneHref}>{business.phoneDisplay}</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            title="Why customers choose Harsha Technologies"
            text="The reasons are practical — fast response, multi-brand capability and commercial support that works for growing businesses."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map(({ title, text }) => (
              <div className="rounded-lg border border-line bg-brand-soft p-6" key={title}>
                <h2 className="font-extrabold text-brand-navy">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Printer brands we repair"
              text="We are not tied to a single brand or manufacturer's service network."
            />
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <span className="rounded-md border border-line bg-white px-4 py-2 font-bold text-brand-navy" key={brand}>
                  {brand}
                </span>
              ))}
            </div>
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/brands">
              View all brand pages
            </Link>
          </div>
          <div>
            <SectionHeading
              title="Areas we cover"
              text="Coverage from Kukatpally across West and Central Hyderabad."
            />
            <div className="flex flex-wrap gap-2">
              {primaryAreas.map((area) => (
                <span className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-slate-700" key={area}>
                  {area}
                </span>
              ))}
            </div>
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/areas">
              View all service areas
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-navy text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Printer not working? We can help today.
            </h2>
            <p className="mt-4 leading-8 text-blue-100">
              Call or WhatsApp with your printer brand, area and issue. Same-day doorstep support available.
            </p>
          </div>
          <CTAButtons commercial className="self-center" />
        </div>
      </section>
    </main>
  );
}
