'use client';

import Giscus from '@giscus/react';

function CommentPanel() {
  return (
    <Giscus
      category="comment"
      categoryId="DIC_kwDOJIhszM4CWHDw"
      emitMetadata="0"
      inputPosition="top"
      lang="ko"
      loading="lazy"
      mapping="title"
      reactionsEnabled="1"
      repo="hyunmindev/blog.hyunmin.dev"
      repoId="R_kgDOJIhszA"
      theme="transparent_dark"
    />
  );
}

export default CommentPanel;
