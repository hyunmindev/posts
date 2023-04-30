import 'server-only';

import dayjs from 'dayjs';

import { Post } from '@/types/notion';

const posts: Post[] = [
  {
    author: '정현민',
    category: 'CSS',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    description: '활용할지를 알아보자. 그리고 Key Props를 알아보자.',
    id: 'ce0b3157-5784-4fba-a73b-0e41acfde946',
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'hello-world1',
    tags: ['react', 'javascript', 'front-end'],
    title:
      '타이틀이 얼마나 길어도 될지에 대해서 알아보자. 1 2 3 하나 둘 셋 넷. 길이가 계속해서 늘어나는 것을 확인할 수 있다.',
  },
  {
    author: '정현민',
    category: 'FE',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    description: 'React에서는 ‘Children’라는 내장 객체를 지원한다.',
    id: 'ce0b3157-5784-4fba-a73b-0e41acfde946',
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'hello-world2',
    tags: ['react', 'javascript', 'front-end'],
    title: 'English와 한글의 혼합 타이틀에서 문제가 발생하지 않는가?',
  },
  {
    author: '정현민',
    category: 'FE',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    description: 'React에서는 ‘Children’라는 내장 객체를 지원한다.',
    id: 'ce0b3157-5784-4fba-a73b-0e41acfde946',
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'hello-world2',
    tags: ['react', 'javascript', 'front-end'],
    title: 'English와 한글의 혼합 타이틀에서 문제가 발생하지 않는가?',
  },
];

export default posts;
