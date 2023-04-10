'use client';

import {
  ScrollDownButton,
  ScrollUpButton,
} from '@/app/posts/[slug]/components/Buttons';

import { Button, Wrapper } from './styles';

function ContentUtils() {
  return (
    <Wrapper>
      <Button
        onClick={() =>
          window.scrollTo({
            behavior: 'smooth',
            top: 0,
          })
        }
        type="button"
      >
        <ScrollUpButton />
      </Button>
      <Button
        onClick={() =>
          window.scrollTo({
            behavior: 'smooth',
            top: document.body.scrollHeight,
          })
        }
        type="button"
      >
        <ScrollDownButton />
      </Button>
    </Wrapper>
  );
}

export default ContentUtils;
