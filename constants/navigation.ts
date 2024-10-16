export const ROUTES = {
  about: '/about',
  author: '/author/[id]',
  blog: '/blog',
  blogCategory: '/blog/[category]',
  contact: '/contact',
  home: '/',
  policy: '/policy',
  post: '/author/[id]/[postId]',
};

export const NAVBAR_OPTIONS_SHORT = [
  { label: 'Home', link: ROUTES.home, name: 'home' },
  { label: 'Blog', link: ROUTES.blog, name: 'blog' },
  { label: 'About Us', link: ROUTES.about, name: 'about' },
  { label: 'Contact us', link: ROUTES.contact, name: 'contact' },
];

export const NAVBAR_OPTIONS_FULL = [
  ...NAVBAR_OPTIONS_SHORT,
  { label: 'Privacy Policy', link: ROUTES.policy, name: 'policy' },
];
