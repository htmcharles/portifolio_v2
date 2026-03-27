"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required."),
  lastName: z.string().trim().min(2, "Last name is required."),
  email: z.string().trim().email("A valid email address is required."),
  projectType: z.string().trim().min(1, "Please choose a project type."),
  message: z.string().trim().min(20, "Share a bit more context about the project."),
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
  const to = process.env.CONTACT_TO_EMAIL ?? "hatumacharles1@gmail.com"

  if (!process.env.RESEND_API_KEY || !from) {
    return {
      status: "error",
      message: "Contact form is not configured yet. Please email me directly at hatumacharles1@gmail.com.",
    }
  }

  const { firstName, lastName, email, projectType, message } = parsed.data

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `New project inquiry: ${projectType}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  })

  if (error) {
    return {
      status: "error",
      message: "Message delivery failed. Please try again or email me directly.",
    }
  }

  return {
    status: "success",
    message: "Message sent successfully. I will get back to you soon.",
  }
}
