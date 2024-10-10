import { z } from 'zod';

import { ENV } from '@constants/env';
import { sendEmail } from '@lib/email';
import { FeedbackEmailForm, feedbackSchema, SubscriptionEmailForm, subscriptionSchema } from '@lib/zod/email';

const templatesId = {
  feedback: ENV.EMAILJS_TEMPLATE_ID_FEEDBACK,
  subscription: ENV.EMAILJS_TEMPLATE_ID_SUBSCRIPTION,
};

const sendEmailToGmailService = (templateId: string, data: unknown, schema: z.ZodSchema) =>
  sendEmail(ENV.EMAILJS_SERVICE_ID, templateId, ENV.EMAILJS_PUBLIC_KEY, data, schema);

export const useEmail = () => {
  const sendFeedbackEmail = (data: FeedbackEmailForm) =>
    sendEmailToGmailService(templatesId.feedback, data, feedbackSchema);

  const sendSubscriptionEmail = (data: SubscriptionEmailForm) =>
    sendEmailToGmailService(templatesId.subscription, data, subscriptionSchema);

  return {
    sendFeedbackEmail,
    sendSubscriptionEmail,
  };
};
