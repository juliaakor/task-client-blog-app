import { z } from 'zod';

import { validateDataWithSchema } from '@lib/zod/validateDataWithSchema';

describe('validateDataWithSchema', () => {
  const schema = z.object({
    age: z.number().optional(),
    email: z.string().email(),
    name: z.string(),
  });

  const validData = { email: 'test@example.com', name: 'Test Name' };
  const validDataWithAge = { age: 30, email: 'test2@example.com', name: 'Test Name 2' };
  const invalidEmail = { email: 'invalid-email', name: 'Test Name' };
  const missingName = { email: 'test@example.com' };
  const emptyData = {};
  const extraFields = { age: 30, email: 'test2@example.com', extraField: 'extra', name: 'Test Name 2' };

  it('should return parsed data when valid', () => {
    const result = validateDataWithSchema(schema, validData);

    expect(result).toEqual(validData);
  });

  it('should return parsed data when optional field is provided', () => {
    const result = validateDataWithSchema(schema, validDataWithAge);

    expect(result).toEqual(validDataWithAge);
  });

  it('should return null when email is invalid', () => {
    const result = validateDataWithSchema(schema, invalidEmail);

    expect(result).toBeNull();
  });

  it('should return null when required field is missing', () => {
    const result = validateDataWithSchema(schema, missingName);

    expect(result).toBeNull();
  });

  it('should return null when input data is empty', () => {
    const result = validateDataWithSchema(schema, emptyData);

    expect(result).toBeNull();
  });

  it('should ignore extra fields and return valid parsed data', () => {
    const result = validateDataWithSchema(schema, extraFields);

    expect(result).toEqual({ age: 30, email: 'test2@example.com', name: 'Test Name 2' });
  });

  it('should log errors when data is invalid (invalid email)', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    validateDataWithSchema(schema, invalidEmail);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: 'Invalid email' })])
    );

    consoleSpy.mockRestore();
  });

  it('should log errors when required field is missing', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    validateDataWithSchema(schema, missingName);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: 'Required' })])
    );

    consoleSpy.mockRestore();
  });
});
