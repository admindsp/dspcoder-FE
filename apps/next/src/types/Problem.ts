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
  solution: z.string().optional(),
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

export const BuildQuestionSchema = z.object({
  message: z.string(),
  response: z.object({
    status: z.enum(["PASS", "FAIL"]),
    output: z.string(),
    message: z.string(),
  }),
});

const MemLeakSchema = z.object({
  definitely_lost: z.number(),
  indirectly_lost: z.number(),
  possibly_lost: z.number(),
  still_reachable: z.number(),
  suppressed: z.number(),
});

const MemoryFootprintSchema = z.object({
  heap_usage: z.number(),
  stack_usage: z.number(),
  total_ram: z.number(),
});

const CacheProfileSchema = z.object({
  l1_miss: z.number(),
  l2_miss: z.number(),
  branch_miss: z.number(),
});

const MetadataSchema = z.object({
  Total_Time: z.number(),
  overall_status: z.enum(["PASS", "FAIL"]),
  mem_stat: z.object({
    footprint: MemoryFootprintSchema,
    memory_leak: MemLeakSchema,
    cache_profile: CacheProfileSchema,
  }),
});

const TestCaseStatusSchema = z.object({
  status: z.enum(["PASS", "FAIL"]),
});

export const SubmitQuestionSchema = z.object({
  message: z.string(),
  response: z.object({
    status: z.enum(["FAIL", "SUCCESS"]),
    output: z.object({
      metadata: MetadataSchema,
      test_cases: z.object({
        test_case_1: TestCaseStatusSchema,
        test_case_2: TestCaseStatusSchema,
        test_case_3: TestCaseStatusSchema,
        test_case_4: TestCaseStatusSchema,
        test_case_5: TestCaseStatusSchema,
        test_case_6: TestCaseStatusSchema,
        test_case_7: TestCaseStatusSchema,
        test_case_8: TestCaseStatusSchema,
        test_case_9: TestCaseStatusSchema,
        test_case_10: TestCaseStatusSchema,
        test_case_11: TestCaseStatusSchema,
        test_case_12: TestCaseStatusSchema,
        test_case_13: TestCaseStatusSchema,
        test_case_14: TestCaseStatusSchema,
        test_case_15: TestCaseStatusSchema,
        test_case_16: TestCaseStatusSchema,
        test_case_17: TestCaseStatusSchema,
        test_case_18: TestCaseStatusSchema,
        test_case_19: TestCaseStatusSchema,
        test_case_20: TestCaseStatusSchema,
      }),
    }),
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
