import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/task-blog-ui-lib/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      backgroundImage: {
        'dark-shadow': 'radial-gradient(30.56% 76.04% at 74.58% 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
      },
      colors: {
        background: 'var(--background)',
        'beige-01': 'var(--c-beige-01)',
        'dark-blue': 'var(--c-dark-blue)',
        'dark-gray': 'var(--c-dark-gray)',
        error: 'var(--c-error)',
        foreground: 'var(--foreground)',
        'light-blue': 'var(--c-light-blue)',
        'light-gray': 'var(--c-light-gray)',
        modal: 'var(--bg-modal)',
        'white-01': 'var(--c-white-01)',
        'white-02': 'var(--c-white-02)',
        'white-03': 'var(--c-white-03)',
        yellow: 'var(--c-yellow)',
        'yellow-hover': 'var(--c-yellow-hover)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
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
