import clsx from "clsx";
import * as s from "./PageTitle.css";

type PageTitle_Props = {
  title: string;
};

export const PageTitle = (props: PageTitle_Props) => {
  return (
    <div className={clsx(s.Pagetitle_wrappper)}>
      <h2 className={clsx(s.PageTitle_title)}>{props.title}</h2>
    </div>
  );
};
