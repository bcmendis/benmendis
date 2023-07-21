import { z } from 'zod'

export const ReviewValidatator = z.object({
  job: z.string().min(1).max(100),
  employer: z.string().min(1).max(100),
  review: z.string().min(3).max(100),
});

export type CreateReviewPayload = z.infer<typeof ReviewValidatator>;