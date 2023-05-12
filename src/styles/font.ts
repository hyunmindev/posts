import { Fira_Mono } from 'next/font/google';

export const firaMono = Fira_Mono({
  display: 'block',
  fallback: ['monospace'],
  subsets: ['latin'],
  variable: '--font-fira-mono',
  weight: ['400', '700'],
});
