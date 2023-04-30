import 'server-only';

import dayjs from 'dayjs';

import { Post } from '@/types/notion';

const post: Post = {
  category: 'ETC',
  createdTime: dayjs('2021-01-01'),
  id: '2023-04-29T09:54:00.000Z',
  lastEditedTime: dayjs('2021-01-01'),
  slug: 'hello-world',
  tags: ['hello', 'world'],
  title: 'Hello World',
};
export default post;
