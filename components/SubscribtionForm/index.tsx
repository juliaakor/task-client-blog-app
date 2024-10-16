'use client';

import { FormikHelpers } from 'formik';
import { useTranslations } from 'next-intl';
import { z } from 'zod';

import { useEmail } from '@/hooks/useEmail';
import { failSendToast, successSendToast } from '@/lib/toasts';
import { Button } from '@lib/components/Button';
import { ButtonType } from '@lib/components/Button/types';
import { Input } from '@lib/components/controls/Input';
import { Form } from '@lib/components/Form';

import { DefaultSubscribtionValues, defaultSubscribtionValues } from './types';

export const SubscribtionForm = () => {
  const t = useTranslations('common');
  const { sendSubscriptionEmail } = useEmail();

  const subscriptionFormInfo = t.raw('lettersSection').form;
  const subscriptionFormValidation = subscriptionFormInfo.validationMessages;
  const { failedSubscribe, successSubscribe } = t.raw('toasts');

  const formSchema = z.object({
    email: z.string({ required_error: subscriptionFormValidation.required }).email(subscriptionFormValidation.email),
  });

  const handleSubmit = async (
    { email }: DefaultSubscribtionValues,
    { resetForm }: FormikHelpers<DefaultSubscribtionValues>
  ) => {
    if (await sendSubscriptionEmail({ email })) {
      successSendToast(successSubscribe);
      resetForm();

      return;
    }

    failSendToast(failedSubscribe);
  };

  return (
    <Form
      className="flex gap-6 max-425:flex-col"
      defaultValues={defaultSubscribtionValues}
      onSubmit={handleSubmit}
      zodSchema={formSchema}
    >
      <Input
        className="w-full"
        inputClassName="text-white-01 placeholder-light-gray"
        type="text"
        name="email"
        placeholder={subscriptionFormInfo.placeholder}
      />
      <Button
        className="text-lg leading-8 max-w-44 max-425:w-full"
        styleType={ButtonType.Brand}
        label={subscriptionFormInfo.submitButtonText}
        name="submit"
        type="submit"
      />
    </Form>
  );
};
