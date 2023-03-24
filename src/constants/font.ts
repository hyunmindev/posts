import { Fira_Mono, Nanum_Gothic_Coding } from 'next/font/google';

export const nanumGothicCoding = Nanum_Gothic_Coding({
  display: 'block',
  fallback: ['monospace'],
  subsets: ['latin'],
  variable: '--font-family-nanum-gothic-coding',
  weight: ['400', '700'],
});

export const firaMono = Fira_Mono({
  display: 'block',
  fallback: ['monospace'],
  subsets: ['latin'],
  variable: '--font-family-fira-mono',
  weight: ['400', '500', '700'],
});
