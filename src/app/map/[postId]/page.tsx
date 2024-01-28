import clsx from "clsx";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import { Suspense } from "react";
import { CountriesList } from "@/components/CountriesList/CountriesList";

export default function Map({
  params: { postId },
}: {
  params: { postId: string };
}) {
  return (
    <div className={clsx(w.container)}>
      <Suspense fallback={<h1 className={clsx(s.loading_text)}>読み込み中</h1>}>
        <CountriesList name={postId} />
      </Suspense>
    </div>
  );
}
