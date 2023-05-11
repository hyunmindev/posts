import 'server-only';

import dayjs from 'dayjs';

import { Post } from '@/types/notion';

const post: Post = {
  category: 'CSS',
  content: `<h2 id="시작">시작</h2><p>코드<code>블럭</code> 위의 텍스트. <code>블럭</code> 테스트</p><p><code>code</code></p><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> { results } = <span class="hljs-keyword">await</span> notion.<span class="hljs-property">databases</span>.<span class="hljs-title function_">query</span>({
  <span class="hljs-attr">database_id</span>: <span class="hljs-variable constant_">POST_NOTION_DATABASE_ID</span>,
  <span class="hljs-attr">filter</span>: { 
    <span class="hljs-attr">and</span>: [{ <span class="hljs-attr">property</span>: <span class="hljs-string">'slug'</span>, <span class="hljs-attr">rich_text</span>: { <span class="hljs-attr">equals</span>: slug } }] 
  },
});
</code></pre><pre><code class="hljs language-scss"><span class="hljs-selector-tag">p</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">30px</span>;
    <span class="hljs-attribute">letter-spacing</span>: -<span class="hljs-number">0.003em</span>;
    <span class="hljs-attribute">word-break</span>: break-all;
    <span class="hljs-attribute">word-spacing</span>: <span class="hljs-number">2px</span>;

    <span class="hljs-keyword">@include</span> mixins.breakpoint(sm) {
      <span class="hljs-attribute">font-size</span>: <span class="hljs-number">22px</span>;
      <span class="hljs-attribute">line-height</span>: <span class="hljs-number">34px</span>;
    }
}
</code></pre><p>코드블럭 밑의 텍스트.</p><p>이미지 위의 텍스트.</p><p><img src="https://tociwdngjsdbjhdubkih.supabase.co/storage/v1/object/public/post/be88595d-d115-5ec5-9cd7-ce11051baf34.webp" alt="IDE 이미지." loading="eager" width="768" height="432" style=""></p><p>이미지 밑의 텍스트.</p><table><thead><tr><th>test1</th><th>test2</th></tr></thead><tbody><tr><td>test3</td><td>test4</td></tr><tr><td>test5</td><td>test6</td></tr><tr><td>test7</td><td>test8</td></tr></tbody></table><blockquote><p>테스트 인용</p></blockquote><h2 id="문단-테스트">문단 테스트</h2><p>인간에 현저하게 같이, 있다. 든 이상의 노래하며 공자는 인간은 실현에 것이다. 있는 열락의 현저하게 아니다. 것이다.보라, 실현에 희망의 자신과 노년에게서 칼이다. 기쁘며, 품고 인류의 목숨을 하는 것이다. 대중을 많이 열매를 그리하였는가? 인간의 끓는 꽃이 밝은 눈에 오아이스도 내는 긴지라 트고, 그리하였는가? 설산에서 봄날의 위하여서, 있으며, 끝까지 그들을 인도하겠다는 이 같이, 봄바람이다. 같지 보내는 듣기만 인생에 못하다 뜨거운지라, 현저하게 이것이다.</p><p>인생을 싶이 끓는 예수는 대중을 눈이 많이 그들의 봄날의 것이다. 찾아 이상 보이는 열락의 있으며, 스며들어 것이다. 있음으로써 능히 열락의 가슴이 온갖 그러므로 사는가 희망의 품으며, 이것이다. 원대하고, 그러므로 구하기 그들의 아니다. 이것을 같이 설레는 구하지 넣는 무엇이 끝까지 교향악이다. 가슴에 할지라도 싹이 실로 피가 수 그들은 가진 그들을 사막이다. 봄바람을 그들에게 불어 스며들어 않는 크고 끓는 심장의 곳으로 칼이다. 무엇이 충분히 곳이 철환하였는가? 자신과 것이 더운지라 할지니, 부패뿐이다. 있음으로써 힘차게 청춘의 이것을 위하여서.</p><h3 id="third-paragraph">Third Paragraph</h3><p>소리다.이것은 품고 귀는 영원히 천고에 같이 있으며, 트고, 곳으로 아니다. 따뜻한 할지니, 청춘 가치를 끓는 생의 칼이다. 끓는 하였으며, 오아이스도 자신과 실로 것이다. <strong>용기가 뜨거운지라, 없으면 있으랴? 그들에게 얼마나 사랑의 있다. 이상, 것이 대중을 있을 그들은 이상은 무엇을 피어나는 몸이 운다.</strong> 역사를 가는 설레는 구하지 보는 그들은 사람은 군영과 인생에 부패뿐이다. 인생의 따뜻한 있음으로써 같지 부패뿐이다. 그와 피는 얼마나 꽃이 뿐이다. 꽃이 없으면 같이, 밥을 보는 얼마나 약동하다. 인생을 장식하는 같이, 피고, 곳으로 것은 피가 돋고, 약동하다.</p><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled aria-label="test1"> test1</li><li class="task-list-item"><input type="checkbox" disabled aria-label="test2"> test2</li></ul><h3 id="h3">h3</h3><h4 id="h4">h4</h4><h5>h5</h5><h6>h6</h6><h2 id="이미지-테스트">이미지 테스트</h2><p><img src="https://tociwdngjsdbjhdubkih.supabase.co/storage/v1/object/public/post/fdb68860-3a36-5e66-b80e-4731c93e38c6.webp" alt="" loading="lazy" width="768" height="512"></p><p><img src="https://tociwdngjsdbjhdubkih.supabase.co/storage/v1/object/public/post/9f913a75-94ee-58ff-8d0d-1c33e8acad8c.webp" alt="" loading="lazy" width="768" height="432"></p><ul class="contains-task-list"><li class="task-list-item"><p><input type="checkbox" disabled aria-label="투두 리스트1"> 투두 리스트1</p><p><img src="https://tociwdngjsdbjhdubkih.supabase.co/storage/v1/object/public/post/044f4b7f-9236-59d7-9a10-08434c1c0979.webp" alt="" loading="lazy" width="768" height="745"></p></li><li class="task-list-item"><p><input type="checkbox" disabled aria-label="투두 리스트2"> 투두 리스트2</p></li></ul><p><img src="https://tociwdngjsdbjhdubkih.supabase.co/storage/v1/object/public/post/7ec061c3-0f69-5d83-859c-1bfd9facbaaa.webp" alt="" loading="lazy" width="768" height="343"></p><p><a href="https://webpack.kr/guides/tree-shaking/">bookmark</a></p><p><a href="0c654f4d-8179-433d-8a86-3d50b075ad45">link_to_page</a></p><p>이미지 밑의 텍스트</p>
  `,
  cover: 'https://www.notion.so/images/page-cover/met_georges_seurat_1884.jpg',
  createdTime: dayjs('2021-01-01'),
  description:
    '역사를 가는 설레는 구하지 보는 그들은 사람은 군영과 인생에 부패뿐이다. 인생의 따뜻한 있음으로써 같지 부패뿐이다. 그와 피는 얼마나 꽃이 뿐이다. 꽃이 없으면 같이, 밥을 보는 얼마나 약동하다. 인생을 장식하는 같이, 피고, 곳으로 것은 피가 돋고, 약동하다.',
  lastEditedTime: dayjs('2021-01-01'),
  slug: 'hello-world',
  tags: ['react', 'javascript', 'front-end'],
  title: 'key Props와 React.Children',
  toc: [
    { id: '시작', tagName: 'h2', text: '시작' },
    { id: '문단-테스트', tagName: 'h2', text: '문단 테스트' },
    { id: 'third-paragraph', tagName: 'h3', text: 'Third Paragraph' },
    { id: 'h3', tagName: 'h3', text: 'h3' },
    { id: 'h4', tagName: 'h4', text: 'h4' },
    { id: '이미지-테스트', tagName: 'h2', text: '이미지 테스트' },
  ],
};
export default post;
