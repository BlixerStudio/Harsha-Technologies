export type BrandData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroDescription: string;
  heroPoints: string[];
  modelFamilies: string[];
  commonIssues: string[];
  repairLogic: string;
  bodyContent: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const brandsData: BrandData[] = [
  {
    slug: "canon-printer-repair",
    name: "Canon",
    title: "Canon Printer Repair Hyderabad",
    description:
      "Canon printer repair in Hyderabad for PIXMA, laser and multifunction models. Doorstep support from Harsha Technologies.",
    heroDescription:
      "Fast doorstep support for Canon PIXMA, laser, inkjet and multifunction printer problems. Home and office Canon repair across Hyderabad.",
    heroPoints: [
      "Canon PIXMA and laser repair",
      "Ink, paper jam and offline fixes",
      "Canon scanner and MFP support",
      "Office Canon printer AMC"
    ],
    modelFamilies: [
      "Canon PIXMA series",
      "Canon imageCLASS laser",
      "Canon MAXIFY office inkjet",
      "Canon imageRUNNER office printers",
      "Canon multifunction printers",
      "Canon scanner models"
    ],
    commonIssues: [
      "Canon printer not printing",
      "Canon ink cartridge not recognized",
      "Canon paper jam error",
      "Canon printer offline issue",
      "Canon print head clogging",
      "Canon scanner not working"
    ],
    repairLogic:
      "Canon printers use proprietary ink systems and print head designs. Common failure points include ink head clogging in PIXMA models, paper pickup issues and cartridge chip errors. Office imageRUNNER models may need drum or toner unit servicing.",
    bodyContent:
      "Canon printers are widely used across Hyderabad homes, offices and businesses. PIXMA models are popular for home and photo printing while imageRUNNER and imageCLASS models handle heavy office workloads. Harsha Technologies provides doorstep repair for Canon printers that are not printing, offline, jamming paper, showing cartridge errors or failing to scan. For offices with recurring Canon printer issues, ask about AMC support.",
    faqs: [
      {
        question: "Do you repair Canon printers in Hyderabad?",
        answer:
          "Yes. Harsha Technologies repairs Canon PIXMA, imageCLASS, imageRUNNER and multifunction printers across Hyderabad."
      },
      {
        question: "Can you fix Canon print head clogging?",
        answer:
          "Yes. Canon print head cleaning and unclogging is handled on-site with diagnosis of severity before deciding on cleaning or replacement."
      },
      {
        question: "Do you support Canon office printers?",
        answer:
          "Yes. Canon imageRUNNER and MAXIFY office printers used in commercial settings can be repaired or covered under AMC."
      }
    ]
  },
  {
    slug: "epson-printer-repair",
    name: "Epson",
    title: "Epson Printer Repair Hyderabad",
    description:
      "Epson printer repair in Hyderabad for EcoTank, inkjet, L-series and office models. Doorstep support from Harsha Technologies.",
    heroDescription:
      "Fast doorstep support for Epson EcoTank, L-series, inkjet and office printer problems in Hyderabad.",
    heroPoints: [
      "Epson EcoTank and L-series repair",
      "Head cleaning and ink flow fix",
      "Offline and WiFi issues",
      "Office Epson printer support"
    ],
    modelFamilies: [
      "Epson EcoTank series",
      "Epson L-series ink tank",
      "Epson Expression inkjet",
      "Epson WorkForce office inkjet",
      "Epson photo printers",
      "Epson multifunction printers"
    ],
    commonIssues: [
      "Epson printer not printing after refill",
      "Epson print head clogging",
      "Epson ink not flowing properly",
      "Epson waste ink pad full error",
      "Epson WiFi connection lost",
      "Epson paper feed problem"
    ],
    repairLogic:
      "Epson EcoTank and L-series printers are prone to print head drying if unused for long periods. Waste ink pad saturation is a known lifecycle issue. Head cleaning cycles, alignment and ink flow checks resolve most cases without part replacement.",
    bodyContent:
      "Epson printers, especially EcoTank and L-series ink tank models, are extremely popular in Hyderabad homes and small offices for their low per-page cost. However, irregular use or prolonged storage can cause print heads to clog or ink to dry. Harsha Technologies provides doorstep Epson printer repair including head cleaning, ink flow restoration, waste pad reset and WiFi setup across Hyderabad.",
    faqs: [
      {
        question: "Do you repair Epson EcoTank printers in Hyderabad?",
        answer:
          "Yes. Epson EcoTank, L-series and other inkjet models are repaired at customer location across Hyderabad."
      },
      {
        question: "Can you fix Epson print head clogging?",
        answer:
          "Yes. Epson print head cleaning is performed on-site with diagnosis to determine severity and appropriate fix."
      },
      {
        question: "Is waste ink pad reset available for Epson printers?",
        answer:
          "Yes. Epson waste ink pad full errors can be resolved through reset and pad replacement where necessary."
      }
    ]
  },
  {
    slug: "brother-printer-repair",
    name: "Brother",
    title: "Brother Printer Repair Hyderabad",
    description:
      "Brother printer repair in Hyderabad for laser, inkjet and multifunction models. Doorstep support from Harsha Technologies.",
    heroDescription:
      "Doorstep support for Brother laser printers, inkjet MFPs and network printer issues in Hyderabad homes and offices.",
    heroPoints: [
      "Brother laser and MFP repair",
      "Network and WiFi troubleshooting",
      "Toner and drum issues",
      "Office Brother printer AMC"
    ],
    modelFamilies: [
      "Brother HL laser printers",
      "Brother DCP multifunction",
      "Brother MFC all-in-one",
      "Brother inkjet printers",
      "Brother label printers",
      "Brother network printers"
    ],
    commonIssues: [
      "Brother printer offline on network",
      "Brother toner not recognized",
      "Brother drum unit error",
      "Brother paper jam in duplex unit",
      "Brother WiFi printer not connecting",
      "Brother fuser error"
    ],
    repairLogic:
      "Brother laser printers are robust office workhorses but require toner, drum and fuser maintenance over time. Network connectivity issues are common when IP addresses change. Duplex paper jam issues often relate to debris in feed paths.",
    bodyContent:
      "Brother printers are a reliable choice for offices, home offices and small businesses in Hyderabad. Their laser and multifunction models handle high print volumes efficiently. Harsha Technologies provides doorstep Brother printer repair for toner issues, drum errors, network connectivity problems, paper jams and fuser faults with AMC options for offices that depend on Brother printing daily.",
    faqs: [
      {
        question: "Do you repair Brother printers in Hyderabad?",
        answer:
          "Yes. Brother HL, DCP and MFC laser and inkjet models are serviced at customer location across Hyderabad."
      },
      {
        question: "Can you fix Brother printer offline on network?",
        answer:
          "Yes. Brother network printer offline issues involving IP address, driver or spooler are diagnosed and fixed on-site."
      },
      {
        question: "Do you support Brother laser printer AMC for offices?",
        answer:
          "Yes. Office AMC contracts covering Brother laser printers are available for monthly and annual plans."
      }
    ]
  },
  {
    slug: "samsung-printer-repair",
    name: "Samsung",
    title: "Samsung Printer Repair Hyderabad",
    description:
      "Samsung printer repair in Hyderabad for Xpress laser, laser multifunction and older Samsung models. Doorstep support from Harsha Technologies.",
    heroDescription:
      "Doorstep support for Samsung Xpress, laser and multifunction printer problems in Hyderabad.",
    heroPoints: [
      "Samsung Xpress laser repair",
      "Toner and drum servicing",
      "Offline and network fix",
      "Office printer support"
    ],
    modelFamilies: [
      "Samsung Xpress M2020",
      "Samsung Xpress M2835",
      "Samsung SCX multifunction",
      "Samsung CLP color laser",
      "Samsung CLX color multifunction",
      "Older Samsung ML series"
    ],
    commonIssues: [
      "Samsung printer toner low error",
      "Samsung printer not detected on PC",
      "Samsung paper jam error",
      "Samsung printer offline issue",
      "Samsung printing faded output",
      "Samsung printer USB not recognized"
    ],
    repairLogic:
      "Samsung printers use proprietary toner cartridges that can trigger low warnings even with toner remaining. Drum units wear with high print volume. USB and driver issues are common on older models after OS updates.",
    bodyContent:
      "Samsung laser printers, especially the popular Xpress series, are widely used in Hyderabad offices and homes for cost-efficient mono printing. Samsung has transitioned its printer business, so some models need careful parts sourcing. Harsha Technologies handles Samsung printer repair for toner, drum, paper jam, offline and driver issues across Hyderabad.",
    faqs: [
      {
        question: "Do you repair Samsung printers in Hyderabad?",
        answer:
          "Yes. Samsung Xpress, SCX and other laser printer models are repaired at customer location in Hyderabad."
      },
      {
        question: "Can you fix Samsung toner error issues?",
        answer:
          "Yes. Samsung toner cartridge errors including false low warnings are diagnosed and resolved on-site."
      },
      {
        question: "Is Samsung printer driver support available?",
        answer:
          "Yes. Samsung printer driver installation and USB connectivity issues are fixed during the visit."
      }
    ]
  },
  {
    slug: "xerox-printer-repair",
    name: "Xerox",
    title: "Xerox Printer Repair Hyderabad",
    description:
      "Xerox printer repair in Hyderabad for office laser, multifunction and WorkCentre models. Commercial support from Harsha Technologies.",
    heroDescription:
      "Commercial Xerox printer repair in Hyderabad for WorkCentre, office laser and multifunction copier models.",
    heroPoints: [
      "Xerox WorkCentre repair",
      "Office copier and MFP support",
      "Toner and drum servicing",
      "Commercial AMC for Xerox"
    ],
    modelFamilies: [
      "Xerox WorkCentre series",
      "Xerox Phaser laser printers",
      "Xerox VersaLink office printers",
      "Xerox AltaLink multifunction",
      "Xerox B-series mono laser",
      "Xerox C-series color laser"
    ],
    commonIssues: [
      "Xerox printer paper jam in bypass tray",
      "Xerox toner cartridge replacement",
      "Xerox drum unit life expired",
      "Xerox printer network not connecting",
      "Xerox WorkCentre error codes",
      "Xerox fuser unit failure"
    ],
    repairLogic:
      "Xerox office printers are enterprise-grade devices designed for high volume. Common maintenance includes fuser replacement, drum and toner unit swaps, paper feed roller cleaning and network reconfiguration. WorkCentre error codes often point to specific replaceable components.",
    bodyContent:
      "Xerox printers and multifunction devices are the workhorses of Hyderabad's commercial offices, xerox centers and government departments. Their high duty cycle design means maintenance needs are predictable but require a knowledgeable technician. Harsha Technologies provides commercial Xerox printer repair and AMC for offices, xerox shops and businesses that cannot afford extended downtime.",
    faqs: [
      {
        question: "Do you repair Xerox printers in Hyderabad?",
        answer:
          "Yes. Xerox WorkCentre, Phaser, VersaLink and other office models are serviced at customer location."
      },
      {
        question: "Can you fix Xerox fuser and drum issues?",
        answer:
          "Yes. Fuser unit, drum replacement and toner-related Xerox errors are diagnosed and resolved during the visit."
      },
      {
        question: "Is Xerox printer AMC available for xerox shops?",
        answer:
          "Yes. Xerox centers and commercial offices can discuss customized AMC contracts for recurring Xerox maintenance."
      }
    ]
  },
  {
    slug: "ricoh-printer-repair",
    name: "Ricoh",
    title: "Ricoh Printer Repair Hyderabad",
    description:
      "Ricoh printer repair in Hyderabad for office laser, copier and multifunction models. Commercial support from Harsha Technologies.",
    heroDescription:
      "Doorstep Ricoh printer repair in Hyderabad for office copiers, laser printers and multifunction devices.",
    heroPoints: [
      "Ricoh office copier repair",
      "Toner and drum maintenance",
      "Network and scan support",
      "Commercial Ricoh AMC"
    ],
    modelFamilies: [
      "Ricoh SP series laser printers",
      "Ricoh Aficio multifunction",
      "Ricoh IM series office",
      "Ricoh MP series copiers",
      "Ricoh color laser printers",
      "Ricoh wide format printers"
    ],
    commonIssues: [
      "Ricoh printer SC error code",
      "Ricoh toner not recognized",
      "Ricoh fuser error",
      "Ricoh paper jam in feeder",
      "Ricoh copier scan function not working",
      "Ricoh printer offline on network"
    ],
    repairLogic:
      "Ricoh printers use service codes to indicate component failures. SC codes pointing to fuser, drum or developer issues require component-level diagnosis. Toner reset and firmware issues are also common in older Ricoh models.",
    bodyContent:
      "Ricoh office printers and copiers handle heavy document workloads in Hyderabad's corporate offices, CA firms, government departments and educational institutions. Their multifunction capability makes them central to operations, so downtime is costly. Harsha Technologies provides doorstep Ricoh printer repair and commercial AMC for offices managing Ricoh devices.",
    faqs: [
      {
        question: "Do you repair Ricoh printers in Hyderabad?",
        answer:
          "Yes. Ricoh SP, Aficio, IM and MP series office printers are repaired at customer location in Hyderabad."
      },
      {
        question: "Can you fix Ricoh SC error codes?",
        answer:
          "Yes. Ricoh SC error code diagnosis and component repair is performed on-site with availability confirmation."
      },
      {
        question: "Is Ricoh copier AMC available in Hyderabad?",
        answer:
          "Yes. Commercial AMC for Ricoh copiers and multifunction printers is available for offices with recurring needs."
      }
    ]
  },
  {
    slug: "kyocera-printer-repair",
    name: "Kyocera",
    title: "Kyocera Printer Repair Hyderabad",
    description:
      "Kyocera printer repair in Hyderabad for ECOSYS office laser and multifunction models. Commercial support from Harsha Technologies.",
    heroDescription:
      "Doorstep Kyocera ECOSYS printer repair in Hyderabad for commercial offices and high-volume printing environments.",
    heroPoints: [
      "Kyocera ECOSYS repair",
      "Drum and toner servicing",
      "Network printer troubleshooting",
      "Corporate Kyocera AMC"
    ],
    modelFamilies: [
      "Kyocera ECOSYS laser printers",
      "Kyocera ECOSYS multifunction",
      "Kyocera TASKalfa office",
      "Kyocera FS series printers",
      "Kyocera color laser",
      "Kyocera wide format"
    ],
    commonIssues: [
      "Kyocera toner cartridge not recognized",
      "Kyocera drum unit life warning",
      "Kyocera paper jam error",
      "Kyocera network printing not working",
      "Kyocera printing very slow",
      "Kyocera error code display"
    ],
    repairLogic:
      "Kyocera's ECOSYS design uses long-life drum units shared across multiple toner cartridges. Drum life warnings do not always require immediate replacement. Toner chip compatibility and maintenance kit intervals are key maintenance factors.",
    bodyContent:
      "Kyocera ECOSYS printers are preferred in Hyderabad's corporate offices, banks and government departments for their low cost-per-page and reliable high-volume output. The long-life drum system reduces consumable costs but requires calibrated maintenance. Harsha Technologies provides doorstep Kyocera printer repair and commercial AMC for corporate and institutional Kyocera users.",
    faqs: [
      {
        question: "Do you repair Kyocera printers in Hyderabad?",
        answer:
          "Yes. Kyocera ECOSYS, TASKalfa and FS series office printers are serviced at customer location."
      },
      {
        question: "Can you fix Kyocera drum unit warnings?",
        answer:
          "Yes. Kyocera drum life warnings are assessed and resolved with cleaning, reset or replacement as needed."
      },
      {
        question: "Is Kyocera printer AMC available for banks and corporates?",
        answer:
          "Yes. Structured AMC for Kyocera office printers is available for banks, institutions and corporate offices."
      }
    ]
  },
  {
    slug: "panasonic-printer-repair",
    name: "Panasonic",
    title: "Panasonic Printer Repair Hyderabad",
    description:
      "Panasonic printer and fax machine repair in Hyderabad. Doorstep support from Harsha Technologies.",
    heroDescription:
      "Doorstep Panasonic printer and fax repair in Hyderabad for homes, offices and commercial setups.",
    heroPoints: [
      "Panasonic printer repair",
      "Panasonic fax machine support",
      "Toner and drum servicing",
      "Office support available"
    ],
    modelFamilies: [
      "Panasonic KX laser printers",
      "Panasonic KX fax machines",
      "Panasonic multifunction printers",
      "Panasonic plain paper fax",
      "Panasonic KX-MB series MFP",
      "Older Panasonic office models"
    ],
    commonIssues: [
      "Panasonic printer toner empty",
      "Panasonic fax not receiving",
      "Panasonic paper jam error",
      "Panasonic drum unit replacement",
      "Panasonic printer offline",
      "Panasonic scan function error"
    ],
    repairLogic:
      "Panasonic printers and fax machines use toner-based systems with drum units that require periodic replacement. Older KX-series models may need parts sourcing. Fax issues often relate to line connectivity or roller wear.",
    bodyContent:
      "Panasonic KX-series printers and fax machines are common in Hyderabad's older offices, government departments and businesses that have not yet transitioned away from fax-based document workflows. Toner replacement, drum servicing and fax function repair are the most common needs. Harsha Technologies provides doorstep Panasonic printer and fax repair across Hyderabad.",
    faqs: [
      {
        question: "Do you repair Panasonic printers in Hyderabad?",
        answer:
          "Yes. Panasonic KX-series laser printers and multifunction models are repaired at customer location."
      },
      {
        question: "Can you fix Panasonic fax machines?",
        answer:
          "Yes. Panasonic KX fax machine issues including receive failure, paper jam and toner are handled on-site."
      },
      {
        question: "Is Panasonic drum unit replacement available?",
        answer:
          "Yes. Drum unit replacement for Panasonic KX printers is available with parts sourced as needed."
      }
    ]
  }
];

export function getBrandBySlug(slug: string): BrandData | undefined {
  return brandsData.find((b) => b.slug === slug);
}

export function getAllBrandSlugs(): string[] {
  return brandsData.map((b) => b.slug);
}
