import Link from "next/link";

import * as s from "./LinkButton.css";
import * as w from "@/styles/whole.css";
import clsx from "clsx";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type LinkButton_Props = {
  href: string;
  content: string;
};

export const LinkButton = (p: LinkButton_Props) => {
  return (
    <div className={clsx(s.wrapper)}>
      <Link className={clsx(s.button)} href={p.href}>
        <p>{p.content}</p>
        <NavigateNextIcon />
      </Link>
    </div>
  );
};
