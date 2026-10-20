import { z } from "zod";

export const topics = [
  "A data analyst role",
  "A consulting project",
  "Training for my team",
  "Mentorship",
  "Speaking or media",
  "Something else",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address, for example name@company.com.").max(200),
  organisation: z.string().trim().max(150).optional().or(z.literal("")),
  topic: z.enum(topics, { errorMap: () => ({ message: "Please select an enquiry type." }) }),
  message: z.string().trim().min(20, "Please add a little more detail (at least 20 characters).").max(5000),
  /** Honeypot: real people never see or fill this. */
  website: z.string().max(500).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
