import Link from 'next/link';

// function Header() { ... } の部分を、constとアロー関数に書き換え
const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-slate-0/80 backdrop-blur-sm lg:h-screen lg:w-24">
      {/* ミディアム以下: 上部固定ヘッダー */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:hidden">
        <Link href="/" className="text-xl font-bold text-slate-100">
          My Portfolio
        </Link>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/#works" className="text-slate-100 hover:text-black">
                Works
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-slate-100 hover:text-black">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ラージ以上: 縦固定ヘッダー */}
      <div className="hidden h-full flex-col items-center justify-center py-8 lg:flex">
        <nav className="flex flex-col items-center justify-center gap-16">
          <Link href="/" className="rotate-90 text-xl font-bold text-slate-100">
            Portfolio
          </Link>
          <ul className="flex flex-col items-center justify-center gap-12">
            <li>
              <Link 
                href="/#works" 
                className="rotate-90 text-slate-100 hover:text-pink-400 transition-colors"
              >
                Works
              </Link>
            </li>
            <li>
              <Link 
                href="/#about" 
                className="rotate-90 text-slate-100 hover:text-pink-400 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;