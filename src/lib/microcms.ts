import { createClient } from 'microcms-js-sdk';

// 型定義
export interface Work {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  technologies?: string;
  url?: string;
  github?: string;
  createdAt: string;
  updatedAt: string;
}

// Works一覧を取得
export const getWorks = async (): Promise<Work[]> => {
  // 環境変数の存在チェック
  if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
    console.warn('microCMS environment variables are not set. Returning empty array.');
    return [];
  }

  try {
    // クライアントを関数内で作成
    const client = createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      apiKey: process.env.MICROCMS_API_KEY,
    });

    const data = await client.get({
      endpoint: 'works',
    });
    return data.contents;
  } catch (error) {
    console.error('Failed to fetch works from microCMS:', error);
    return [];
  }
};