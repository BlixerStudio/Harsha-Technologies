"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { business, navItems } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      {/* Top info bar — desktop only */}
      <div className="hidden bg-brand-navy py-2 text-sm text-white md:block">
        <div className="container-page flex items-center justify-between gap-6">
          <p>{business.hours} | Doorstep printer repair from {business.shortAddress}</p>
          <a className="font-semibold hover:underline" href={business.phoneHref}>
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main header row */}
      <div className="container-page flex min-h-20 items-center justify-between gap-5">
        {/* Logo */}
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

        {/* Desktop nav */}
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

        {/* Desktop CTA buttons */}
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

        {/* Hamburger — mobile only */}
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-brand-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                className="border-b border-line py-4 text-base font-semibold text-brand-navy hover:text-brand-blue"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-5 pb-2">
              <a
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-brand-blue py-3 text-sm font-bold text-white"
                href={business.phoneHref}
                onClick={() => setOpen(false)}
              >
                <Phone size={17} />
                Call Now
              </a>
              <a
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-brand-green py-3 text-sm font-bold text-white"
                href={business.whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
