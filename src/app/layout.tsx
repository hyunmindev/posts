import '@/styles/index.scss';

import { Analytics } from '@vercel/analytics/react';
import { PropsWithChildren } from 'react';

import GlobalFooter from '@/app/components/GlobalFooter';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';
import StyledComponentsProvider from '@/app/components/StyledComponentProvider';
import { firaMono, nanumGothic } from '@/styles/font';
import { join } from '@/utils';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      data-theme="dark"
      lang="ko"
    >
      <GoogleAnalytics />
      <Analytics debug={false} />
      <body className={join(nanumGothic.variable, firaMono.variable)}>
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
        <GlobalFooter />
      </body>
    </html>
  );
}

export default RootLayout;
