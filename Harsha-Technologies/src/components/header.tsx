import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Phone } from "lucide-react";
import { business, navItems } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="hidden bg-brand-navy py-2 text-sm text-white md:block">
        <div className="container-page flex items-center justify-between gap-6">
          <p>
            {business.hours} | Doorstep printer repair from {business.shortAddress}
          </p>
          <a className="font-semibold" href={business.phoneHref}>
            {business.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="container-page flex min-h-20 items-center justify-between gap-5">
        <Link className="flex items-center gap-3" href="/" aria-label="Harsha Technologies home">
          <Image
            src="/images/brand/harsha-technologies-logo.png"
            alt="Harsha Technologies logo"
            width={54}
            height={44}
            priority
            className="h-11 w-auto"
          />
          <span className="leading-tight">
            <span className="block text-base font-extrabold text-brand-navy sm:text-lg">
              Harsha Technologies
            </span>
            <span className="block text-xs font-semibold text-brand-green">
              Printer Repair Hyderabad
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              className="text-sm font-semibold text-slate-700 transition hover:text-brand-blue"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-brand-blue px-4 py-2 text-sm font-bold text-white"
            href={business.phoneHref}
          >
            <Phone aria-hidden="true" size={17} />
            Call
          </a>
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-brand-green px-4 py-2 text-sm font-bold text-white"
            href={business.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" size={17} />
            WhatsApp
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-brand-navy lg:hidden"
          aria-label="Open menu"
          type="button"
        >
          <Menu aria-hidden="true" size={22} />
        </button>
      </div>
    </header>
  );
}
