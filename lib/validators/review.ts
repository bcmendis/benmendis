import { z } from 'zod'

export const ReviewValidatator = z
  .object({
    job: z
      .string()
      .trim()
      .min(1, { message: "Must be between 1-50 characters" })
      .max(50, { message: "Must be between 1-50 characters" }),
    employer: z
      .string()
      .trim()
      .min(1, { message: "Must be between 1-50 characters" })
      .max(100, {
        message: "Must be between 1-50 characters",
      }),
    review: z
      .string()
      .trim()
      .min(3, { message: "Must be between 3-100 characters" })
      .max(100, { message: "Must be between 3-100 characters" }),
  })
  .required();

export type CreateReviewPayload = z.infer<typeof ReviewValidatator>;