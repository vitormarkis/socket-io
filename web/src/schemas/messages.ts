import { z } from "zod";

export const messageSchema = z.object({
  username: z.string(),
  message: z.string()
})

export type IMessage = z.infer<typeof messageSchema>