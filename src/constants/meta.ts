import { Metadata } from 'next';

export const NAME = 'Hyunmin Jung';
export const EMAIL = 'jung@hyunmin.dev';
export const BLOG_URL = 'https://blog.hyunmin.dev';
export const GITHUB_URL = 'https://github.com/hyunmindev';
export const BLOG_TITLE = 'Hyunmin Jung';
export const BLOG_DESCRIPTION =
  '프론트엔드 개발자 정현민의 기술 블로그입니다.' +
  '웹 개발에 관한 이야기, 프론트엔드 트렌드, 해결한 문제, 공부한 내용을 기록합니다.' +
  '주로 React, Next.js, TypeScript, JavaScript와 같은 내용을 다룹니다.' +
  '또한, 개발자로서의 삶에 관한 이야기도 합니다.';

export const DEFAULT_METADATA: Metadata = {
  authors: { name: NAME, url: GITHUB_URL },
  colorScheme: 'dark',
  creator: NAME,
  description: BLOG_DESCRIPTION,
  openGraph: {
    authors: NAME,
    countryName: 'Korea',
    description: BLOG_DESCRIPTION,
    determiner: 'the',
    emails: [EMAIL],
    images: {
      alt: BLOG_TITLE,
      height: 630,
      type: 'image/png',
      url: `${BLOG_URL}/api/og`,
      width: 1200,
    },
    locale: 'ko_KR',
    siteName: BLOG_TITLE,
    title: BLOG_TITLE,
    type: 'article',
    url: BLOG_URL,
  },
  publisher: NAME,
  themeColor: '#262729',
  title: BLOG_TITLE,
  viewport: {
    initialScale: 1,
    minimumScale: 1,
    width: 'device-width',
  },
};
