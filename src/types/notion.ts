import { Dayjs } from 'dayjs';

export interface Post {
  author?: string;
  category: string;
  content?: string;
  cover?: string;
  createdTime: Dayjs;
  description?: string;
  id: number;
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
