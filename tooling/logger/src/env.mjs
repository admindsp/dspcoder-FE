import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NEW_RELIC_ENABLED: z.coerce.boolean().default(false),
    NEW_RELIC_APP_NAME: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_NEW_RELIC_ENABLED: z.coerce.boolean().default(false),
  },
  runtimeEnv: {
    NEW_RELIC_ENABLED: process.env.NEW_RELIC_ENABLED,
    NEW_RELIC_APP_NAME: process.env.NEW_RELIC_APP_NAME,
    NEXT_PUBLIC_NEW_RELIC_ENABLED: process.env.NEXT_PUBLIC_NEW_RELIC_ENABLED,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
