import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/cta-buttons";
import { FAQList } from "@/components/faq-list";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { getAllAreaSlugs, getAreaBySlug } from "@/content/areas-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return pageMetadata({
    title: area.title,
    description: area.description,
    path: `/areas/${slug}`
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(area.faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Areas", url: "/areas" },
              { name: `${area.name} Printer Repair`, url: `/areas/${slug}` }
            ])
          ])
        }}
      />
      <HeroSection
        title={area.title}
        description={area.heroDescription}
        image="/images/areas/printer-repair-kukatpally-hyderabad.jpg"
        imageAlt={`Printer repair service in ${area.name} Hyderabad`}
        points={area.heroPoints}
        commercial
      />
      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="prose-copy">
            <SectionHeading
              title={`Printer repair for ${area.name} homes and offices`}
              text={area.urgencyAngle}
            />
            <p>{area.bodyContent}</p>
            <p className="mt-4">
              For offices with repeated printer issues, enquire about AMC support for planned maintenance and priority response.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-brand-soft p-6">
            <h2 className="text-xl font-black text-brand-navy">Nearby areas we cover</h2>
            <div className="mt-5 grid gap-3">
              {area.nearbyAreas.map((nearby) => (
                <div className="rounded-md bg-white px-4 py-3 font-semibold text-slate-700" key={nearby}>
                  {nearby}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="Customer types we support"
            text="Printer repair needs vary by customer type. Here are the segments we most often serve in this area."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {area.customerTypes.map((type) => (
              <div className="rounded-lg border border-line bg-white p-5" key={type}>
                <p className="font-bold text-brand-navy">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            ["HP printer repair", "HP LaserJet, DeskJet, OfficeJet and ink tank support.", "/brands/hp-printer-repair"],
            ["Office printer AMC", "Recurring maintenance and priority response for offices.", "/business-amc/office-printer-amc-hyderabad"],
            ["All printer services", "Full list of repair, setup and maintenance services.", "/services"]
          ].map(([title, text, href]) => (
            <div className="rounded-lg border border-line bg-brand-soft p-6" key={title}>
              <h2 className="text-lg font-extrabold text-brand-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              <Link className="mt-4 inline-flex font-bold text-brand-blue" href={href}>
                {title}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeading title={area.ctaLabel} />
            <CTAButtons commercial />
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/areas">
              View all service areas
            </Link>
          </div>
          <FAQList items={area.faqs} />
        </div>
      </section>
    </main>
  );
}
