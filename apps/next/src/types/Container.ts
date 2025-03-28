import { z } from "zod";

export const ContainerDetailsSchema = z.object({
  status: z.string(),
  host_ip: z.string(),
  dns_name: z.string(),
  container_name: z.string(),
  user_name: z.string(),
  default_folder_path: z.string(),
});

export const setupUserCodeBaseSchema = z.object({
  message: z.string(),
  response: z.string(),
});




export type ContainerDetailsType = z.infer<typeof ContainerDetailsSchema>;
export type SetupUserCodeBaseType = z.infer<typeof setupUserCodeBaseSchema>;
