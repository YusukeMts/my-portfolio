import Image from 'next/image'; // Imageコンポーネントをインポート
import Link from 'next/link';   // Linkコンポーネントをインポート
import WorkCard from '@/components/WorkCard';

//作品データを配列で管理
const works =[
  {
    title:"my first work",
    description:"はじめて作ったアプリケーションです",
    imageUrl:"/images/work01.png",
    appUrl:"",
    githubUrl:"",
  }
]

export default function Home() {
  return (
    <>
       {/* ▼▼▼ ここがアニメーションするグラデーション背景 ▼▼▼ */}
      <div 
        className="fixed inset-0 -z-10 animated-gradient" 
      />

      {/*ヒーローセクション*/}
      <section className="flex h-screen items-center justify-center">
        <div className="text-center">
          <Image
            src="/images/profile.jpg" 
            alt="プロフィール画像"
            width={128}
            height={128}
            className="mx-auto mb-4 rounded-full object-cover"
          />
          <h1 className="text-5xl font-bold text-slate-100">Yusuke Mts</h1>
          <p className="mt-2 text-xl text-slate-100">
            A Web Developer with Expertise in Sustainable Design .
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="" target="_blank" className="rounded bg-sky-500 px-4 py-2 font-bold hover:bg-sky-600">
              GitHub
            </Link>
            <Link href="" target="_blank" className="rounded bg-slate-700 px-4 py-2 font-bold hover:bg-slate-600">
              X (Twitter)
            </Link>
          </div>
        </div>
      </section>
      {/* Works Section */}
      <section id="works" className="py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">My Works</h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {works.map((work) => (
            <WorkCard
              key={work.title} // mapでループする際はkeyを指定
              title={work.title}
              description={work.description}
              imageUrl={work.imageUrl}
              appUrl={work.appUrl}
              githubUrl={work.githubUrl}
            />
          ))}
        </div>
      </section>

      {/* ▼▼▼ ここからAbout Meセクションを追加 ▼▼▼ */}
      <section id="about" className=" bg-white/10 shadow-lg backdrop-blur-md py-20">
        <div className="container mx-auto flex flex-col items-center gap-12 px-4 md:flex-row">
          
          {/* 左側：テキストエリア */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          
            <p className="mb-4 leading-relaxed text-slate-100">
              嬉しいを組み合わせて持続可能な運用を実現することに関心があります。
            </p>
            
          </div>

          {/* 右側：画像エリア */}
          <div className="flex-1">
            <Image
              // public/images/nature.jpg のようなパスを指定します
              src="/images/aboutme01.jpg" 
              alt="イメージ画像"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>
      {/* ▲▲▲ About Meセクションはここまで ▲▲▲ */}



    </>

    
  );
}