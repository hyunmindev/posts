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
}

export interface Database {
  categories: { [key: string]: { color: string } };
  tags: { [key: string]: { color: string } };
}
