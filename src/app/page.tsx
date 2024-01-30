import clsx from "clsx";
import * as s from "./page.css";
import * as w from "@/styles/whole.css";

import PublicIcon from "@mui/icons-material/Public";
import { HomeSection } from "@/components/HomeSection/HomeSection";
import { TextLink } from "@/components/TextLink/TextLink";
import { LinkButton } from "@/components/LinkButton/LinkButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <div className={clsx(s.hero_wrapper)}>
        <Image
          src={"/img/top_hero/hero.jpg"}
          alt="hero"
          height={1920}
          width={2560}
          className={clsx(s.hero_image)}
        />
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
      <div className={clsx(w.container)}>
        <section className={clsx(s.main_wrapper)}>
          <HomeSection title="world-mapとは...?">
            <p>
              これから世界の国を学ぶ人が、楽しく詳しく理解できるように手助けをするものです。
              分からない国や良く知らない国をスマホなどに読み込ませることで、生活や文化などを簡単に知ることができます！
            </p>
          </HomeSection>
          <LinkButton href="/collection" content="国の一覧を見る！" />
        </section>
      </div>
    </div>
  );
}
