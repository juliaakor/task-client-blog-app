import { z } from 'zod';

export const validateDataWithSchema = <T>(schema: z.ZodSchema<T>, data: unknown) => {
  try {
    return schema.parse(data);
  } catch (err) {
    if (err instanceof z.ZodError) {
      // eslint-disable-next-line no-console
      console.error(err.errors);
    }

    return null;
  }
};
