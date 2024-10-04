import { z } from 'zod';

import { optionalStrSchema, requiredStrSchema, requiredUrlSchema } from './common';

const SocialsSchema = z.object({
  facebook: requiredUrlSchema.optional(),
  instagram: requiredUrlSchema.optional(),
  linkedin: requiredUrlSchema.optional(),
  twitter: requiredUrlSchema.optional(),
});

export const UserSchema = z.object({
  about: requiredStrSchema.max(500).optional(),
  avatar: requiredUrlSchema.optional(),
  company: optionalStrSchema,
  createdAt: z.date(),
  id: requiredStrSchema.uuid(),
  name: requiredStrSchema.min(1),
  role: optionalStrSchema,
  socials: SocialsSchema.optional(),
});

export type User = z.infer<typeof UserSchema>;
