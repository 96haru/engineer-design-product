import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const map_wrapper = style({
  paddingTop: "36px",
  width: "100%",

  "@media": {
    [mediaQueryScreen("md")]: {
      paddingTop: "56px",
    },
  },
});

export const content_wrapper = style({
})

export const flag_image = style({
  width: "100%",
  objectFit: "cover",
  border: "solid 1px black",
  height: "auto",
});
