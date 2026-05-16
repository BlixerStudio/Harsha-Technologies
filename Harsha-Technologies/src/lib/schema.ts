import { brands, business, primaryAreas, services } from "@/content/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.name,
    url: business.domain,
    telephone: business.phoneDisplay,
    email: business.email,
    image: `${business.domain}${business.logoPath}`,
    logo: `${business.domain}${business.logoPath}`,
    founder: {
      "@type": "Person",
      name: business.ownerName
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Harsha Technologies",
    alternateName: "Harsha Technologies",
    url: "https://harshatechnologies.in/"
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Harsha Technologies",
    url: "https://harshatechnologies.in/",
    logo: `${business.domain}${business.logoPath}`,
    founder: {
      "@type": "Person",
      name: business.ownerName
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9063484335",
      contactType: "customer service"
    }
  };
}
