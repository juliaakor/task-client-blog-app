import { z } from 'zod';

import { optionalStrSchema, requiredStrSchema, requiredUrlSchema, StaticImageDataSchema } from './common';

const SocialsSchema = z.object({
  facebook: requiredUrlSchema.optional(),
  instagram: requiredUrlSchema.optional(),
  linkedin: requiredUrlSchema.optional(),
  twitter: requiredUrlSchema.optional(),
});

export const UserSchema = z.object({
  about: requiredStrSchema.max(500).optional(),
  avatar: StaticImageDataSchema.optional(),
  company: optionalStrSchema,
  createdAt: requiredStrSchema.min(20),
  id: requiredStrSchema.uuid(),
  name: requiredStrSchema.min(1),
  role: optionalStrSchema,
  socials: SocialsSchema.optional(),
});

export type User = z.infer<typeof UserSchema>;

export const UsersResponseSchema = z.object({
  page: z.number(),
  total: z.number(),
  users: z.array(UserSchema),
});

export type UsersResponse = z.infer<typeof UsersResponseSchema>;
