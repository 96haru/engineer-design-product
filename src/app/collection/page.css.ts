import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const collection_wrapper = style({
  paddingTop: "36px",
  width: "100%",

  "@media": {
    [mediaQueryScreen("md")]: {
      paddingTop: "56px",
    },
  },
});

export const loading_text = style({
  textAlign: "center",
  lineHeight: "10rem",

  "@media": {
    [mediaQueryScreen("md")]: {
      lineHeight: "20rem",
    },
  },
});

export const sub_title = style({
  textAlign: "center"
})