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
    <div className="meta">
      <div data-tooltip={`Updated on ${lastEditedTime.format('YYYY-MM-DD')}`}>
        <CalendarIcon />
        <p>{createdTime.format('YYYY-MM-DD')}</p>
      </div>
      <div>
        <ClockIcon />
        <p>{calculateReadingTime(content)} min</p>
      </div>
      <div>
        <ViewIcon />
        <ViewCount slug={slug} />
      </div>
    </div>
  );
}

export default MetaPanel;
