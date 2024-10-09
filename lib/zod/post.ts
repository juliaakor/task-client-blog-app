import { z } from 'zod';

import { Categories, Tags } from '@constants/entities';

import { idSchema, requiredStrSchema, StaticImageDataSchema } from './common';

export const PostSchema = z.object({
  category: z.nativeEnum(Categories),
  content: requiredStrSchema,
  createdAt: requiredStrSchema.min(20),
  id: idSchema,
  image: StaticImageDataSchema.optional(),
  isFeatured: z.boolean().default(false),
  name: requiredStrSchema.min(10),
  preview: requiredStrSchema.max(300),
  tags: z.array(z.nativeEnum(Tags)),
  userId: idSchema,
});

export type Post = z.infer<typeof PostSchema>;
