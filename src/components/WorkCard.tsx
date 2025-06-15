import Image from 'next/image';
import Link from 'next/link';

// propsの型定義は変更なし
interface WorkCardProps {
  title: string;
  description: string;
  imageUrl: string;
  appUrl: string;
  githubUrl: string;

}

export default function WorkCard({ title, description, imageUrl, appUrl, githubUrl }: WorkCardProps) {
  return (
    // ▼▼▼ カード全体のスタイルを変更 ▼▼▼
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-md">
      
      {/* 画像部分 */}
      <Image src={imageUrl} alt={title} width={500} height={300} className="h-48 w-full rounded-t-2xl object-cover" />
      
      {/* テキストとボタンのエリア */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
        <p className="mt-2 flex-1 text-slate-300">{description}</p>
        

        {/* ▼▼▼ ボタンのデザインを変更 ▼▼▼ */}
        <div className="mt-4 flex gap-4">
          <Link 
            href={appUrl} 
            target="_blank" 
            className="flex-1 rounded-lg bg-pink-500/80 px-4 py-2 text-center font-bold text-white transition-all hover:bg-pink-500"
          >
            Demo
          </Link>
          <Link 
            href={githubUrl} 
            target="_blank" 
            className="flex-1 rounded-lg bg-black/20 px-4 py-2 text-center font-bold text-slate-200 transition-all hover:bg-black/40"
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
}