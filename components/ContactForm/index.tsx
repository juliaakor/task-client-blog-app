'use client';

import { useTranslations } from 'next-intl';
import { z } from 'zod';

import { useEmail } from '@/hooks/useEmail';
import { failSendToast, successSendToast } from '@/lib/toasts';
import { Button } from '@lib/components/Button';
import { ButtonType } from '@lib/components/Button/types';
import { Input } from '@lib/components/controls/Input';
import { Select } from '@lib/components/controls/Select';
import { Textarea } from '@lib/components/controls/Textarea';
import { Form } from '@lib/components/Form';

const defaultValues = {
  email: '',
  message: '',
  name: '',
  reason: '',
};

export const ContactForm = () => {
  const t = useTranslations('contact');
  const { failedSendFeedback, successSendFeedback } = useTranslations('common').raw('toasts');
  const { sendFeedbackEmail } = useEmail();

  const { fieldsPlaceholders, reasonSelectOptions, submitButtonTitle, validationMessages } = t.raw('form');

  const options = [
    { label: reasonSelectOptions.support, value: 'support' },
    { label: reasonSelectOptions.sales, value: 'sales' },
    { label: reasonSelectOptions.feedback, value: 'feedback' },
  ];

  const requiredMessageObj = { required_error: validationMessages.required };

  const formSchema = z.object({
    email: z.string(requiredMessageObj).email(validationMessages.email),
    message: z.string(requiredMessageObj).min(10, `${validationMessages.moreThan} 10`),
    name: z.string(requiredMessageObj).min(2, `${validationMessages.moreThan} 2`),
    reason: z.string(requiredMessageObj).min(2, `${validationMessages.moreThan} 2`),
  });

  // todo reset filds after submit
  const handleSubmit = async ({ email, message, name, reason }: typeof defaultValues) => {
    if (await sendFeedbackEmail({ email, message, name, reason })) {
      successSendToast(successSendFeedback);

      return;
    }

    failSendToast(failedSendFeedback);
  };

  return (
    <Form className="flex flex-col gap-4" defaultValues={defaultValues} onSubmit={handleSubmit} zodSchema={formSchema}>
      <Input type="text" name="name" placeholder={fieldsPlaceholders.name} />
      <Input type="text" name="email" placeholder={fieldsPlaceholders.email} />
      <Select label="Reasons" name="reason" options={options} defaultLabel={reasonSelectOptions.default} />
      <Textarea label="message" name="message" placeholder={fieldsPlaceholders.message} />
      <Button
        className="text-2xl leading-8"
        styleType={ButtonType.Brand}
        label={submitButtonTitle}
        name="submit"
        type="submit"
      />
    </Form>
  );
};
