import '@/styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import { PropsWithChildren } from 'react';

import GlobalFooter from '@/app/components/GlobalFooter';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';
import { firaMono } from '@/styles/font';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={`${firaMono.variable} overscroll-none`}
      lang="ko"
    >
      <GoogleAnalytics />
      <Analytics debug={false} />
      <body className="flex min-h-screen flex-col items-center overscroll-none bg-background font-monospace selection:bg-lime-900 selection:text-stone-50">
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}

export default RootLayout;
