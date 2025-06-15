import Link from 'next/link';

// function Header() { ... } の部分を、constとアロー関数に書き換え
const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-slate-0/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
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
    </header>
  );
};

export default Header;