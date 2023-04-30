import { Fira_Mono, Nanum_Gothic } from 'next/font/google';

export const nanumGothic = Nanum_Gothic({
  display: 'block',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
  subsets: ['latin'],
  variable: '--font-nanum-gothic',
  weight: ['400', '800'],
});

export const firaMono = Fira_Mono({
  display: 'block',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'monospace',
  ],
  subsets: ['latin'],
  variable: '--font-fira-mono',
  weight: ['400', '700'],
});
