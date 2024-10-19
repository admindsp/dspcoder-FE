import { z } from "zod";

export const ProblemSchema = z.object({
  id: z.number(),
  type: z.array(z.string()),
  title: z.string(),
  difficulty: z.string(),
  topic: z.array(z.string()),
  companies: z.array(z.string()),
  folder_path: z.string(),
});

export type ProblemType = z.infer<typeof ProblemSchema>;
