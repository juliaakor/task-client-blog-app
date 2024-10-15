export const ENV = {
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID_FEEDBACK: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FEEDBACK || '',
  EMAILJS_TEMPLATE_ID_SUBSCRIPTION: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SUBSCRIPTION || '',
  MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '',
  NEXT_PUBLIC_BASE_URL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.VERCEL_URL || `https://${process.env.VERCEL_BRANCH_URL}` || `https://${process.env.VERCEL_URL}`,
};
