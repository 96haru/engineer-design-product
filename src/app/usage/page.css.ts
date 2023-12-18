import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const usage_wrapper = style({
  paddingTop: "36px",
  width: "100%",

  "@media": {
    [mediaQueryScreen("md")]: {
      paddingTop: "56px",
    },
  },
});
