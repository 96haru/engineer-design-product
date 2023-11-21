import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

import * as s from "./TextLink.css";

type TextLink_Props = {
  children: ReactNode;
  href: string;
  blank: boolean;
};

export const TextLink = (props: TextLink_Props) => {
  return (
    <Link href={props.href} target={props.blank ? "_blank" : ""}>
      <p className={clsx(s.link_style)}>{props.children}</p>
    </Link>
  );
};
