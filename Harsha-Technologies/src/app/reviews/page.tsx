import { Metadata } from "next";
import { CTAButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Customer Reviews - Harsha Technologies Printer Repair",
  description:
    "Read what customers say about Harsha Technologies printer repair service in Hyderabad. Honest reviews from homes and offices.",
  path: "/reviews"
});

const reviews = [
  {
    name: "Priya Sharma",
    location: "KPHB Colony",
    rating: 5,
    text: "My HP LaserJet was jamming every few pages. The technician came the same day, identified a worn roller, cleaned the entire paper path and it has been working perfectly since. Very professional."
  },
  {
    name: "Ramesh Naidu",
    location: "Madhapur Office",
    rating: 5,
    text: "We have 4 printers in our office and all were showing different issues. Harsha Technologies sent a technician, diagnosed all 4 within 2 hours and fixed 3 on the spot. The 4th needed a part which was arranged within a day. Excellent service."
  },
  {
    name: "Fatima Begum",
    location: "Ameerpet",
    rating: 5,
    text: "Called at 10am about my Epson EcoTank not printing after refill. Technician came by noon, did a deep head clean and the printer started working. Clear pricing, no hidden charges."
  },
  {
    name: "Suresh Reddy",
    location: "Gachibowli Startup",
    rating: 5,
    text: "We signed an AMC after our first repair visit. The preventive checks have reduced our printer downtime significantly. Recommended for any IT office that cannot afford printing interruptions."
  },
  {
    name: "Anita Krishnaswamy",
    location: "Jubilee Hills",
    rating: 5,
    text: "Canon PIXMA was not printing at all. Technician diagnosed a clogged print head, did the cleaning procedure on-site and tested before leaving. Reasonable charges and very polite."
  },
  {
    name: "Mohammed Irfan",
    location: "Chandanagar",
    rating: 5,
    text: "Fast, honest and professional. My Brother laser printer had a network issue. The technician configured it properly, set a static IP so it stays connected, and showed me how to share it with my team."
  },
  {
    name: "Kavitha Lakshmi",
    location: "Bachupally School",
    rating: 5,
    text: "We are a school and our main printer failed 2 days before exams. Harsha Technologies treated it as an emergency and had it fixed the same evening. We printed all exam papers without any issue."
  },
  {
    name: "Venkateswara Rao",
    location: "Nizampet",
    rating: 5,
    text: "Good service. Technician was on time, explained the problem clearly, and fixed the HP printer offline issue within 30 minutes. Would recommend to anyone in the KPHB area."
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span className="text-brand-gold" key={i}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Reviews", url: "/reviews" }
          ]))
        }}
      />

      <div className="bg-brand-soft py-16">
        <div className="container-page">
          <h1 className="text-4xl font-black text-brand-navy sm:text-5xl">
            Customer reviews
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
            What Hyderabad homes, offices and businesses say about Harsha Technologies printer repair service.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex gap-1 text-2xl text-brand-gold">
              {"★★★★★"}
            </div>
            <div>
              <p className="font-black text-brand-navy">4.9 / 5</p>
              <p className="text-sm text-muted">Based on customer feedback</p>
            </div>
          </div>
        </div>
      </div>

      <TrustBar />

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            title="What customers say"
            text="Feedback from homes, offices, schools and commercial businesses across Hyderabad."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map(({ name, location, rating, text }) => (
              <div className="rounded-lg border border-line bg-brand-soft p-6" key={name}>
                <StarRating count={rating} />
                <p className="mt-4 leading-7 text-slate-700">&ldquo;{text}&rdquo;</p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="font-bold text-brand-navy">{name}</p>
                  <p className="text-sm text-muted">{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-navy text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Ready for the same experience?
            </h2>
            <p className="mt-4 leading-8 text-blue-100">
              Call or WhatsApp with your printer brand, area and issue. Same-day doorstep support available.
            </p>
          </div>
          <CTAButtons commercial className="self-center" />
        </div>
      </section>
    </main>
  );
}
