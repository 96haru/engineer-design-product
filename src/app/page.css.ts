import { Colors } from "@/styles/colors";
import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const hero_wrapper = style({
  height: "80dvh",
  minHeight: "720px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  background: Colors.background.hero.light,
});

export const hero_content = style({});

export const hero_title = style({
  fontSize: "3rem",
  fontFamily: "var(--font-space_mono)",

  "@media": {
    [mediaQueryScreen("md")]: {
      fontSize: "5rem",
    },
  },
});

export const hero_wave = style({
  width: "100%",
  position: "absolute",
  bottom: "0px",
  left: "0px",
});
