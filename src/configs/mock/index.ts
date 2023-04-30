import 'server-only';

import database from '@/configs/mock/data/database';
import post from '@/configs/mock/data/post';
import posts from '@/configs/mock/data/posts';

export enum MockData {
  POSTS,
  POST,
  DATABASE,
}

const mockData = {
  [MockData.POSTS]: posts,
  [MockData.POST]: post,
  [MockData.DATABASE]: database,
};

const isEnvDevelopment = process.env.NODE_ENV === 'development';

export const withMock = <T, Args extends any[]>(
  key: MockData,
  fn: (...args: Args) => Promise<T>
): ((...args: Args) => Promise<T>) => {
  if (isEnvDevelopment) {
    return async () => mockData[key] as T;
  }
  return fn;
};
