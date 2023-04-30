import 'server-only';

import { Database } from '@/types/notion';

const database: Database = {
  categories: {
    CSS: {
      color: 'red',
    },
    FE: {
      color: 'blue',
    },
    JS: {
      color: 'green',
    },
  },
  tags: {},
};

export default database;
