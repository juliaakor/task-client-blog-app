import { FormikConfig, FormikHelpers, FormikValues } from 'formik';
import { ReactNode } from 'react';
import { ZodSchema } from 'zod';

export interface FormProps<T extends FormikValues> extends Omit<FormikConfig<T>, 'initialValues' | 'onSubmit'> {
  children: ReactNode;
  defaultValues: T;
  onSubmit: (values: T, helpers: FormikHelpers<T>) => void;
  zodSchema: ZodSchema<T>;
}
