'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';

import { getUserID, incrementViewCount } from '@/utils/localStorage';

interface Props {
  slug: string;
}

function ClientProcess({ children, slug }: PropsWithChildren<Props>) {
  /* 조회수 증가 */
  useEffect(() => {
    const userID = getUserID();
    incrementViewCount(slug);
    fetch('/api/views', {
      body: JSON.stringify({ slug, userID }),
      method: 'PUT',
    });
  }, []);

  /* 복사 버튼 추가 */
  useEffect(() => {
    const pres = document.querySelectorAll('pre');
    pres.forEach((pre) => {
      const button = document.createElement('button');
      button.addEventListener('click', function handleClick() {
        const code = pre.querySelector('code');
        navigator.clipboard.writeText(code!.innerText ?? '');
        button.classList.add('copied');
        setTimeout(() => button.classList.remove('copied'), 2000);
      });
      button.innerHTML =
        '<svg viewBox="0 96 960 960"><path d="M180 975q-24 0-42-18t-18-42V312h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42V235q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440V235H300v560Zm0 0V235v560Z"/></svg>';
      button.setAttribute('aria-label', 'copy code');
      pre.appendChild(button);
    });
  }, []);

  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { innerHeight, scrollY } = window;
          const height = document.documentElement.scrollHeight;
          const progressPercent = (scrollY / (height - innerHeight)) * 100;
          progressRef.current!.style.transform = `scaleX(${progressPercent}%)`;
          if (progressPercent >= 100) {
            progressRef.current!.style.opacity = '0';
          } else {
            progressRef.current!.style.opacity = '1';
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {children}
      <div
        ref={progressRef}
        className="fixed bottom-0 w-screen origin-left scale-x-0 transform-gpu border border-stone-500 transition-opacity"
      />
    </>
  );
}

export default ClientProcess;
