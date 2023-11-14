import clsx from "clsx";
import * as s from "./page.css";
import * as w from "@/styles/whole.css";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <div className={clsx(s.hero_wrapper)}>
        <div className={clsx(s.hero_content, w.paddingSpaceMd)}>
          <h1 className={clsx(s.hero_title)}>World Map</h1>
          <p>それぞれの国について学ぼう！</p>
        </div>
        <svg
          className={clsx(s.hero_wave)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,32L48,32C96,32,192,32,288,69.3C384,107,480,181,576,213.3C672,245,768,235,864,197.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className={clsx(w.container)}>
        <h1>hello</h1>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
    </div>
  );
}
