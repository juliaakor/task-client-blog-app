import { Formik, Form as FormikForm, FormikHelpers, FormikValues } from 'formik';
import { useId } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FormProps } from './types';

export const Form = <T extends FormikValues>({
  children,
  className,
  defaultValues,
  onSubmit,
  zodSchema,
  ...props
}: FormProps<T>) => {
  const formId = useId();

  const handleSubmit = (values: T, helpers: FormikHelpers<T>) => {
    onSubmit(values, helpers);
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={toFormikValidationSchema(zodSchema)}
      onSubmit={handleSubmit}
      {...props}
    >
      {({ handleSubmit }) => (
        <FormikForm id={formId} noValidate onSubmit={handleSubmit} className={className}>
          {children}
        </FormikForm>
      )}
    </Formik>
  );
};
