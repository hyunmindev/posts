import { Dayjs } from 'dayjs';

export interface Post {
  category: string;
  content?: string;
  cover?: string;
  createdTime: Dayjs;
  description?: string;
  lastEditedTime: Dayjs;
  slug: string;
  tags: string[];
  title: string;
  toc?: TOC[];
}

export interface Database {
  categories: { [key: string]: { color: string } };
  tags: { [key: string]: { color: string } };
}

export interface TOC {
  id: string;
  tagName: 'h2' | 'h3' | 'h4';
  text: string;
}
