import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'beige-01': 'var(--c-beige-01)',
        'dark-blue': 'var--c-dark-blue)',
        'dark-gray': 'var(--c-dark-gray)',
        foreground: 'var(--foreground)',
        'light-blue': 'var(--c-light-blue)',
        'light-gray': 'var(--c-light-gray)',
        'white-01': 'var(--c-white-01)',
        'white-02': 'var(--c-white-02)',
        'white-03': 'var(--c-white-03)',
        yellow: 'var(--c-yellow)',
        'yellow-hover': 'var(--c-yellow-hover)',
      },
    },
    screens: {
      320: '320px',
      375: '375px',
      425: '425px',
      768: '768px',
      1024: '1024px',
      1440: '1440px',
      2560: '2560px',
    },
  },
};

export default config;
