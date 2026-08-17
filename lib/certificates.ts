export type Certificate = {
  slug: string
  title: string
  code?: string
  issuer: string
  category: string
  date: string
  dateLabel: string
  highlight?: string
  description: string
  pdf: string
}

export const certificates: Certificate[] = [
  {
    slug: "wavumbuzi-entrepreneurship-challenge-2024",
    title: "Wavumbuzi Entrepreneurship Challenge",
    issuer: "Wavumbuzi",
    category: "Entrepreneurship",
    date: "2024-06-19",
    dateLabel: "2024 · Edition 4",
    highlight: "Top 2000 students",
    description:
      "Participated in the Rwanda edition and placed in the top 2000 students of the Wavumbuzi Entrepreneurship Challenge 2024.",
    pdf: "/certificates/wavumbuzi-entrepreneurship-challenge-2024.pdf",
  },
  {
    slug: "network-research-nx201",
    title: "Network Research",
    code: "NX201",
    issuer: "ThinkCyber",
    category: "Cybersecurity",
    date: "2024-11-18",
    dateLabel: "18 Nov 2024",
    description: "Network research training completed with ThinkCyber on the Cyberium Arena simulator.",
    pdf: "/certificates/network-research-nx201.pdf",
  },
  {
    slug: "python-fundamentals-xe105",
    title: "Python Fundamentals",
    code: "XE105",
    issuer: "ThinkCyber",
    category: "Cybersecurity",
    date: "2024-08-26",
    dateLabel: "26 Aug 2024",
    description: "Python fundamentals completed with ThinkCyber on the Cyberium Arena simulator.",
    pdf: "/certificates/python-fundamentals-xe105.pdf",
  },
  {
    slug: "linux-fundamentals-xe103",
    title: "Linux Fundamentals",
    code: "XE103",
    issuer: "ThinkCyber",
    category: "Cybersecurity",
    date: "2024-07-02",
    dateLabel: "2 Jul 2024",
    description: "Linux fundamentals completed with ThinkCyber on the Cyberium Arena simulator.",
    pdf: "/certificates/linux-fundamentals-xe103.pdf",
  },
  {
    slug: "intro-to-cyber-xe101",
    title: "Intro to Cyber",
    code: "XE101",
    issuer: "ThinkCyber",
    category: "Cybersecurity",
    date: "2024-06-12",
    dateLabel: "12 Jun 2024",
    description: "Introductory cybersecurity training completed with ThinkCyber on the Cyberium Arena simulator.",
    pdf: "/certificates/intro-to-cyber-xe101.pdf",
  },
]

export function getCertificateIssuers() {
  return [...new Set(certificates.map((certificate) => certificate.issuer))]
}

export function getCertificatesByIssuer(issuer: string) {
  return certificates.filter((certificate) => certificate.issuer === issuer)
}
