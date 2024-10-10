'use client';

import { useTranslations } from 'next-intl';
import { z } from 'zod';

import { useEmail } from '@/hooks/useEmail';
import { failSendToast, successSendToast } from '@/lib/toasts';
import { Button } from '@lib/components/Button';
import { ButtonType } from '@lib/components/Button/types';
import { Input } from '@lib/components/controls/Input';
import { Form } from '@lib/components/Form';

const defaultValues = {
  email: '',
};

export const SubscribtionForm = () => {
  const t = useTranslations('common');
  const { sendSubscriptionEmail } = useEmail();

  const subscriptionFormInfo = t.raw('lettersSection').form;
  const subscriptionFormValidation = subscriptionFormInfo.validationMessages;
  const { failedSubscribe, successSubscribe } = t.raw('toasts');

  const formSchema = z.object({
    email: z.string({ required_error: subscriptionFormValidation.required }).email(subscriptionFormValidation.email),
  });

  const handleSubmit = async ({ email }: typeof defaultValues) => {
    if (await sendSubscriptionEmail({ email })) {
      successSendToast(successSubscribe);

      return;
    }

    failSendToast(failedSubscribe);
  };

  return (
    <Form className="flex gap-6" defaultValues={defaultValues} onSubmit={handleSubmit} zodSchema={formSchema}>
      <Input className="w-full" type="text" name="email" placeholder={subscriptionFormInfo.placeholder} />
      <Button
        className="text-lg leading-8 max-w-44"
        styleType={ButtonType.Brand}
        label={subscriptionFormInfo.submitButtonText}
        name="submit"
        type="submit"
      />
    </Form>
  );
};
