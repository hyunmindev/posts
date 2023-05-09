import { NAME } from '@/constants/meta';

function GlobalFooter() {
  return (
    <footer className="p-4 text-xs text-stone-400">
      © 2023. {NAME}. All rights reserved.
    </footer>
  );
}

export default GlobalFooter;
