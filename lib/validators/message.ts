import {z} from "zod";

export const messageValidator = z.object({
  id: z.string(),
  isUserMessage: z.boolean(),
  text: z.string()
})


//array validator

export const messageArrayValidator = z.array(messageValidator);

export type Message = z.infer<typeof messageValidator>;