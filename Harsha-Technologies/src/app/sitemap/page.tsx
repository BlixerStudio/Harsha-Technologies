import { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { areasData } from "@/content/areas-data";
import { brandsData } from "@/content/brands-data";
import { servicesData } from "@/content/services-data";
import { blogPosts } from "@/content/blog-data";
import { amcData } from "@/content/amc-data";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap - Harsha Technologies",
  description: "Full sitemap for Harsha Technologies printer repair website.",
  path: "/sitemap"
});

function Section({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="mb-10">
      <h2 className="mb-4 text-lg font-extrabold text-brand-navy">{title}</h2>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link className="text-sm text-brand-blue hover:underline" href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <main className="section-pad bg-white">
      <div className="container-page">
        <h1 className="mb-10 text-3xl font-black text-brand-navy">Sitemap</h1>
        <Section title="Core Pages" links={[
          { label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Areas", href: "/areas" },
          { label: "Brands", href: "/brands" }, { label: "Business AMC", href: "/business-amc" },
          { label: "Blog", href: "/blog" }, { label: "About", href: "/about" },
          { label: "Reviews", href: "/reviews" }, { label: "Contact", href: "/contact" },
          { label: "Request Callback", href: "/request-callback" },
        ]} />
        <Section title="Service Pages" links={servicesData.map(s => ({ label: s.name, href: `/services/${s.slug}` }))} />
        <Section title="Brand Pages" links={[
          { label: "HP Printer Repair", href: "/brands/hp-printer-repair" },
          ...brandsData.map(b => ({ label: `${b.name} Printer Repair`, href: `/brands/${b.slug}` }))
        ]} />
        <Section title="Area Pages" links={[
          { label: "Kukatpally Printer Repair", href: "/areas/kukatpally-printer-repair" },
          ...areasData.map(a => ({ label: `${a.name} Printer Repair`, href: `/areas/${a.slug}` }))
        ]} />
        <Section title="Business AMC" links={[
          { label: "Office Printer AMC Hyderabad", href: "/business-amc/office-printer-amc-hyderabad" },
          ...amcData.map(a => ({ label: a.name, href: `/business-amc/${a.slug}` }))
        ]} />
        <Section title="Blog" links={blogPosts.map(p => ({ label: p.title, href: `/blog/${p.slug}` }))} />
      </div>
    </main>
  );
}
