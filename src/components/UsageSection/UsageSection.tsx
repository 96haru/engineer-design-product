import clsx from "clsx";

import * as s from "./UsageSection.css";
import * as w from "@/styles/whole.css";

import { ReactNode } from "react";

type UsageSection_Props = {
  title: string;
  children: ReactNode;
};

export const UsageSection = (p: UsageSection_Props) => {
  return (
    <div className={clsx(s.wrapper, w.paddingSpaceMd, w.borderRadiusMd)}>
      <h2 className={clsx(s.UsageSection_title)}>手順.{p.title}</h2>
      <div className={clsx(w.paddingSpaceSm)}>{p.children}</div>
    </div>
  );
};
