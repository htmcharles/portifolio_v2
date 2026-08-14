"use server"

import { z } from "zod"
import { Resend } from "resend"
import { site } from "@/lib/site"

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required."),
  lastName: z.string().trim().min(2, "Last name is required."),
  email: z.string().trim().email("A valid email address is required."),
  projectType: z.string().trim().min(1, "Please choose a project type."),
  message: z.string().trim().min(12, "Share a bit more context about the project or call."),
  preferredDate: z.string().trim().optional(),
  preferredTime: z.string().trim().optional(),
  company: z.string().trim().optional(),
})

export interface ContactFormState {
  status: "idle" | "success" | "error"
  message: string
}

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
    preferredDate: formData.get("preferredDate") || undefined,
    preferredTime: formData.get("preferredTime") || undefined,
    company: formData.get("company"),
  })

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please review the form and try again.",
    }
  }

  if (parsed.data.company) {
    return {
      status: "success",
      message: "Thanks. Your message has been received.",
    }
  }

  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL ?? site.email
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey || !from) {
    console.error("Contact form misconfiguration", {
      hasResendApiKey: Boolean(resendApiKey),
      hasFromAddress: Boolean(from),
    })

    return {
      status: "error",
      message: `Email delivery is not configured yet. Please write to ${site.email} or WhatsApp ${site.phoneDisplay}.`,
    }
  }

  const { firstName, lastName, email, projectType, message, preferredDate, preferredTime } = parsed.data
  const slot =
    preferredDate || preferredTime
      ? `Preferred call: ${preferredDate || "date TBC"} at ${preferredTime || "time TBC"} (Africa/Kigali)`
      : "No call slot selected"

  const resend = new Resend(resendApiKey)
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio inquiry: ${projectType}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Type: ${projectType}`,
      slot,
      "",
      "Message:",
      message,
    ].join("\n"),
  })

  if (error) {
    console.error("Contact form delivery failed", error)

    return {
      status: "error",
      message: `Could not send through the form. Email ${site.email} or WhatsApp ${site.phoneDisplay}.`,
    }
  }

  return {
    status: "success",
    message: "Message sent. I will reply within 24 to 48 hours.",
  }
}
