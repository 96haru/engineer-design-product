import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const map_wrapper = style({
  paddingTop: "36px",
  "@media": {
    [mediaQueryScreen("md")]: {
        paddingTop: "56px"
    },
  },
});
