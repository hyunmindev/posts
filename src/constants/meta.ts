import { Metadata } from 'next';

export const NAME = 'Hyunmin Jung';
export const EMAIL = 'jung@hyunmin.dev';
export const BLOG_URL = 'https://blog.hyunmin.dev';
export const USERNAME = 'hyunmindev';
export const GITHUB_URL = 'https://github.com/hyunmindev';
export const BLOG_TITLE = '개발자 정현민 기술 블로그';
export const BLOG_DESCRIPTION =
  '프론트엔드 개발자 정현민의 기술 블로그입니다. 웹 개발에 관한 이야기, 프론트엔드 트렌드, 해결했던 문제, 공부한 내용을 기록합니다.';

export const DEFAULT_METADATA: Metadata = {
  authors: { name: NAME, url: GITHUB_URL },
  colorScheme: 'dark',
  creator: NAME,
  description: BLOG_DESCRIPTION,
  metadataBase: new URL(BLOG_URL),
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
      url: '/api/og',
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
  twitter: {
    card: 'summary_large_image',
    creator: USERNAME,
    description: BLOG_DESCRIPTION,
    images: {
      alt: BLOG_TITLE,
      height: 630,
      type: 'image/png',
      url: '/api/og',
    },
    site: NAME,
    title: BLOG_TITLE,
  },
  viewport: {
    initialScale: 1,
    minimumScale: 1,
    width: 'device-width',
  },
};
