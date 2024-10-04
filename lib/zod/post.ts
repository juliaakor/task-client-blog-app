import { z } from 'zod';

import { CategoriesValues, Categories, Tags, TagsValues } from '@constants/routes';

import { dateSchema, idSchema, requiredStrSchema, requiredUrlSchema } from './common';

export const PostSchema = z.object({
  category: z.enum(CategoriesValues as [Categories, ...Categories[]]),
  content: requiredStrSchema,
  createdAt: dateSchema,
  id: idSchema,
  image: requiredUrlSchema.optional(),
  isFeatured: z.boolean().default(false),
  name: requiredStrSchema.min(10),
  preview: requiredStrSchema.max(300),
  tags: z.array(z.enum(TagsValues as [Tags, ...Tags[]])).optional(),
  userId: idSchema,
});

export type Post = z.infer<typeof PostSchema>;
