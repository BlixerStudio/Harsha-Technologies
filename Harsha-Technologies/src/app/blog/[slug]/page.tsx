import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/cta-buttons";
import { FAQList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/content/blog-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(post.faqs),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${slug}` }
            ]),
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              datePublished: post.publishedDate,
              author: { "@type": "Organization", name: "Harsha Technologies" }
            }
          ])
        }}
      />

      <div className="bg-brand-soft py-12">
        <div className="container-page max-w-3xl">
          <div className="mb-4 flex items-center gap-3 text-sm text-muted">
            <span className="rounded-full bg-brand-blue/10 px-3 py-1 font-semibold text-brand-blue">
              {post.category}
            </span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl font-black text-brand-navy sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-8 text-muted">{post.description}</p>
        </div>
      </div>

      <article className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          {post.sections.map((section) => (
            <div className="mb-10" key={section.heading}>
              <h2 className="mb-4 text-xl font-extrabold text-brand-navy">{section.heading}</h2>
              <p className="leading-8 text-slate-700">{section.content}</p>
            </div>
          ))}

          <div className="mt-10 rounded-lg border border-line bg-brand-soft p-6">
            <SectionHeading title="Need printer repair in Hyderabad?" />
            <p className="mb-6 text-muted">
              Harsha Technologies provides doorstep printer repair across Hyderabad. Call or WhatsApp with your printer brand, area and issue.
            </p>
            <CTAButtons commercial />
          </div>
        </div>
      </article>

      {post.faqs.length > 0 && (
        <section className="section-pad bg-brand-soft">
          <div className="container-page max-w-3xl">
            <SectionHeading title="Common questions" />
            <FAQList items={post.faqs} />
          </div>
        </section>
      )}

      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="mb-6 text-xl font-extrabold text-brand-navy">More articles</h2>
          <div className="flex flex-wrap gap-3">
            <Link className="rounded-md border border-line bg-brand-soft px-4 py-3 font-semibold text-brand-navy" href="/blog">
              All articles
            </Link>
            {post.relatedSlugs.map((relSlug) => (
              <Link className="rounded-md border border-line bg-brand-soft px-4 py-3 font-semibold text-brand-navy" href={`/blog/${relSlug}`} key={relSlug}>
                {relSlug.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
