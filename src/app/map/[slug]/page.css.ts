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

export const content_wrapper = style({});

export const flag_image = style({
  width: "100%",
  objectFit: "cover",
  border: "solid 1px black",
  height: "auto",
});

export const country_name = style({
  textAlign: "center",
  padding: "2rem",
  fontWeight: "bold",

  "@media": {
    [mediaQueryScreen("md")]: {
      padding: "3rem",
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

// export const 