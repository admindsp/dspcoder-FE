import { z } from "zod";

export const ProblemSchema = z.object({
  id: z.number(),
  type: z.string(),
  title: z.string(),
  difficulty: z.string(),
  topic: z.array(z.string()),
  companies: z.array(z.string()),
  folder_path: z.string(),
});

export const ProblemsSearchParamsSchema = z.object({
  type: z.string().optional(),
  title: z.string().optional(),
  difficulty: z.string().optional(),
  tags: z.string().optional(),
});

export type ProblemType = z.infer<typeof ProblemSchema>;
export type ProblemsSearchParamsType = z.infer<
  typeof ProblemsSearchParamsSchema
>;
