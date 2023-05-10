import { Dayjs } from 'dayjs';

import {
  CalendarIcon,
  ClockIcon,
  ViewIcon,
} from '@/app/posts/[slug]/components/Icons';
import ViewCount from '@/app/posts/[slug]/components/ViewCount';
import { calculateReadingTime } from '@/utils';

interface Props {
  content: string;
  createdTime: Dayjs;
  lastEditedTime: Dayjs;
  slug: string;
}

function MetaPanel({ content, createdTime, lastEditedTime, slug }: Props) {
  return (
    <div className="mb-8 mt-2 flex gap-8 border-b-2 border-stone-600 fill-stone-400 pb-3 pt-1 text-sm text-stone-400">
      <div
        className="flex items-center justify-end gap-2"
        data-tooltip={`Updated on ${lastEditedTime.format('YYYY-MM-DD')}`}
      >
        <CalendarIcon className="w-6" />
        <p>{createdTime.format('YYYY-MM-DD')}</p>
      </div>
      <div className="flex items-center justify-end gap-2">
        <ViewIcon className="w-6" />
        <ViewCount slug={slug} />
      </div>
      <div className="flex items-center justify-end gap-2">
        <ClockIcon className="w-6" />
        <p>{calculateReadingTime(content)} min</p>
      </div>
    </div>
  );
}

export default MetaPanel;
