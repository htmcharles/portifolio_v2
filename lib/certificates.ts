export type Certificate = {
  slug: string
  title: string
  code: string
  issuer: string
  platform: string
  date: string
  dateLabel: string
  description: string
  image: string
  pdf: string
}

export const certificates: Certificate[] = [
  {
    slug: "network-research-nx201",
    title: "Network Research",
    code: "NX201",
    issuer: "ThinkCyber",
    platform: "Cyberium Arena",
    date: "2024-11-18",
    dateLabel: "18 Nov 2024",
    description:
      "Cybersecurity training covering network research, completed with the Cyberium Arena simulator.",
    image: "/certificates/network-research-nx201.jpg",
    pdf: "/certificates/network-research-nx201.pdf",
  },
  {
    slug: "python-fundamentals-xe105",
    title: "Python Fundamentals",
    code: "XE105",
    issuer: "ThinkCyber",
    platform: "Cyberium Arena",
    date: "2024-08-26",
    dateLabel: "26 Aug 2024",
    description:
      "Python fundamentals for cybersecurity workflows, completed with the Cyberium Arena simulator.",
    image: "/certificates/python-fundamentals-xe105.jpg",
    pdf: "/certificates/python-fundamentals-xe105.pdf",
  },
  {
    slug: "linux-fundamentals-xe103",
    title: "Linux Fundamentals",
    code: "XE103",
    issuer: "ThinkCyber",
    platform: "Cyberium Arena",
    date: "2024-07-02",
    dateLabel: "2 Jul 2024",
    description:
      "Linux fundamentals for security and systems work, completed with the Cyberium Arena simulator.",
    image: "/certificates/linux-fundamentals-xe103.jpg",
    pdf: "/certificates/linux-fundamentals-xe103.pdf",
  },
  {
    slug: "intro-to-cyber-xe101",
    title: "Intro to Cyber",
    code: "XE101",
    issuer: "ThinkCyber",
    platform: "Cyberium Arena",
    date: "2024-06-12",
    dateLabel: "12 Jun 2024",
    description:
      "Introductory cybersecurity training, completed with the Cyberium Arena simulator.",
    image: "/certificates/intro-to-cyber-xe101.jpg",
    pdf: "/certificates/intro-to-cyber-xe101.pdf",
  },
]
