'use client';

import {
  ScrollDownIcon,
  ScrollUpIcon,
} from '@/app/posts/[slug]/components/Icons';

function ScrollButtons() {
  return (
    <div className="sticky top-[calc(100vh-180px)] mt-8 flex flex-col gap-4 border-l-2 border-stone-600 fill-stone-500 py-2 pl-4 text-sm text-stone-500">
      <button
        aria-label="scroll up to top"
        className="h-11 w-11 rounded border-2 border-stone-600 p-1"
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
        className="h-11 w-11 rounded border-2 border-stone-600 p-1"
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
