import { ReactNode } from "react";
import clsx from "clsx";

import * as s from "./HomeSection.css";
import * as w from "@/styles/whole.css";

type HomeSection_Props = {
  children: ReactNode;
  title: string;
};

export const HomeSection = (props: HomeSection_Props) => {
  return (
    <div
      className={clsx(
        s.HomeSection_wrapper,
        w.paddingSpaceSm,
        w.borderRadiusMd
      )}
    >
      <h2 className={clsx(s.HomeSection_title)}>{props.title}</h2>
      <div className={clsx(w.paddingSpaceSm)}>{props.children}</div>
    </div>
  );
};
