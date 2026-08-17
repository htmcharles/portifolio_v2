import "server-only"

import { access, readdir } from "node:fs/promises"
import path from "node:path"
import { constants as fsConstants } from "node:fs"
import { cache } from "react"

export type Certificate = {
  slug: string
  title: string
  code?: string
  issuer: string
  highlight?: string
  dateLabel?: string
  year?: string
  pdf?: string
}

type CatalogEntry = {
  slug: string
  title: string
  issuer: string
  highlight?: string
  dateLabel?: string
  year?: string
  /** Filename only; matched anywhere under public/certificates */
  pdfFile?: string
}

const CERTIFICATES_ROOT = path.join(process.cwd(), "public", "certificates")

const FOLDER_ISSUERS: Record<string, string> = {
  "Course certificates": "Think Cyber / Cyberium",
  Wavumbuzi: "Wavumbuzi",
  iLead: "iLead",
  "FIRST LEGO League": "FIRST LEGO League",
  "RMC AIMS": "RMC / AIMS",
  "Rwanda Coding Academy": "Rwanda Coding Academy",
}

const ISSUER_ORDER = [
  "Wavumbuzi",
  "Think Cyber / Cyberium",
  "iLead",
  "FIRST LEGO League",
  "RMC / AIMS",
  "Rwanda Coding Academy",
]

const catalog: CatalogEntry[] = [
  {
    slug: "wavumbuzi-entrepreneurship-challenge-2024",
    title: "Wavumbuzi Entrepreneurship Challenge",
    issuer: "Wavumbuzi",
    highlight: "Top 2000 students",
    dateLabel: "2024 · Edition 4",
    year: "2024",
    pdfFile: "wavumbuzi-entrepreneurship-challenge-2024.pdf",
  },
  {
    slug: "ilead-leadership-program",
    title: "iLead Leadership Program",
    issuer: "iLead",
  },
  {
    slug: "first-lego-league",
    title: "FIRST LEGO League",
    issuer: "FIRST LEGO League",
    highlight: "National 2nd place · International award, Morocco",
  },
  {
    slug: "rmc-aims-national-mathematics-competition",
    title: "RMC / AIMS National Mathematics Competition",
    issuer: "RMC / AIMS",
    highlight: "National finalist",
  },
  {
    slug: "rca-student-representative-chairman",
    title: "Student Representative, Chairman",
    issuer: "Rwanda Coding Academy",
    highlight: "2025–2026",
    year: "2026",
  },
]

type PdfFile = {
  abs: string
  rel: string
  name: string
}

async function listPdfFiles(dir: string, rel = ""): Promise<PdfFile[]> {
  let entries

  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return []
  }

  const files: PdfFile[] = []

  for (const entry of entries) {
    const nextRel = rel ? `${rel}/${entry.name}` : entry.name
    const abs = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await listPdfFiles(abs, nextRel)))
      continue
    }

    if (entry.name.toLowerCase().endsWith(".pdf")) {
      files.push({ abs, rel: nextRel.replaceAll("\\", "/"), name: entry.name })
    }
  }

  return files
}

function publicPdfUrl(rel: string) {
  return `/certificates/${rel.split("/").map(encodeURIComponent).join("/")}`
}

function parseFilename(filename: string) {
  const stem = filename.replace(/\.pdf$/i, "")
  const codeMatch = stem.match(/-([a-z]{2,3}\d{3,4})$/i)
  const code = codeMatch ? codeMatch[1].toUpperCase() : undefined
  const core = codeMatch && codeMatch.index !== undefined ? stem.slice(0, codeMatch.index) : stem
  const title = core
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
  const year = stem.match(/(?:19|20)\d{2}/)?.[0]

  return { title: title || stem, code, year }
}

function issuerFromRel(rel: string) {
  const folder = rel.split("/")[0]
  if (rel.includes("/") && FOLDER_ISSUERS[folder]) {
    return FOLDER_ISSUERS[folder]
  }
  if (rel.includes("/")) {
    return folder
  }
  return "Certificates"
}

async function pdfExists(abs: string) {
  try {
    await access(abs, fsConstants.R_OK)
    return true
  } catch {
    return false
  }
}

export const loadCertificates = cache(async (): Promise<Certificate[]> => {
  const files = await listPdfFiles(CERTIFICATES_ROOT)
  const used = new Set<string>()
  const certificates: Certificate[] = []

  for (const entry of catalog) {
    const named = entry.pdfFile
      ? files.find((file) => file.name.toLowerCase() === entry.pdfFile!.toLowerCase())
      : undefined
    const fromFolder = files.find(
      (file) => !used.has(file.rel) && issuerFromRel(file.rel) === entry.issuer && file !== named,
    )
    const match = named ?? fromFolder

    if (match) {
      used.add(match.rel)
    }

    certificates.push({
      slug: entry.slug,
      title: entry.title,
      issuer: entry.issuer,
      highlight: entry.highlight,
      dateLabel: entry.dateLabel,
      year: entry.year,
      pdf: match && (await pdfExists(match.abs)) ? publicPdfUrl(match.rel) : undefined,
    })
  }

  for (const file of files) {
    if (used.has(file.rel)) continue

    const parsed = parseFilename(file.name)
    certificates.push({
      slug: file.rel.replace(/\.pdf$/i, "").replaceAll("/", "-"),
      title: parsed.title,
      code: parsed.code,
      issuer: issuerFromRel(file.rel),
      dateLabel: parsed.year,
      year: parsed.year,
      pdf: publicPdfUrl(file.rel),
    })
  }

  return certificates.sort((a, b) => {
    const aOrder = ISSUER_ORDER.includes(a.issuer) ? ISSUER_ORDER.indexOf(a.issuer) : 99
    const bOrder = ISSUER_ORDER.includes(b.issuer) ? ISSUER_ORDER.indexOf(b.issuer) : 99
    if (aOrder !== bOrder) return aOrder - bOrder
    const yearDelta = Number(b.year ?? 0) - Number(a.year ?? 0)
    if (yearDelta !== 0) return yearDelta
    return a.title.localeCompare(b.title)
  })
})

export async function getCertificateIssuers() {
  const certificates = await loadCertificates()
  const seen = new Set<string>()
  const issuers: string[] = []

  for (const certificate of certificates) {
    if (seen.has(certificate.issuer)) continue
    seen.add(certificate.issuer)
    issuers.push(certificate.issuer)
  }

  return issuers
}

export function latestCertificateYear(certificates: Certificate[]) {
  const years = certificates
    .map((certificate) => Number(certificate.year))
    .filter((year) => Number.isFinite(year) && year > 0)

  if (years.length === 0) return undefined
  return String(Math.max(...years))
}
