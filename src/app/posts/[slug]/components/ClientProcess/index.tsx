'use client';

import { PropsWithChildren, useEffect } from 'react';

import { getUserID, incrementViewCount } from '@/utils/localStorage';

interface Props {
  slug: string;
}

function ClientProcess({ children, slug }: PropsWithChildren<Props>) {
  /* 조회수 카운트 */
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
        button.classList.add('copied');
        navigator.clipboard.writeText(code!.innerText ?? '');
      });
      pre.addEventListener('mouseleave', () => {
        button.classList.remove('copied');
      });
      button.innerHTML =
        '<svg viewBox="0 96 960 960"><path d="M180 975q-24 0-42-18t-18-42V312h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42V235q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440V235H300v560Zm0 0V235v560Z"/></svg>';
      button.setAttribute('aria-label', 'copy code');
      button.classList.add('copy');
      pre.appendChild(button);
    });
  }, []);

  return <>{children}</>;
}

export default ClientProcess;
