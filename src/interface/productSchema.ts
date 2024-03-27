import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  value: z.coerce.number(),
  status: z.boolean(),
});

export type ProductSchemaProps = z.infer<typeof productSchema>;
