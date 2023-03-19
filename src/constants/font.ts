import { Fira_Mono } from 'next/font/google';

export const firaMono = Fira_Mono({
  display: 'block',
  fallback: ['monospace'],
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
