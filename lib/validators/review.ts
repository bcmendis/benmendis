import { z } from 'zod'

export const ReviewValidatator = z.object({
  review: z.string().min(3).max(100),
});

export type CreateReviewPayload = z.infer<typeof ReviewValidatator>;