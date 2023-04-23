import { Metadata } from 'next';

import {
  BLOG_TITLE,
  BLOG_URL,
  DEFAULT_METADATA,
  EMAIL,
  NAME,
} from '@/constants/meta';
import { Post } from '@/types/notion';

type StyleClass = string | undefined;

export const join = (...classes: [StyleClass, StyleClass, ...StyleClass[]]) =>
  classes.filter(Boolean).join(' ');

export const getMetadata = (post: Post): Metadata => {
  const {
    category,
    createdTime,
    description,
    lastEditedTime,
    slug,
    tags,
    title,
  } = post;
  const url = `${BLOG_URL}/${slug}`;
  const publishedTime = createdTime.toISOString();
  const modifiedTime = lastEditedTime.toISOString();
  return {
    ...DEFAULT_METADATA,
    keywords: tags,
    openGraph: {
      authors: NAME,
      countryName: 'Korea',
      description,
      emails: [EMAIL],
      images: {
        alt: BLOG_TITLE,
        height: 630,
        type: 'image/png',
        url: `${BLOG_URL}/api/og?title=${title}`,
        width: 1200,
      },
      locale: 'ko_KR',
      modifiedTime,
      publishedTime,
      section: category,
      siteName: BLOG_TITLE,
      tags,
      title,
      type: 'article',
      url,
    },
  };
};

export const calculateReadingTime = (content: string) => {
  const { length } = content
    .trim()
    .replace(/(<([^>]+)>)/gi, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[.,/#!$%^&*;:{}=\-_`~()']/g, '')
    .split(' ')
    .filter((word) => !!word);
  const wpm = 200;
  return Math.ceil(length / wpm);
};
