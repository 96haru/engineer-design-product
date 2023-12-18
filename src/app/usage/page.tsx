import clsx from "clsx";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import { UsageSection } from "@/components/UsageSection/UsageSection";

export default function Usage() {
  return (
    <div className={clsx(w.container)}>
      <div className={clsx(s.usage_wrapper)}>
        <UsageSection title="1">
          <p>
            sample text sample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample text
          </p>
        </UsageSection>
      </div>
    </div>
  );
}
