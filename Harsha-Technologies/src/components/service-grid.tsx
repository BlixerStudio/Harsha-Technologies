import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/site";

export function ServiceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          className="group overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          href={service.href}
          key={service.title}
        >
          <div className="relative aspect-[4/3] bg-slate-100">
            <Image
              src={service.image}
              alt={`${service.title} by Harsha Technologies in Hyderabad`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-extrabold text-brand-navy">{service.title}</h3>
            <p className="mt-2 min-h-16 text-sm leading-6 text-muted">{service.summary}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
              View service
              <ArrowRight aria-hidden="true" size={17} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
