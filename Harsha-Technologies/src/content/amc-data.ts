export type AmcData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroDescription: string;
  heroPoints: string[];
  targetCustomers: string[];
  benefits: string[];
  bodyContent: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const amcData: AmcData[] = [
  {
    slug: "printer-amc-hyderabad",
    name: "Printer AMC Hyderabad",
    title: "Printer AMC Service Hyderabad",
    description:
      "Printer AMC in Hyderabad for offices, schools and businesses. Recurring maintenance and priority breakdown support from Harsha Technologies.",
    heroDescription:
      "Annual and monthly printer maintenance contracts in Hyderabad. Preventive care, priority response and reduced downtime for your business.",
    heroPoints: [
      "Preventive maintenance visits",
      "Priority breakdown response",
      "All printer brands covered",
      "Customized contract terms"
    ],
    targetCustomers: ["Offices", "Schools", "Clinics", "Co-working spaces", "Xerox centers", "Retail outlets"],
    benefits: [
      "Planned maintenance reduces surprise breakdowns",
      "Priority response for AMC clients",
      "Technician knows your printer fleet",
      "Predictable maintenance budgeting",
      "Invoice and GST documentation available",
      "Multi-printer fleet support"
    ],
    bodyContent:
      "A printer AMC converts unpredictable repair costs into a structured maintenance plan. Harsha Technologies offers printer AMC in Hyderabad for businesses that need accountable, recurring printer support without the delay of finding a technician each time a printer fails. AMC clients receive scheduled preventive visits, priority breakdown response and a maintenance history for their printer fleet. Call to discuss a customized AMC for your office or business.",
    faqs: [
      {
        question: "What does printer AMC include?",
        answer:
          "AMC includes scheduled preventive visits, priority breakdown response and on-site diagnosis and labor. Consumables are charged separately unless agreed otherwise."
      },
      {
        question: "How many printers are needed for an AMC?",
        answer:
          "We offer AMC from a single printer for businesses dependent on one critical printer up to large multi-device fleet contracts."
      },
      {
        question: "Is GST invoice provided for AMC?",
        answer:
          "Yes. GST documentation is provided for all commercial AMC contracts."
      }
    ]
  },
  {
    slug: "school-printer-amc",
    name: "School Printer AMC",
    title: "School Printer AMC Hyderabad",
    description:
      "Printer AMC for schools and colleges in Hyderabad. Reliable recurring maintenance for school printers, exam papers and admin printing.",
    heroDescription:
      "Printer AMC for schools and colleges in Hyderabad. Prevent printing failures during exam seasons and daily school operations.",
    heroPoints: [
      "School and college printer support",
      "Exam season priority response",
      "High-volume printer maintenance",
      "Affordable school AMC plans"
    ],
    targetCustomers: ["Schools", "Colleges", "Coaching institutes", "Training centers", "Universities"],
    benefits: [
      "No printing downtime during exams",
      "Regular maintenance before high-demand periods",
      "Support for high-volume school printers",
      "Scheduled visits during low-activity periods",
      "Priority emergency response",
      "Invoice for school accounts"
    ],
    bodyContent:
      "Schools and colleges in Hyderabad rely on printers for exam papers, worksheets, notices, marksheets and administrative documents. A printer failure during exam season creates immediate institutional stress. Harsha Technologies provides school printer AMC with preventive visits timed before high-demand periods like exam seasons and scheduled during holidays for minimum disruption. High-volume printer maintenance, toner management and emergency response are included.",
    faqs: [
      {
        question: "Can a school get printer AMC in Hyderabad?",
        answer:
          "Yes. Schools, colleges and coaching centers in Hyderabad can get customized printer AMC plans."
      },
      {
        question: "Is emergency support available during exam season?",
        answer:
          "Yes. AMC clients get priority emergency response. Schools can also schedule preventive visits before exam seasons."
      },
      {
        question: "Do you support high-volume printers used in schools?",
        answer:
          "Yes. Heavy-duty laser printers used for bulk exam printing are included in school AMC plans."
      }
    ]
  },
  {
    slug: "corporate-printer-support",
    name: "Corporate Printer Support",
    title: "Corporate Printer Support Hyderabad",
    description:
      "Corporate printer support in Hyderabad for IT companies, large offices and multi-floor business environments. AMC from Harsha Technologies.",
    heroDescription:
      "Structured corporate printer support for Hyderabad's IT companies, MNCs and large offices. AMC, fleet management and priority breakdown response.",
    heroPoints: [
      "Corporate fleet printer management",
      "IT office priority support",
      "Multi-floor printer coverage",
      "SLA-based response available"
    ],
    targetCustomers: ["IT companies", "MNCs", "Corporate offices", "Co-working spaces", "BPOs", "Large enterprises"],
    benefits: [
      "Printer fleet mapped and maintained",
      "Priority SLA response for breakdowns",
      "Centralized maintenance reporting",
      "Covers all printer brands on floor",
      "Managed print cost reduction",
      "Invoice with GST for accounts"
    ],
    bodyContent:
      "Corporate offices in HITEC City, Madhapur, Gachibowli and Ameerpet manage dozens of printers across multiple floors. Printer failures in this environment affect entire teams. Harsha Technologies provides structured corporate printer support with fleet documentation, scheduled preventive visits, priority breakdown response and centralized maintenance records. IT managers can book support without hunting for a new vendor each time.",
    faqs: [
      {
        question: "Do you support corporate IT offices in Hyderabad?",
        answer:
          "Yes. IT companies and large corporate offices in HITEC City, Madhapur and Gachibowli are covered for printer AMC and support."
      },
      {
        question: "Can you manage printers across multiple office floors?",
        answer:
          "Yes. Corporate AMC covers all printers across floors with centralized maintenance tracking."
      },
      {
        question: "Is SLA-based response available for corporate clients?",
        answer:
          "Yes. Corporate AMC plans can include agreed response time SLAs for business-critical printer failures."
      }
    ]
  },
  {
    slug: "clinic-printer-support",
    name: "Clinic Printer Support",
    title: "Clinic and Hospital Printer Support Hyderabad",
    description:
      "Printer support for clinics and hospitals in Hyderabad. Fast repair and AMC for medical printing, reports and patient documentation.",
    heroDescription:
      "Doorstep printer repair and AMC for clinics, hospitals and diagnostic centers in Hyderabad. Medical printing must not stop.",
    heroPoints: [
      "Clinic and hospital printer support",
      "Medical report printer priority",
      "Fast emergency response",
      "All medical printer brands covered"
    ],
    targetCustomers: ["Clinics", "Hospitals", "Diagnostic labs", "Dental offices", "Physiotherapy centers", "Medical colleges"],
    benefits: [
      "Medical printing has zero tolerance for downtime",
      "Priority emergency response for clinical printers",
      "Support for label, thermal and laser printers",
      "Planned maintenance during off-peak clinic hours",
      "Invoice documentation for clinic accounts",
      "Support for multiple clinic locations"
    ],
    bodyContent:
      "Clinics and hospitals in Hyderabad depend on printers for patient prescriptions, medical reports, lab results, billing and administrative documents. A printer failure in a clinic cannot wait hours for resolution. Harsha Technologies provides priority printer repair and AMC for medical establishments across Hyderabad with emergency response, support for thermal, label and laser printers, and maintenance visits scheduled during off-peak hours.",
    faqs: [
      {
        question: "Do you support clinic and hospital printers in Hyderabad?",
        answer:
          "Yes. Clinics, hospitals and diagnostic labs in Hyderabad can book urgent printer repair or discuss AMC contracts."
      },
      {
        question: "How fast can a technician reach a clinic in an emergency?",
        answer:
          "Clinic emergencies are given priority response. AMC clients receive faster scheduling. Call with your location and issue for current availability."
      },
      {
        question: "Do you repair thermal label printers used in labs?",
        answer:
          "Yes. Thermal, label and barcode printers used in diagnostic labs and pharmacy counters are supported."
      }
    ]
  }
];

export function getAmcBySlug(slug: string): AmcData | undefined {
  return amcData.find((a) => a.slug === slug);
}

export function getAllAmcSlugs(): string[] {
  return amcData.map((a) => a.slug);
}
