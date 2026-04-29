import { brands, business, primaryAreas, services } from "@/content/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.name,
    url: business.domain,
    telephone: business.phoneDisplay,
    email: business.email,
    image: `${business.domain}/images/brand/harsha-technologies-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ground Floor, Nirav's Royal Fontana, New Balaji Nagar, Balaji Nagar",
      addressLocality: "Kukatpally, Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude
    },
    openingHours: "Mo-Su 08:00-21:00",
    areaServed: primaryAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Hyderabad`
    })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        serviceType: service.title
      }
    })),
    brand: brands
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.domain}${item.url}`
    }))
  };
}
