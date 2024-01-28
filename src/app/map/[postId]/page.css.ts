import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const loading_text = style({
  textAlign: "center",
  lineHeight: "10rem",

  "@media": {
    [mediaQueryScreen("md")]: {
      lineHeight: "20rem",
    },
  },
});