import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';

import { useEmail } from '@hooks/useEmail';
import { sendEmail } from '@lib/email';
import { FeedbackEmailForm, SubscriptionEmailForm } from '@lib/zod/email';

jest.mock('@lib/email', () => ({
  sendEmail: jest.fn(),
}));

interface TestComponentProps {
  data: unknown;
  isFeedback: boolean;
}

const TestComponent = ({ data, isFeedback }: TestComponentProps) => {
  const { sendFeedbackEmail, sendSubscriptionEmail } = useEmail();

  useEffect(() => {
    const sendEmailData = async () => {
      if (isFeedback) {
        sendFeedbackEmail(data as FeedbackEmailForm);
      } else {
        sendSubscriptionEmail(data as SubscriptionEmailForm);
      }
    };

    sendEmailData();
  }, [data, isFeedback, sendFeedbackEmail, sendSubscriptionEmail]);

  return <div>Test Component</div>;
};

describe('useEmail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call sendEmail with feedback parameters when feedback email is sent', async () => {
    const feedbackData: FeedbackEmailForm = {
      email: 'test@example.com',
      message: 'Test message',
      name: 'Test Name',
      reason: 'Feedback reason',
    };

    (sendEmail as jest.Mock).mockResolvedValueOnce(true);

    render(<TestComponent data={feedbackData} isFeedback />);

    await screen.findByText('Test Component');

    expect(sendEmail).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.any(String),
      feedbackData,
      expect.anything()
    );
  });

  it('should call sendEmail with subscription parameters when subscription email is sent', async () => {
    const subscriptionData: SubscriptionEmailForm = {
      email: 'test@example.com',
    };

    (sendEmail as jest.Mock).mockResolvedValueOnce(true);

    render(<TestComponent data={subscriptionData} isFeedback={false} />);

    await screen.findByText('Test Component');

    expect(sendEmail).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.any(String),
      subscriptionData,
      expect.anything()
    );
  });

  it('should return false if sendEmail fails when sending feedback email', async () => {
    const feedbackData: FeedbackEmailForm = {
      email: 'test@example.com',
      message: 'Test message',
      name: 'Test Name',
      reason: 'Feedback reason',
    };

    (sendEmail as jest.Mock).mockResolvedValueOnce(false);

    render(<TestComponent data={feedbackData} isFeedback />);

    await screen.findByText('Test Component');

    expect(sendEmail).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.any(String),
      feedbackData,
      expect.anything()
    );
  });

  it('should return false if sendEmail fails when sending subscription email', async () => {
    const subscriptionData: SubscriptionEmailForm = {
      email: 'test@example.com',
    };

    (sendEmail as jest.Mock).mockResolvedValueOnce(false);

    render(<TestComponent data={subscriptionData} isFeedback={false} />);

    await screen.findByText('Test Component');

    expect(sendEmail).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.any(String),
      subscriptionData,
      expect.anything()
    );
  });
});
