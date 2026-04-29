import { MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "@/content/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-white shadow-soft md:hidden">
      <a
        className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-bold text-brand-blue"
        href={business.phoneHref}
      >
        <Phone aria-hidden="true" size={19} />
        Call
      </a>
      <a
        className="flex min-h-16 flex-col items-center justify-center gap-1 bg-brand-green text-xs font-bold text-white"
        href={business.whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle aria-hidden="true" size={19} />
        WhatsApp
      </a>
      <a
        className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-bold text-brand-navy"
        href={business.directionsHref}
        target="_blank"
        rel="noreferrer"
      >
        <MapPin aria-hidden="true" size={19} />
        Directions
      </a>
    </div>
  );
}
