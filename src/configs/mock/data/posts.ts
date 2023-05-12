import 'server-only';

import dayjs from 'dayjs';

import { Post } from '@/types/notion';

const posts: Post[] = [
  {
    category: 'CSS',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'slug1',
    tags: ['react', 'javascript', 'front-end'],
    title:
      '이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다.',
  },
  {
    category: 'CSS',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'slug2',
    tags: ['react', 'javascript', 'front-end'],
    title:
      'the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
  },
  {
    category: 'FE',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'slug3',
    tags: ['react', 'javascript', 'front-end'],
    title: 'English와 한글 한글과 Language Mix Test를 Run하다.',
  },
  {
    category: 'JS',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'slug4',
    tags: ['react', 'javascript', 'front-end'],
    title: '%$#^&*()_+{}":?><"`',
  },
  {
    category: 'JS',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'slug5',
    tags: ['react', 'javascript', 'front-end'],
    title:
      '가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하',
  },
  {
    category: 'JS',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'slug6',
    tags: ['react', 'javascript', 'front-end'],
    title:
      '🎳🏂🌁🌉🌋🌌🌏🌑🌓🌔🌕🌛🌠🌰🍏🌱🌼🌽🌿🍄🍇🍈🍌🍍🍑🍒🍩🍕🍖🍗🍠🍤🍥🍨🍪🍫🍬🍭🍮🍯🍷🍹🎊🎋🎠🎣🎭🎮🎲🎴🎹🎻',
  },
  {
    category: 'JS',
    createdTime: dayjs('2023-02-09T02:29:00.000Z'),
    lastEditedTime: dayjs('2023-04-29T09:54:00.000Z'),
    slug: 'slug7',
    tags: ['react', 'javascript', 'front-end'],
    title:
      '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345',
  },
];

export default posts;
