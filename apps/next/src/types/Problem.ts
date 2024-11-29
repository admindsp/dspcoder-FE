import { z } from "zod";

export const ProblemSchema = z.object({
  id: z.number(),
  type: z.string(),
  title: z.string(),
  difficulty: z.string(),
  tags: z.array(z.string()),
  companies: z.array(z.string()),
  file_path: z.string(),
  likes: z.number(),
  dislikes: z.number(),
  successful_submissions: z.number(),
  failed_submissions: z.number(),
  acceptance_rate: z.number(),
  readme: z.string().optional(),
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
