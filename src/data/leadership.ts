export interface Leader {
  role: string;
  name?: string;
  category: "executive" | "board" | "staff" | "community";
  description: string;
}

export const leadership: Leader[] = [
  {
    role: "Executive Director",
    name: "Nicola Bynoe",
    category: "executive",
    description:
      "Leading Gordonridge Community Development Initiative with deep commitment to resident empowerment, intergenerational connection, and systemic opportunity for Gordonridge families.",
  },
  {
    role: "Chair",
    category: "board",
    description:
      "Providing strategic governance, community stewardship, and leadership over board operations and mission fulfillment.",
  },
  {
    role: "Treasurer",
    category: "board",
    description:
      "Ensuring rigorous financial accountability, transparent budgeting, and sustainable resource management for all community initiatives.",
  },
  {
    role: "Secretary",
    category: "board",
    description:
      "Maintaining official organizational records, board communications, regulatory compliance, and community notices.",
  },
  {
    role: "Board Members",
    category: "board",
    description:
      "Resident and community representatives who contribute lived experience, neighbourhood knowledge, and guidance to the initiative.",
  },
  {
    role: "Community & Administrative Coordinator",
    category: "staff",
    description:
      "Coordinating daily community operations, scheduling activities, program administration, and resident inquiries at the Community Centre.",
  },
  {
    role: "Resident Leaders and Volunteers",
    category: "community",
    description:
      "The heartbeat of Gordonridge — seniors, youth, parents, and neighbours who give their time, care, and lived knowledge to organize food distributions, mentor youth, and lead community projects.",
  },
];

export const leadershipPhilosophy = {
  title: "A Resident-Led Initiative",
  statement:
    "Gordonridge Community Development Initiative was created by residents who understand the strengths, challenges and everyday realities of the Gordonridge community. Our leadership approach ensures that people who understand the community are involved in making decisions about its future.",
};
