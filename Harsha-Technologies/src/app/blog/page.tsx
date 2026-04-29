import { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { blogPosts } from "@/content/blog-data";

export const metadata: Metadata = pageMetadata({
  title: "Printer Repair Tips and Guides - Harsha Technologies Blog",
  description:
    "Printer repair tips, maintenance guides, brand troubleshooting and office printing advice from Harsha Technologies, Hyderabad.",
  path: "/blog"
});

const categories = ["All", "Repair Tips", "Office Maintenance", "Setup Guides", "Brand Troubleshooting"];

export default function BlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" }
            ])
          )
        }}
      />

      <div className="bg-brand-soft py-16">
        <div className="container-page">
          <h1 className="text-4xl font-black text-brand-navy sm:text-5xl">
            Printer tips and guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Practical advice on printer repair, office maintenance, brand troubleshooting and setup from Harsha Technologies, Hyderabad.
          </p>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                className="rounded-full border border-line bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-navy"
                key={cat}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article className="rounded-lg border border-line bg-white p-6" key={post.slug}>
                <div className="mb-3 flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-brand-blue/10 px-3 py-1 font-semibold text-brand-blue">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-lg font-extrabold text-brand-navy leading-tight">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted line-clamp-3">
                  {post.description}
                </p>
                <Link
                  className="mt-4 inline-flex font-bold text-brand-blue"
                  href={`/blog/${post.slug}`}
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              title="Need printer repair now?"
              text="Reading the guide but the printer still needs a technician? Call or WhatsApp for fast doorstep support."
            />
          </div>
          <CTAButtons commercial className="self-center" />
        </div>
      </section>
    </main>
  );
}
