"use client";

import Script from "next/script";

// GA4 measurement ID — set NEXT_PUBLIC_GA_ID in Vercel env vars to override
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-98YQ31V967";
// Google Ads account that runs the HT-CALL campaign (925-704-9499)
const ADS_ID = "AW-18050293247";
// "Website call click" conversion action in that account (ID/label)
const CALL_CLICK_CONVERSION = "AW-18050293247/9OsPCPDlzJkdEP-7hp9D";
// Previous Ads tag, kept so existing data collection is not interrupted.
// It is not the account running HT-CALL; remove once confirmed unused.
const LEGACY_ADS_ID = "AW-10854028175";

export function Analytics() {
  return (
    <>
      {/* Microsoft Clarity */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wx08c427si");
          `,
        }}
      />

      {/* Load the gtag library once using the GA4 ID */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialise GA4 + Google Ads and set up conversion event listeners */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // GA4
            gtag('config', '${GA_ID}', { send_page_view: true });

            // Google Ads — links this site to the HT-CALL Ads account
            gtag('config', '${ADS_ID}');
            gtag('config', '${LEGACY_ADS_ID}');

            // Phone click → Google Ads "Website call click" conversion (with label)
            document.addEventListener('click', function(e) {
              var el = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
              if (el) {
                gtag('event', 'conversion', { send_to: '${CALL_CLICK_CONVERSION}' });
                gtag('event', 'phone_click', { event_category: 'conversion' });
              }
            });

            // WhatsApp click → GA4 event (no Ads conversion action exists for it yet)
            document.addEventListener('click', function(e) {
              var el = e.target && e.target.closest ? e.target.closest('a[href*="wa.me"]') : null;
              if (el) {
                gtag('event', 'whatsapp_click', { event_category: 'conversion' });
              }
            });
          `,
        }}
      />
    </>
  );
}
