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

export const content_wrapper = style({
  position: "relative"
});
export const flag_image = style({
  width: "70%",
  objectFit: "cover",
  // border: "solid 1px black",
  height: "auto",
  margin: "3rem auto 0 auto",
  display: "block",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
});

export const country_name = style({
  textAlign: "center",
  paddingBottom: "2rem",
  paddingTop: "0.6rem",

  "@media": {
    [mediaQueryScreen("md")]: {
      paddingBottom: "3rem",
      paddingTop: "1.0rem",
    },
  },
});



export const content_body = style({});

globalStyle(`${content_body} h2`, {
  borderBottom: `solid 1px ${Colors.color.main_border.light}`,
  marginBottom: "1rem",
  marginTop: "1rem",
});

export const table = style({
  width: "100%",
});

globalStyle(`${table} tr`, {});

export const from_wiki = style({
  textAlign: "right",
});
