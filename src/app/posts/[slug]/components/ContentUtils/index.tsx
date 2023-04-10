'use client';

import {
  ScrollDownIcon,
  ScrollUpIcon,
} from 'src/app/posts/[slug]/components/Icons';

import { Button, Wrapper } from './styles';

function ContentUtils() {
  return (
    <Wrapper>
      <Button
        aria-label="scroll up to top"
        onClick={() =>
          window.scrollTo({
            behavior: 'smooth',
            top: 0,
          })
        }
        type="button"
      >
        <ScrollUpIcon />
      </Button>
      <Button
        aria-label="scroll down to bottom"
        onClick={() =>
          window.scrollTo({
            behavior: 'smooth',
            top: document.body.scrollHeight,
          })
        }
        type="button"
      >
        <ScrollDownIcon />
      </Button>
    </Wrapper>
  );
}

export default ContentUtils;
