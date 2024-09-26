import { z } from "zod";

export const BlogSchema = z.object({
  id: z.string(),
  title: z.string(),
  abstract: z.string(),
  body: z.string(),
  tags: z.array(z.string()),
  created_at: z.string(),
  updated_at: z.string(),
  user_like_count: z.number(),
  user_view_count: z.number(),
  username: z.string(),
});

export type BlogType = z.infer<typeof BlogSchema>;
