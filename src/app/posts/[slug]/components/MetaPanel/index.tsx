import { Dayjs } from 'dayjs';

import {
  CalendarIcon,
  ClockIcon,
  ViewIcon,
} from '@/app/posts/[slug]/components/Icons';
import { calculateReadingTime } from '@/utils';

interface Props {
  content: string;
  createdTime: Dayjs;
  lastEditedTime: Dayjs;
}

function MetaPanel({ content, createdTime, lastEditedTime }: Props) {
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
        <p>42</p>
      </div>
    </div>
  );
}

export default MetaPanel;
