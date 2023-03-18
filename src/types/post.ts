import { Dayjs } from 'dayjs';

export interface Post {
  author?: string;
  category: string;
  cover?: string;
  createdTime: Dayjs;
  description?: string;
  id: number;
  lastEditedTime: Dayjs;
  slug: string;
  tags: string[];
  title: string;
}
