import { Fira_Mono } from 'next/font/google';

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
