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

export const ProblemDescriptionResponseSchema = z.object({
  data: ProblemSchema,
  message: z.string(),
});

export const RunQuestionSchema = z.object({
  response: z.object({
    message: z.string().nullable(),
    output: z.string(),
    status: z.string(),
  }),
  message: z.string().nullable(),
});

export const SubmitQuestionSchema = z.object({
  message: z.string(),
  response: z.object({
    status: z.enum(["FAIL", "SUCCESS"]),
    output: z.object({
      error: z.string(),
      details: z.string(),
      message: z.nullable(z.string()),
    }),
  }),
});


export const BuildQuestionSchema = z.object({
  message: z.string(),
  response: z.object({
    status: z.enum(["PASS", "FAIL"]),
    output: z.string(),
    message: z.string(),
  }),
});

export type ProblemType = z.infer<typeof ProblemSchema>;
export type ProblemsSearchParamsType = z.infer<
  typeof ProblemsSearchParamsSchema
>;

export type ProblemDescriptionResponseType = z.infer<
  typeof ProblemDescriptionResponseSchema
>;

export type RunQuestionType = z.infer<typeof RunQuestionSchema>;
export type SubmitQuestionType = z.infer<typeof SubmitQuestionSchema>;
export type BuildQuestionType = z.infer<typeof BuildQuestionSchema>;
