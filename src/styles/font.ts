import { Fira_Mono, Nanum_Gothic } from 'next/font/google';

export const nanumGothic = Nanum_Gothic({
  display: 'block',
  fallback: ['sans-serif'],
  subsets: ['latin'],
  variable: '--font-nanum-gothic',
  weight: ['400', '800'],
});

export const firaMono = Fira_Mono({
  display: 'block',
  fallback: ['monospace'],
  subsets: ['latin'],
  variable: '--font-fira-mono',
  weight: ['400', '700'],
});
