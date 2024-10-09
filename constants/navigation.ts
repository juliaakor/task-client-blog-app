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
  { label: 'Home', link: ROUTES.home },
  { label: 'Blog', link: ROUTES.blog },
  { label: 'About Us', link: ROUTES.about },
  { label: 'Contact us', link: ROUTES.contact },
];

export const NAVBAR_OPTIONS_FULL = [...NAVBAR_OPTIONS_SHORT, { label: 'Privacy Policy', link: ROUTES.policy }];
