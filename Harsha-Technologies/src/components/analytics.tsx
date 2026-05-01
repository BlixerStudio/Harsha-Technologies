"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-98YQ31V967";
const ADS_ID = "AW-10854028175";

export function Analytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          gtag('config', '${ADS_ID}');

          // Track phone clicks
          document.addEventListener('click', function(e) {
            var el = e.target.closest('a[href^="tel:"]');
            if (el) gtag('event', 'phone_click', { event_category: 'conversion', event_label: el.href });
          });

          // Track WhatsApp clicks
          document.addEventListener('click', function(e) {
            var el = e.target.closest('a[href*="wa.me"]');
            if (el) gtag('event', 'whatsapp_click', { event_category: 'conversion', event_label: 'whatsapp' });
          });
        `}
      </Script>
    </>
  );
}
