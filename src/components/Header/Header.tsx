import clsx from "clsx";
import * as s from "./Header.css";
import * as w from "@/styles/whole.css";
import Link from "next/link";

import PublicIcon from "@mui/icons-material/Public";

export const Header = () => {
  return (
    <header className={clsx(s.Header_wrapper)}>
      <div>
        <Link href={"/"}>
          <p className={clsx(s.Header_title)}>
            world map
          </p>
        </Link>
      </div>
      <div>
        <p>hello</p>
      </div>
    </header>
  );
};
