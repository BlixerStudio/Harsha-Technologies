import { Clock, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { business } from "@/content/site";

const items = [
  {
    icon: ShieldCheck,
    title: business.years,
    text: "Practical printer service experience"
  },
  {
    icon: Clock,
    title: "Same-day slots",
    text: "Subject to area and technician availability"
  },
  {
    icon: MapPin,
    title: "Doorstep support",
    text: "Homes, offices, schools, clinics and shops"
  },
  {
    icon: Wrench,
    title: "Multi-brand",
    text: "HP, Canon, Epson, Brother and more"
  }
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-page grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div className="flex items-start gap-3" key={item.title}>
            <div className="mt-1 rounded-md bg-amber-100 p-2 text-brand-navy">
              <item.icon aria-hidden="true" size={20} />
            </div>
            <div>
              <p className="font-extrabold text-brand-navy">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
