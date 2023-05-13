import 'server-only';

import dayjs from 'dayjs';

import { Post } from '@/types/notion';

const post: Post = {
  category: 'CSS',
  content:
    '<h2 id="서버-컴포넌트">서버 컴포넌트</h2><p><code>/app</code> 디렉토리 내부의 모든 컴포넌트는 기본적으로 React Server Components 이다.</p><p>이렇게 설정한 이유는</p><h2 id="클라이언트-컴포넌트">클라이언트 컴포넌트</h2><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" aria-label="test1"> test1</li><li class="task-list-item"><input type="checkbox" checked="" disabled="" aria-label="test2"> test2</li></ul><hr><ul><li>test1</li><li>test2</li></ul>',
  cover: 'https://www.notion.so/images/page-cover/met_georges_seurat_1884.jpg',
  createdTime: dayjs('2021-01-01'),
  description:
    '역사를 가는 설레는 구하지 보는 그들은 사람은 군영과 인생에 부패뿐이다. 인생의 따뜻한 있음으로써 같지 부패뿐이다. 그와 피는 얼마나 꽃이 뿐이다. 꽃이 없으면 같이, 밥을 보는 얼마나 약동하다. 인생을 장식하는 같이, 피고, 곳으로 것은 피가 돋고, 약동하다.',
  lastEditedTime: dayjs('2021-01-01'),
  slug: 'hello-world',
  tags: ['react', 'javascript', 'front-end'],
  title: 'key Props와 React.Children',
  toc: [
    { id: '서버-컴포넌트', tagName: 'h2', text: '서버 컴포넌트' },
    { id: '클라이언트-컴포넌트', tagName: 'h2', text: '클라이언트 컴포넌트' },
  ],
};
export default post;
