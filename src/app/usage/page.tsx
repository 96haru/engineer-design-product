import clsx from "clsx";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import { UsageSection } from "@/components/UsageSection/UsageSection";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function Usage() {
  return (
    <div className={clsx(w.container)}>
      <PageTitle title="使用方法" />
      <div className={clsx(s.usage_wrapper)}>
        <UsageSection title="1">
          <p>まずは自力でパズルを解いてみよう</p>
        </UsageSection>
        <UsageSection title="2">
          <p>
            どこの国か分からなかったら端末にパズルのQRコードを読みこもう。国名からどこにあるか探してみよう。さらにわからなかったときは詳細ページからGoogle
            Mapを開いて場所を確認しよう。
          </p>
        </UsageSection>
        <UsageSection title="3">
          <p>国について知りたいことががあったら端末にパズルのQRコードを読み込もう。</p>
        </UsageSection>
      </div>
    </div>
  );
}
