import '@picocss/pico/css/pico.slim.min.css';

import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

import StyledComponentsProvider from '@/app/components/StyledComponentRegistery';

interface Props {
  children: ReactNode;
}

export const metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
