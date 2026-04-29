import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { CTAButtons } from "@/components/cta-buttons";
import { FAQList } from "@/components/faq-list";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { getAllAmcSlugs, getAmcBySlug } from "@/content/amc-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllAmcSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const amc = getAmcBySlug(slug);
  if (!amc) return {};
  return pageMetadata({
    title: amc.title,
    description: amc.description,
    path: `/business-amc/${slug}`
  });
}

export default async function AmcPage({ params }: Props) {
  const { slug } = await params;
  const amc = getAmcBySlug(slug);
  if (!amc) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(amc.faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Business AMC", url: "/business-amc" },
              { name: amc.name, url: `/business-amc/${slug}` }
            ])
          ])
        }}
      />
      <HeroSection
        title={amc.title}
        description={amc.heroDescription}
        image="/images/office-amc/office-printer-amc-hyderabad.jpg"
        imageAlt={`${amc.name} in Hyderabad`}
        points={amc.heroPoints}
        commercial
      />
      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="prose-copy">
            <SectionHeading title={amc.name} />
            <p>{amc.bodyContent}</p>
          </div>
          <div className="rounded-lg border border-line bg-brand-soft p-6">
            <h2 className="text-xl font-black text-brand-navy">Who this is for</h2>
            <ul className="mt-5 grid gap-3">
              {amc.targetCustomers.map((customer) => (
                <li className="rounded-md bg-white px-4 py-3 font-semibold text-slate-700" key={customer}>{customer}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page">
          <SectionHeading
            title="What you get with this AMC"
            text="Key benefits that make AMC the right choice over on-demand repair for recurring printer needs."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amc.benefits.map((benefit) => (
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
              Call or WhatsApp with your office area, printer brands and number of printers. We will share a proposal same day.
            </p>
          </div>
          <CTAButtons commercial className="self-center" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeading title="Common questions" />
            <Link className="mt-6 inline-flex font-bold text-brand-blue" href="/business-amc">
              View all AMC plans
            </Link>
          </div>
          <FAQList items={amc.faqs} />
        </div>
      </section>
    </main>
  );
}
