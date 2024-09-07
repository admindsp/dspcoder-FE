import { z } from "zod";

export const MediaSchema = z.object({
  path: z.string(),
  type: z.literal("image"),
  alt_text: z.string(),
  level: z.number().optional(),
});

export const ContentItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  media: z.array(MediaSchema).nullable().optional(),
});

export const SectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  media: z.array(MediaSchema).nullable().optional(),
  content: z.array(ContentItemSchema).nullable().optional(),
});

export const PrimaryBannerSchema = z.object({
  title: z.string(),
  description: z.string(),
  media: z.array(MediaSchema),
});

export const HomePageDataSchema = z.object({
  primary: PrimaryBannerSchema,
  secondary: z.array(SectionSchema),
  footer_badges: z.array(z.string()),
});

export type MediaType = z.infer<typeof MediaSchema>;
export type ContentItemType = z.infer<typeof ContentItemSchema>;
export type SectionType = z.infer<typeof SectionSchema>;
export type PrimaryBannerType = z.infer<typeof PrimaryBannerSchema>;
export type HomePageDataType = z.infer<typeof HomePageDataSchema>;
