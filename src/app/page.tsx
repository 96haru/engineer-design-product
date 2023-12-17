import clsx from "clsx";
import * as s from "./page.css";
import * as w from "@/styles/whole.css";

import PublicIcon from "@mui/icons-material/Public";
import { HomeSection } from "@/components/HomeSection/HomeSection";
import { TextLink } from "@/components/TextLink/TextLink";
import { LinkButton } from "@/components/LinkButton/LinkButton";

export default function Home() {
  return (
    <div>
      <div className={clsx(w.container)}>
        {/* hero */}
        <div className={clsx(s.hero_wrapper)}>
          <div className={clsx(s.hero_content)}>
            <h1 className={clsx(s.hero_title)}>
              <span>
                <PublicIcon className={clsx(w.icon_hero_title)} />
              </span>
              world map
            </h1>
            <p>世界の国について学んでみよう！</p>
            <TextLink href="/about" blank={false}>
              <span className={clsx(s.sub_hero_title)}>by </span>
              いのべーしょんえくすぷろーらーず
            </TextLink>
            <LinkButton href="/usage" content="使い方を見る" />
          </div>
        </div>

        {/* main */}
        {/* <div className={clsx(s.title, w.borderRadiusMd)}>
          <p>QRコードを読み込んで見よう!</p>
        </div> */}
        <HomeSection title="world-mapとは...?">
          <p>world-mapについての説明/aboutページにも書いてあるけど、もっと簡潔に何かが欲しい</p>
        </HomeSection>
      </div>
    </div>
  );
}
