import { z } from 'zod';

import { requiredStrSchema, emailSchema } from './common';

export const feedbackSchema = z.object({
  email: emailSchema,
  message: requiredStrSchema,
  name: requiredStrSchema,
  reason: requiredStrSchema,
});

export const subscriptionSchema = z.object({
  email: emailSchema,
});

export type FeedbackEmailForm = z.infer<typeof feedbackSchema>;
export type SubscriptionEmailForm = z.infer<typeof subscriptionSchema>;
