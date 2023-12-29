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
          <p>
            まずは自力でパズルを解いてみよう
          </p>
        </UsageSection>
        <UsageSection title="2">
          <p>
            どこの国か分からなかったら端末にパズルのQRコードを読みこもう<br />
            （なるべくgooglemapを開かずに自力で解こう）
          </p>
        </UsageSection>
        <UsageSection title="3">
          <p>
            もっと知りたい国があったら端末にパズルのQRコードを読み込もう
          </p>
        </UsageSection>
        <UsageSection title="4">
          <p>
            パズルが完成したら「答え」のページで答え合わせをしよう
          </p>
        </UsageSection>
        <UsageSection title="5">
          <p>間違った国があったらパズルのQRコードを読み込みもっと詳しくなろう</p>
        </UsageSection>
      </div>
    </div>
  );
}
