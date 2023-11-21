import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const hero_wrapper = style({
  height: "70dvh",
  minHeight: "720px",
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const hero_content = style({
  width: "100%",
});

export const hero_title = style({
  fontSize: "3rem",
  fontFamily: "var(--font-josefin_sans)",

  display: "flex",
  alignItems: "center",

  "@media": {
    [mediaQueryScreen("md")]: {
      fontSize: "4rem",
    },
  },
});

export const sub_hero_title = style({
  fontFamily: "var(--font-josefin_sans)",
});



export const hero_wave = style({
  width: "100%",
  position: "absolute",
  bottom: "-1px",
  left: "0px",
});
