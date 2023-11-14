import clsx from "clsx";
import { hero_wrapper } from "./page.css";

export default function Home() {
  return (
    <div>
      <div className={clsx(hero_wrapper)}>
        <h1>世界地図</h1>
      </div>
    </div>
  );
}
