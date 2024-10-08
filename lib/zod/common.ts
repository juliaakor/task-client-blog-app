import { z } from 'zod';

const defaultError = {
  invalid_type_error: 'Field type is invalid',
  required_error: 'Field is required',
};

export const requiredStrSchema = z.string(defaultError);

export const requiredUrlSchema = requiredStrSchema.url();

export const optionalStrSchema = requiredStrSchema.optional();

export const dateSchema = z.date();

export const idSchema = requiredStrSchema.uuid();

export const emailSchema = requiredStrSchema.email();
