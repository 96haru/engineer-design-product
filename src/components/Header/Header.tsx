import clsx from "clsx";
import * as s from "./Header.css";
import Link from "next/link";

export const Header = () => {
  interface Links_type {
    href: string;
    content: string;
  }
  const Links: Array<Links_type> = [
    {
      href: "/about",
      content: "About",
    },
  ];

  return (
    <header className={clsx(s.Header_wrapper)}>
      <div>
        <Link href={"/"}>
          <p>world map</p>
        </Link>
      </div>
      <div className={clsx(s.headerNav)}>
        {Links.map((e, index) => (
          <Link key={index} href={e.href}>
            <p>{e.content}</p>
          </Link>
        ))}
      </div>
    </header>
  );
};
