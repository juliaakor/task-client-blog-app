import emailjs from '@emailjs/browser';
import { z } from 'zod';

import { validateDataWithSchema } from '@lib/zod/validateDataWithSchema';

const SUCCESS_EMAIL_RESPONSE_CODE = 200;

export const sendEmail = async <T>(
  serviceId: string,
  templateId: string,
  publicKey: string,
  templateParams: T,
  schema: z.ZodSchema
) => {
  try {
    const validatedData = validateDataWithSchema(schema, templateParams);
    if (!validatedData) return false;

    const { status } = await emailjs.send(serviceId, templateId, validatedData, publicKey);

    if (status !== SUCCESS_EMAIL_RESPONSE_CODE) return false;

    return true;
  } catch {
    return false;
  }
};
