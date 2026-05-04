import Link from "next/link";
import { business, primaryAreas } from "@/content/site";

const footerServices = [
  ["Printer Repair", "/services"],
  ["Laser Printer Repair", "/services/laser-printer-repair"],
  ["Inkjet Printer Repair", "/services/inkjet-printer-repair"],
  ["Same Day Repair", "/services/same-day-printer-repair"],
  ["Scanner Repair", "/services/scanner-repair"],
  ["WiFi Printer Setup", "/services/wifi-printer-setup"]
];

const footerBrands = [
  ["HP Printer Repair", "/brands/hp-printer-repair"],
  ["Canon Printer Repair", "/brands/canon-printer-repair"],
  ["Epson Printer Repair", "/brands/epson-printer-repair"],
  ["Brother Printer Repair", "/brands/brother-printer-repair"],
  ["Xerox Printer Repair", "/brands/xerox-printer-repair"]
];

const footerCommercial = [
  ["Office Printer AMC", "/business-amc/office-printer-amc-hyderabad"],
  ["Printer AMC Hyderabad", "/business-amc/printer-amc-hyderabad"],
  ["School Printer AMC", "/business-amc/school-printer-amc"],
  ["Corporate Printer Support", "/business-amc/corporate-printer-support"],
  ["Clinic Printer Support", "/business-amc/clinic-printer-support"]
];

const footerCompany = [
  ["About", "/about"],
  ["Reviews", "/reviews"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
  ["Request Callback", "/request-callback"],
  ["Areas We Serve", "/areas"]
];

export function Footer() {
  return (
    <footer className="bg-brand-navy pb-24 pt-14 text-white md:pb-10">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <h2 className="text-xl font-extrabold">{business.name}</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-blue-100">
            Trusted printer repair and office printer maintenance from Kukatpally, Hyderabad. Same-day doorstep support for homes, offices, schools and businesses.
          </p>
          <p className="mt-4 text-sm font-semibold">{business.phoneDisplay}</p>
          <p className="mt-1 text-xs text-blue-200">{business.hours}, 7 days</p>
          <p className="mt-3 text-xs text-blue-200">{business.address}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {primaryAreas.slice(0, 8).map((area) => (
              <span className="rounded-md bg-white/10 px-2 py-1 text-xs text-blue-200" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            {footerServices.map(([label, href]) => (
              <li key={href}>
                <Link className="hover:text-white" href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Brands</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            {footerBrands.map(([label, href]) => (
              <li key={href}>
                <Link className="hover:text-white" href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-bold">Commercial</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            {footerCommercial.map(([label, href]) => (
              <li key={href}>
                <Link className="hover:text-white" href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            {footerCompany.map(([label, href]) => (
              <li key={href}>
                <Link className="hover:text-white" href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-bold">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-blue-100">
            <a className="block hover:text-white" href={business.phoneHref}>{business.phoneDisplay}</a>
            <a className="block hover:text-white" href={`mailto:${business.email}`}>{business.email}</a>
            <a className="block hover:text-white" href={business.directionsHref} rel="noopener noreferrer" target="_blank">
              Get directions
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-white/10 pt-6 text-xs text-blue-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© 2026 Harsha Technologies</p>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/sitemap">Sitemap</Link>
            <a className="hover:text-white" href="/llms.txt">llms.txt</a>
            <a className="hover:text-white" href="/robots.txt">robots.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
