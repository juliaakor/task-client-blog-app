import emailjs from '@emailjs/browser';
import { z } from 'zod';

import { sendEmail } from '@lib/email';

jest.mock('@emailjs/browser');

describe('sendEmail', () => {
  const serviceId = 'test_service';
  const templateId = 'test_template';
  const publicKey = 'test_public_key';

  const schema = z.object({
    email: z.string().email(),
    name: z.string(),
  });

  const validTemplateParams = { email: 'test@example.com', name: 'Test Name' };
  const invalidTemplateParams = { email: 'invalid-test-email', name: 'Test Name' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send email and return true when data is valid', async () => {
    (emailjs.send as jest.Mock).mockResolvedValueOnce({ status: 200 });

    const result = await sendEmail(serviceId, templateId, publicKey, validTemplateParams, schema);

    expect(result).toBe(true);
    expect(emailjs.send).toHaveBeenCalledWith(serviceId, templateId, validTemplateParams, publicKey);
  });

  it('should return false when data is invalid', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = await sendEmail(serviceId, templateId, publicKey, invalidTemplateParams, schema);

    expect(result).toBe(false);
    expect(emailjs.send).not.toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Array));

    consoleSpy.mockRestore();
  });

  it('should return false when emailjs.send throws an error', async () => {
    (emailjs.send as jest.Mock).mockRejectedValueOnce(new Error('Failed to send email'));

    const result = await sendEmail(serviceId, templateId, publicKey, validTemplateParams, schema);

    expect(result).toBe(false);
  });

  it('should return false when emailjs.send returns an error status', async () => {
    (emailjs.send as jest.Mock).mockResolvedValueOnce({ status: 400 });

    const result = await sendEmail(serviceId, templateId, publicKey, validTemplateParams, schema);

    expect(result).toBe(false);
  });
});
