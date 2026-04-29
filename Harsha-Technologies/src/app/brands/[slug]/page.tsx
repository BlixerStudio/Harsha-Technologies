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
import { getAllBrandSlugs, getBrandBySlug } from "@/content/brands-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  return pageMetadata({
    title: brand.title,
    description: brand.description,
    path: `/brands/${slug}`
  });
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(brand.faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Brands", url: "/brands" },
              { name: `${brand.name} Printer Repair`, url: `/brands/${slug}` }
            ])
          ])
        }}
      />
      <HeroSection
        title={brand.title}
        description={brand.heroDescription}
        image="/images/services/hp-printer-repair-hyderabad.jpg"
        imageAlt={`${brand.name} printer repair service in Hyderabad`}
        points={brand.heroPoints}
        commercial
      />
      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="prose-copy">
            <SectionHeading
              title={`Common ${brand.name} printer problems`}
              text={brand.repairLogic}
            />
            <p>{brand.bodyContent}</p>
          </div>
          <div className="rounded-lg border border-line bg-brand-soft p-6">
            <h2 className="text-xl font-black text-brand-navy">{brand.name} model families</h2>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
              {brand.modelFamilies.map((model) => (
                <li className="rounded-md bg-white px-4 py-3" key={model}>{model}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title={`${brand.name} printer issues we fix`}
            text="These are the most common issues reported for this brand in Hyderabad homes and offices."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brand.commonIssues.map((issue) => (
              <div className="rounded-lg border border-line bg-white p-5" key={issue}>
                <p className="font-semibold text-brand-navy">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeading title={`Book ${brand.name} printer repair`} />
            <CTAButtons commercial />
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/areas/kukatpally-printer-repair">
              {brand.name} repair in Kukatpally
            </Link>
          </div>
          <FAQList items={brand.faqs} />
        </div>
      </section>
    </main>
  );
}
