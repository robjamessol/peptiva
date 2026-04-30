export interface Tier {
  id: "researcher" | "lab" | "institution";
  name: string;
  priceCents: number;
  cadence: string;
  perks: string[];
  highlight?: boolean;
}

export const TIERS: Tier[] = [
  {
    id: "researcher",
    name: "Researcher",
    priceCents: 4900,
    cadence: "/month",
    perks: [
      "10% off every research order",
      "Auto-shipment scheduling for any single product",
      "Member-only blog and characterization deep-dives",
      "Saved COA library across all past orders",
    ],
  },
  {
    id: "lab",
    name: "Lab",
    priceCents: 14900,
    cadence: "/month",
    perks: [
      "15% off every research order",
      "Schedule auto-shipments for up to 6 products",
      "Priority batch reservations on new lots",
      "Quarterly characterization summary delivered as PDF",
      "Two member seats with shared dashboard",
    ],
    highlight: true,
  },
  {
    id: "institution",
    name: "Institution",
    priceCents: 0,
    cadence: "Custom",
    perks: [
      "Volume pricing per quarter",
      "Dedicated PO and net-30 invoicing",
      "Sterility / endotoxin batch certification on request",
      "Custom characterization panels",
      "Up to 10 member seats",
    ],
  },
];
