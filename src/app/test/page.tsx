import { getWorks } from '@/lib/microcms';

export default async function TestPage() {
  try {
    const works = await getWorks();
    
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">microCMS接続テスト</h1>
        <p className="mb-4">取得したデータ数: {works.length}件</p>
        
        {works.length > 0 ? (
          <div>
            <h2 className="text-xl font-bold mb-2">データ内容:</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {JSON.stringify(works, null, 2)}
            </pre>
          </div>
        ) : (
          <p className="text-red-500">データが取得できませんでした</p>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-500">エラーが発生しました</h1>
        <pre className="bg-red-100 p-4 rounded">
          {error instanceof Error ? error.message : 'Unknown error'}
        </pre>
      </div>
    );
  }
}