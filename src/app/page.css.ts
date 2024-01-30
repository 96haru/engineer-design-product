import { Colors } from "@/styles/colors";
import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const hero_wrapper = style({
  height: "60dvh",
  minHeight: "560px",
  maxHeight: "1008px",
  width: "100%",
  position: "relative",
});

export const hero_image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",

  maskImage: `linear-gradient(0deg, transparent, 40%, black)`,
});

export const hero_content = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
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

export const title = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "48px",
  border: `solid 1px ${Colors.color.main_border.light}`,

  "@media": {
    [mediaQueryScreen("md")]: {
      height: "72px",
    },
  },
});

export const main_wrapper = style({});
