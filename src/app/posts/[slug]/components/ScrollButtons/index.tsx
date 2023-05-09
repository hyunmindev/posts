'use client';

import {
  ScrollDownIcon,
  ScrollUpIcon,
} from '@/app/posts/[slug]/components/Icons';

// import { Button, Wrapper } from './styles';

function ScrollButtons() {
  return (
    <div>
      <button
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
      </button>
      <button
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
      </button>
    </div>
  );
}

export default ScrollButtons;
