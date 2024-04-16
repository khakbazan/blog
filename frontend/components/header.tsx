import { navigationLinks } from "@/data/navigation-links";
import Image from "next/image";
import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";

export const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-b-gray-300 p-3 sticky top-0 z-50">
      <header className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center" role="navigation">
          <div className="hidden md:flex items-center gap-x-5">
            <Link href="/" prefetch={false}>
              <Image src="/images/logo.svg" width={35} height={25} alt="logo" />
            </Link>

            <div className="flex items-center gap-x-3.5">
              {navigationLinks.map((item, idx) => (
                <Link
                  key={`nav-link-${idx}`}
                  href={item?.href}
                  prefetch={false}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <Link href="/" prefetch={false}>
              <Image
                src="/images/logo.svg"
                width={33}
                height={33}
                alt="logo"
                className="block md:hidden mb-1"
              />
            </Link>

            <Link
              aria-label="افزودن پست جدید"
              href="/new-post"
              prefetch={false}
              className="flex items-center gap-x-1 text-primary text-sm cursor-pointer"
            >
              <FiEdit3 />
              <span>پست جدید</span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
