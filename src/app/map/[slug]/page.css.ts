import { Colors } from "@/styles/colors";
import { mediaQueryScreen } from "@/styles/queries";
import { globalStyle, style } from "@vanilla-extract/css";

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
  width: "60%",
  objectFit: "cover",
  border: "solid 1px black",
  height: "auto",
  margin: "0 auto",
  display: "block",
});

export const country_name = style({
  textAlign: "center",
  paddingBottom: "2rem",
  paddingTop: "0.6rem",
  fontWeight: "bold",

  "@media": {
    [mediaQueryScreen("md")]: {
      paddingBottom: "3rem",
      paddingTop: "1.0rem",
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

export const content_body = style({});

globalStyle(`${content_body} h2`, {
  borderBottom: `solid 1px ${Colors.color.main_border.light}`,
  marginBottom: "1rem",
});
