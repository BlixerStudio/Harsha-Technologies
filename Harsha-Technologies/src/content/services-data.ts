export type ServiceData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroDescription: string;
  heroPoints: string[];
  commonIssues: string[];
  brandsSupported: string[];
  processSteps: string[];
  bodyContent: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const servicesData: ServiceData[] = [
  {
    slug: "laser-printer-repair",
    name: "Laser Printer Repair",
    title: "Laser Printer Repair Hyderabad",
    description:
      "Laser printer repair in Hyderabad for HP LaserJet, Canon, Brother and Xerox models. Doorstep support from Harsha Technologies.",
    heroDescription:
      "Fast doorstep laser printer repair for fuser, toner, drum, paper jam and print quality issues in Hyderabad homes and offices.",
    heroPoints: [
      "HP LaserJet and Canon laser repair",
      "Fuser, toner and drum servicing",
      "Paper jam and offline fix",
      "Office laser printer AMC"
    ],
    commonIssues: [
      "Laser printer fuser error",
      "Toner cartridge not recognized",
      "Drum unit life warning",
      "Faded or smeared laser print output",
      "Paper jam in fuser area",
      "Laser printer not powering on"
    ],
    brandsSupported: ["HP LaserJet", "Canon imageCLASS", "Brother HL series", "Xerox Phaser", "Samsung Xpress", "Ricoh SP series", "Kyocera ECOSYS"],
    processSteps: ["Diagnose issue", "Check toner and drum", "Test paper path", "Clean or replace components", "Test print quality", "Confirm resolution"],
    bodyContent:
      "Laser printers are the standard choice for offices and high-volume home printing in Hyderabad. They use heat-based fusing to produce sharp text output and handle high page volumes reliably. Common failure points include fuser wear, toner depletion, drum aging and paper path obstructions. Harsha Technologies provides doorstep laser printer repair across Hyderabad for HP, Canon, Brother, Xerox and other brands used in both home and commercial settings.",
    faqs: [
      {
        question: "Do you repair laser printers in Hyderabad?",
        answer:
          "Yes. Laser printer repair for HP LaserJet, Canon, Brother, Xerox, Samsung and other brands is available across Hyderabad."
      },
      {
        question: "Can you fix laser printer fuser errors?",
        answer:
          "Yes. Fuser errors are diagnosed on-site. Fuser cleaning, reset or replacement is performed depending on the issue."
      },
      {
        question: "Do you offer laser printer AMC for offices?",
        answer:
          "Yes. Offices with laser printers can get monthly or annual maintenance contracts for preventive servicing and priority breakdown support."
      }
    ]
  },
  {
    slug: "inkjet-printer-repair",
    name: "Inkjet Printer Repair",
    title: "Inkjet Printer Repair Hyderabad",
    description:
      "Inkjet printer repair in Hyderabad for HP, Epson, Canon PIXMA and Brother inkjet models. Doorstep support from Harsha Technologies.",
    heroDescription:
      "Doorstep inkjet printer repair for print head, ink, paper feed and WiFi issues in Hyderabad homes and small offices.",
    heroPoints: [
      "Epson EcoTank and PIXMA repair",
      "Print head cleaning and ink flow fix",
      "Paper feed and jam resolution",
      "WiFi and driver setup included"
    ],
    commonIssues: [
      "Inkjet printer not printing after refill",
      "Print head clogging",
      "Ink not flowing or streaking",
      "Blank page output",
      "Paper not feeding correctly",
      "WiFi printer connection lost"
    ],
    brandsSupported: ["Epson EcoTank", "Canon PIXMA", "HP DeskJet", "HP Ink Tank", "Brother inkjet", "HP OfficeJet"],
    processSteps: ["Inspect ink levels", "Run print head diagnostic", "Perform cleaning cycle", "Check paper path", "Fix connectivity", "Test print quality"],
    bodyContent:
      "Inkjet printers are the most common choice for Hyderabad homes, students and small offices. Epson EcoTank and Canon PIXMA models dominate the home segment for their photo quality and low running costs. Print head clogging is the most frequent issue, especially when printers are not used regularly. Harsha Technologies provides doorstep inkjet printer repair across Hyderabad with head cleaning, ink restoration, paper feed repair and wireless setup.",
    faqs: [
      {
        question: "Do you repair inkjet printers in Hyderabad?",
        answer:
          "Yes. Inkjet repair for Epson EcoTank, Canon PIXMA, HP DeskJet and other models is available at customer location."
      },
      {
        question: "Can you fix Epson print head clogging at home?",
        answer:
          "Yes. Print head cleaning is performed on-site for Epson EcoTank and L-series printers."
      },
      {
        question: "Is inkjet printer WiFi setup included in the repair?",
        answer:
          "Yes. WiFi reconnection and driver setup is included during the repair visit at no extra call charge."
      }
    ]
  },
  {
    slug: "same-day-printer-repair",
    name: "Same Day Printer Repair",
    title: "Same Day Printer Repair Hyderabad",
    description:
      "Same-day doorstep printer repair in Hyderabad for urgent home and office printer failures. Fast response from Harsha Technologies.",
    heroDescription:
      "Urgent same-day doorstep printer repair in Hyderabad. Call now to confirm technician availability for your area and issue.",
    heroPoints: [
      "Same-day priority response",
      "Homes and offices covered",
      "All brands diagnosed",
      "Call to confirm slot availability"
    ],
    commonIssues: [
      "Printer stopped working completely",
      "Office printer down affecting entire team",
      "Paper jam blocking all printing",
      "Printer needed urgently for deadline",
      "Printer showing error with no print",
      "Cartridge or toner emergency"
    ],
    brandsSupported: ["HP", "Canon", "Epson", "Brother", "Samsung", "Xerox", "Ricoh", "Kyocera"],
    processSteps: ["Call with issue and area", "Slot confirmed", "Technician dispatched", "On-site diagnosis", "Repair performed", "Test and confirm"],
    bodyContent:
      "Printer breakdowns rarely happen at convenient times. When a home office worker has a submission due or an office team is stuck waiting on printed documents, same-day repair is the only acceptable answer. Harsha Technologies provides same-day doorstep printer repair in Hyderabad subject to technician slot availability. Call early with your printer brand, area and issue for the best chance of same-day scheduling.",
    faqs: [
      {
        question: "Is same-day printer repair really available in Hyderabad?",
        answer:
          "Yes. Same-day doorstep support is available across our service areas subject to technician slot and route availability. Call early for best results."
      },
      {
        question: "How do I book same-day printer repair?",
        answer:
          "Call or WhatsApp with your printer brand, area and the exact issue. Slot availability will be confirmed immediately."
      },
      {
        question: "Is same-day repair available for office printers?",
        answer:
          "Yes. Office printer downtime is prioritized. Let us know if it is a commercial call for faster response routing."
      }
    ]
  },
  {
    slug: "scanner-repair",
    name: "Scanner Repair",
    title: "Scanner Repair Hyderabad",
    description:
      "Scanner repair in Hyderabad for flatbed, document and multifunction scanner issues. Doorstep support from Harsha Technologies.",
    heroDescription:
      "Doorstep scanner repair in Hyderabad for flatbed, document feeder and multifunction printer scanner issues.",
    heroPoints: [
      "Flatbed and ADF scanner repair",
      "Scan to PC and network fix",
      "Driver and software issues",
      "Office scanner AMC available"
    ],
    commonIssues: [
      "Scanner not detected on PC",
      "Scanner glass lines on scanned image",
      "ADF document feeder jamming",
      "Scan to email not working",
      "Scanner driver installation error",
      "Scanner function disabled on MFP"
    ],
    brandsSupported: ["HP scanner", "Canon scanner", "Epson scanner", "Brother scanner", "Xerox scanner", "Ricoh scanner"],
    processSteps: ["Diagnose scan issue", "Check drivers and software", "Inspect scanner glass", "Test ADF feeder", "Configure scan destinations", "Confirm scan quality"],
    bodyContent:
      "Scanners are central to document workflows in Hyderabad offices, clinics, schools and law firms. When scan-to-email stops working or the ADF feeder jams, document processing halts. Harsha Technologies provides doorstep scanner repair for standalone and multifunction printer scanners across Hyderabad, covering driver issues, ADF problems, glass cleaning and network scan configuration.",
    faqs: [
      {
        question: "Do you repair scanners in Hyderabad?",
        answer:
          "Yes. Flatbed, ADF and network scanner repair is available for all major brands at customer location."
      },
      {
        question: "Can you fix scan to email not working?",
        answer:
          "Yes. Scan to email configuration issues on network printers and multifunction devices are resolved on-site."
      },
      {
        question: "Is ADF feeder repair available?",
        answer:
          "Yes. Automatic document feeder jams, roller wear and pickup issues in ADF scanners are repaired on-site."
      }
    ]
  },
  {
    slug: "cartridge-refill",
    name: "Cartridge Refill",
    title: "Cartridge Refill Service Hyderabad",
    description:
      "Ink cartridge refill service in Hyderabad for HP, Canon, Epson and other printer brands. Doorstep and pickup options available.",
    heroDescription:
      "Printer cartridge refill service in Hyderabad. Save on per-page printing costs with quality ink refill for HP, Canon and Epson cartridges.",
    heroPoints: [
      "HP and Canon cartridge refill",
      "Epson and Brother ink refill",
      "Cost-effective alternative to new cartridge",
      "Quality ink to prevent head damage"
    ],
    commonIssues: [
      "Cartridge shows empty after refill",
      "Ink not recognized after refill",
      "Print quality poor after refill",
      "Cartridge chip reset needed",
      "Cartridge leaking after refill",
      "Color cartridge color mixing"
    ],
    brandsSupported: ["HP cartridges", "Canon cartridges", "Epson cartridges", "Brother cartridges", "Samsung cartridges", "Lexmark cartridges"],
    processSteps: ["Bring or send cartridge", "Inspect cartridge condition", "Fill with quality ink", "Chip reset if needed", "Test in printer", "Confirm print quality"],
    bodyContent:
      "Ink cartridge replacement is one of the highest ongoing costs of inkjet printing. Cartridge refill services provide a cost-effective alternative when cartridges are structurally sound and print heads are clean. Harsha Technologies offers cartridge refill for HP, Canon, Epson and other brands with attention to ink quality to avoid print head damage. Ask about pricing and turnaround for your cartridge model.",
    faqs: [
      {
        question: "Do you offer cartridge refill in Hyderabad?",
        answer:
          "Yes. Ink cartridge refill is available for HP, Canon, Epson, Brother and other brands."
      },
      {
        question: "Can refilled cartridges damage the printer?",
        answer:
          "Using quality ink for refill avoids head damage. We use appropriate ink viscosity and composition for each brand."
      },
      {
        question: "Do you reset cartridge chips after refill?",
        answer:
          "Yes. Cartridge chip reset is performed where applicable so the printer recognizes the refilled cartridge correctly."
      }
    ]
  },
  {
    slug: "wifi-printer-setup",
    name: "WiFi Printer Setup",
    title: "WiFi Printer Setup Hyderabad",
    description:
      "WiFi printer setup in Hyderabad for home and office wireless printers. Doorstep configuration from Harsha Technologies.",
    heroDescription:
      "Doorstep WiFi printer setup in Hyderabad. Wireless configuration, driver installation and shared office printer setup for all brands.",
    heroPoints: [
      "Wireless printer configuration",
      "Driver installation included",
      "Shared office printer setup",
      "Mobile print and AirPrint setup"
    ],
    commonIssues: [
      "Printer not connecting to WiFi router",
      "WiFi printer showing offline after setup",
      "Printer connected but not printing",
      "Driver not found after WiFi setup",
      "Mobile printing not working",
      "Printer IP address conflict on network"
    ],
    brandsSupported: ["HP wireless printers", "Canon wireless printers", "Epson WiFi printers", "Brother network printers", "Samsung WiFi printers", "Xerox network printers"],
    processSteps: ["Connect printer to WiFi", "Install driver on PC", "Configure static IP", "Test from all devices", "Set up mobile printing", "Confirm stable connection"],
    bodyContent:
      "Setting up a WiFi printer sounds simple but often involves router compatibility, driver installation, IP address assignment and device permissions. When done incorrectly, the printer connects initially but drops offline or cannot be found. Harsha Technologies provides doorstep WiFi printer setup in Hyderabad with stable configuration that works across PCs, laptops and mobile devices.",
    faqs: [
      {
        question: "Do you set up WiFi printers in Hyderabad?",
        answer:
          "Yes. Wireless printer setup including driver installation and network configuration is available at customer location."
      },
      {
        question: "Can you set up a shared office WiFi printer?",
        answer:
          "Yes. Office shared printer setup with multiple users and devices is configured on-site."
      },
      {
        question: "Is mobile printing setup included?",
        answer:
          "Yes. AirPrint, Google Cloud Print and mobile app setup is included during the WiFi printer setup visit."
      }
    ]
  },
  {
    slug: "printer-repair",
    name: "Printer Repair",
    title: "Printer Repair Hyderabad - Doorstep Service",
    description:
      "Printer repair in Hyderabad for all brands and types. Same-day doorstep support from Harsha Technologies, Kukatpally.",
    heroDescription:
      "Doorstep printer repair across Hyderabad for homes, offices and businesses. All brands, all types, same-day support available.",
    heroPoints: [
      "All printer brands repaired",
      "Laser, inkjet and multifunction",
      "Same-day doorstep support",
      "Office AMC available"
    ],
    commonIssues: [
      "Printer not printing",
      "Paper jam",
      "Printer offline",
      "Ink or toner problem",
      "WiFi not connecting",
      "Scanner not working"
    ],
    brandsSupported: ["HP", "Canon", "Epson", "Brother", "Samsung", "Xerox", "Ricoh", "Kyocera", "Panasonic", "Zebra"],
    processSteps: ["Call or WhatsApp", "Describe issue", "Technician visit", "On-site diagnosis", "Repair", "Test and confirm"],
    bodyContent:
      "Printer repair in Hyderabad is the core service of Harsha Technologies. From single home printers to multi-device office setups, the goal is always the same — get you printing again as fast as possible. Harsha Technologies covers all major printer brands, repair types and Hyderabad areas from our Kukatpally base. Whether it is a paper jam, offline error, ink problem, toner issue or WiFi setup — call or WhatsApp for fastest booking.",
    faqs: [
      {
        question: "What types of printers do you repair in Hyderabad?",
        answer:
          "We repair all printer types: laser, inkjet, thermal, multifunction, color and mono printers across all major brands."
      },
      {
        question: "How do I book a printer repair visit?",
        answer:
          "Call or WhatsApp with your printer brand, area and issue. A technician visit will be scheduled based on slot availability."
      },
      {
        question: "Do you repair office printers?",
        answer:
          "Yes. Office printer repair and recurring AMC support for multi-printer environments is available."
      }
    ]
  },
  {
    slug: "copier-repair",
    name: "Copier Repair",
    title: "Copier Repair Hyderabad",
    description:
      "Copier repair in Hyderabad for office photocopiers and multifunction copier devices. Commercial support from Harsha Technologies.",
    heroDescription:
      "Doorstep copier repair in Hyderabad for office photocopiers, multifunction devices and high-volume copy machines.",
    heroPoints: [
      "Office copier repair",
      "Xerox and Canon copier support",
      "Toner, drum and fuser servicing",
      "Commercial copier AMC"
    ],
    commonIssues: [
      "Copier paper jam in ADF",
      "Copier toner streak on copies",
      "Copier drum unit failure",
      "Copier not starting",
      "Copy quality degraded",
      "Copier scan function not working"
    ],
    brandsSupported: ["Xerox copiers", "Canon imageRUNNER", "Ricoh Aficio", "Kyocera TASKalfa", "Sharp copiers", "Konica Minolta"],
    processSteps: ["Identify copier model", "Diagnose paper path", "Check toner and drum", "Service fuser", "Test copy quality", "Confirm resolution"],
    bodyContent:
      "Office copiers handle high daily print and copy volumes in Hyderabad's corporate offices, schools, CA firms and government departments. When a copier fails, it creates immediate workflow disruption. Harsha Technologies provides doorstep copier repair for all major brands with expertise in toner, drum, fuser and paper path issues. Commercial AMC is available for offices managing copiers as business-critical equipment.",
    faqs: [
      {
        question: "Do you repair office copiers in Hyderabad?",
        answer:
          "Yes. Xerox, Canon, Ricoh and other office copier brands are repaired at customer location across Hyderabad."
      },
      {
        question: "Can you fix copier paper jam issues?",
        answer:
          "Yes. Copier ADF and paper path jam issues are diagnosed and cleared on-site."
      },
      {
        question: "Is copier AMC available for commercial offices?",
        answer:
          "Yes. Monthly and annual copier maintenance contracts are available for offices with high-volume copy machines."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
