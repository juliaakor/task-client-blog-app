import { Formik, Form as FormikForm, FormikValues } from 'formik';
import { useId } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FormProps } from './types';

export const Form = <T extends FormikValues>({
  children,
  defaultValues,
  onSubmit,
  zodSchema,
  ...props
}: FormProps<T>) => {
  const formId = useId();

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={toFormikValidationSchema(zodSchema)}
      onSubmit={(values, helpers) => onSubmit(values, helpers)}
      {...props}
    >
      {({ handleSubmit }) => (
        <FormikForm id={formId} noValidate onSubmit={handleSubmit}>
          {children}
        </FormikForm>
      )}
    </Formik>
  );
};
