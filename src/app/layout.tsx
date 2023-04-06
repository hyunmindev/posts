import '@/styles/index.scss';

import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

import GlobalFooter from '@/app/components/GlobalFooter';
import StyledComponentsProvider from '@/app/components/StyledComponentProvider';
import { BLOG_DESCRIPTION, BLOG_TITLE } from '@/constants/meta';
import { firaMono, nanumGothic } from '@/styles/font';
import { join } from '@/utils';

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
      <body className={join(nanumGothic.variable, firaMono.variable)}>
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
        <Analytics debug={false} />
        <GlobalFooter />
      </body>
    </html>
  );
}

export default RootLayout;
