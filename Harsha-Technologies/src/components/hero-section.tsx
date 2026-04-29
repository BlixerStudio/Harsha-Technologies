import Image from "next/image";
import { CTAButtons } from "@/components/cta-buttons";

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points?: string[];
  commercial?: boolean;
};

export function HeroSection({
  title,
  description,
  image,
  imageAlt,
  points = [],
  commercial = false
}: HeroSectionProps) {
  return (
    <section className="bg-brand-soft">
      <div className="container-page grid min-h-[620px] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <h1 className="max-w-3xl text-balance text-4xl font-black tracking-normal text-brand-navy sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            {description}
          </p>
          {points.length > 0 ? (
            <ul className="mt-6 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
              {points.map((point) => (
                <li className="rounded-md border border-line bg-white px-4 py-3" key={point}>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          <CTAButtons commercial={commercial} className="mt-8" />
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-lg bg-white shadow-soft">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-6 text-white">
            <p className="max-w-sm text-sm font-semibold leading-6">
              Fast local support for urgent repair calls and recurring office maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
