import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { business } from "@/content/site";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: "Printer Repair Hyderabad | Harsha Technologies",
    template: "%s | Harsha Technologies"
  },
  description:
    "Same-day doorstep printer repair and office printer AMC support in Hyderabad from Harsha Technologies, Kukatpally.",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema())
          }}
        />
        <Analytics />
        <Header />
        {children}
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
