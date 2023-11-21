import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const Header_wrapper = style({
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "36px",
  backdropFilter: "blur(3px)",

  "@media": {
    [mediaQueryScreen("md")]: {
      height: "56px",
    },
  },
});

export const Header_title = style({
  fontFamily: "var(--font-josefin_sans)",
});
