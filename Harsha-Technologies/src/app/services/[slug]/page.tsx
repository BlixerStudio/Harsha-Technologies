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
import { getAllServiceSlugs, getServiceBySlug } from "@/content/services-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(service.faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: service.name, url: `/services/${slug}` }
            ])
          ])
        }}
      />
      <HeroSection
        title={service.title}
        description={service.heroDescription}
        image="/images/services/printer-repair-hyderabad-temporary.png"
        imageAlt={`${service.name} in Hyderabad`}
        points={service.heroPoints}
        commercial
      />
      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="prose-copy">
            <SectionHeading
              title={`About ${service.name} in Hyderabad`}
            />
            <p>{service.bodyContent}</p>
          </div>
          <div className="rounded-lg border border-line bg-brand-soft p-6">
            <h2 className="text-xl font-black text-brand-navy">Brands we support</h2>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
              {service.brandsSupported.map((brand) => (
                <li className="rounded-md bg-white px-4 py-3" key={brand}>{brand}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="Common issues we resolve"
            text="These are the most frequent problems in this service category handled across Hyderabad."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.commonIssues.map((issue) => (
              <div className="rounded-lg border border-line bg-white p-5" key={issue}>
                <p className="font-semibold text-brand-navy">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading title="How the service works" />
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {service.processSteps.map((step, i) => (
              <div className="rounded-lg border border-line bg-brand-soft p-5" key={step}>
                <p className="text-sm font-black text-brand-gold">Step {i + 1}</p>
                <p className="mt-2 font-bold text-brand-navy">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeading title={`Book ${service.name}`} />
            <CTAButtons commercial />
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/areas/kukatpally-printer-repair">
              Service in Kukatpally
            </Link>
          </div>
          <FAQList items={service.faqs} />
        </div>
      </section>
    </main>
  );
}
