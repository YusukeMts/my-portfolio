import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mts | Web Developer",
  description: "A portfolio site created with Next.js",

  // ▼▼▼ OGP設定を追加 ▼▼▼
  openGraph: {
    title: "Ysk | Web Developer",
    description: "はじめてのポートフォリオサイトです。",
    images: ["/images/work01.png"], // publicフォルダに配置した画像のパス
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      {/* bodyタグにTailwind CSSのクラスを適用 */}
      <body className={`${inter.className} bg-slate-900 text-slate-50 pt-16 lg:pt-0 lg:pl-24`}>
        {/* ★ここにヘッダーを追加予定 */}
        <Header />
        <main>
          {children} {/* ← この中に各ページの内容が入る */}
        </main>
        {/* ★ここにフッターを追加予定 */}
        <Footer />
      </body>
    </html>
  );
}