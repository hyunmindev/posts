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
  },
  tags: {},
};

export default database;
