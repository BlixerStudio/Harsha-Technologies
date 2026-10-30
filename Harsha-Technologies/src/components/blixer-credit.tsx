"use client";

import { usePathname } from "next/navigation";
import { business } from "@/content/site";

export function BlixerCredit() {
  const pathname = usePathname() || "/";
  const message = `Hi BlixerStudio! 👋 I came from this website page: ${business.domain}${pathname} and I loved the design. Can we catch up about a website for my business?`;

  return (
    <p>
      Designed by{" "}
      <a
        className="font-semibold underline hover:text-white"
        href={`https://wa.me/916302092709?text=${encodeURIComponent(message)}`}
        rel="noopener"
        target="_blank"
      >
        BlixerStudio
      </a>
    </p>
  );
}
