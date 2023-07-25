import { z } from "zod";

export const ContactValidatator = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Name is required" })
      .max(50, { message: "Must be between 1-50 characters" }),
    email: z
      .string()
      .trim()
      .email()
      .min(1, { message: "Email is required" })
      .max(50, {
        message: "Must be between 1-50 characters",
      }),
    phone: z
      .union([
        z.string().length(10, { message: "Must be a valid phone number" }),
        z.string().length(0),
      ])
      .optional()
      .transform(e => (e === "" ? undefined : e)),
    job: z
      .union([
        z
          .string()
          .trim()
          .min(1, { message: "Must be atleast 1 character" })
          .max(50, { message: "Must be under 50 characters" }),
        z.string().length(0),
      ])
      .optional()
      .transform(e => (e === "" ? undefined : e)),
    employer: z
      .union([
        z
          .string()
          .trim()
          .min(1, { message: "Must be atleast 1 character" })
          .max(50, { message: "Must be under 50 characters" }),
        z.string().length(0),
      ])
      .optional()
      .transform(e => (e === "" ? undefined : e)),
    message: z
      .string()
      .trim()
      .min(1, { message: "Message is required" })
      .max(1000, { message: "Must be between 3-1000 characters" }),
  })
  .required();

export type CreateContactPayload = z.infer<typeof ContactValidatator>;
