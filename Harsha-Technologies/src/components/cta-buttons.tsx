import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { business } from "@/content/site";

type CTAButtonsProps = {
  commercial?: boolean;
  className?: string;
};

export function CTAButtons({ commercial = false, className = "" }: CTAButtonsProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        className="inline-flex min-h-12 min-w-[190px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-brand-blue px-4 py-3 text-[13px] font-bold text-white shadow-soft transition hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 sm:text-sm"
        href={business.phoneHref}
      >
        <Phone aria-hidden="true" className="shrink-0" size={18} />
        <span>Call {business.phoneDisplay}</span>
      </a>
      <a
        className="inline-flex min-h-12 min-w-[160px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-brand-green px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
        href={business.whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle aria-hidden="true" className="shrink-0" size={18} />
        WhatsApp Now
      </a>
      {commercial ? (
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-gold hover:bg-amber-50"
          href="/contact#amc-callback"
        >
          Request AMC Callback
          <ArrowRight aria-hidden="true" size={18} />
        </a>
      ) : null}
    </div>
  );
}
