import '@/styles/index.scss';

import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

import GlobalFooter from '@/app/components/GlobalFooter';
import StyledComponentsProvider from '@/app/components/StyledComponentRegistery';
import { BLOG_DESCRIPTION, BLOG_TITLE } from '@/constants/meta';

interface Props {
  children: ReactNode;
}

export const metadata = {
  description: BLOG_DESCRIPTION,
  title: BLOG_TITLE,
};

function RootLayout({ children }: Props) {
  return (
    <html
      data-theme="dark"
      lang="ko"
    >
      <body>
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
        <Analytics />
        <GlobalFooter />
      </body>
    </html>
  );
}

export default RootLayout;
