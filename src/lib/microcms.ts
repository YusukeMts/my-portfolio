import { createClient } from 'microcms-js-sdk';

// 型定義
export interface Work {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  appUrl: string;
  githubUrl: string;
  createdAt: string;
  updatedAt: string;
}

// クライアント作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

// Works一覧を取得
export const getWorks = async (): Promise<Work[]> => {
  const data = await client.get({
    endpoint: 'works',
  });
  return data.contents;
};