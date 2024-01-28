import { Colors } from "@/styles/colors";
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
  textAlign: "center",
});

export const card_wrapper = style({
  display: "flex",
  height: "120px",
  borderRadius: "0.6rem",
  overflow: "hidden",
  margin: "0.6rem",
  border: `solid 2px ${Colors.color.sub_border.light}`,

  "@media": {
    [mediaQueryScreen("md")]: {
      margin: "0.8rem",
      borderRadius: "0.8rem",
    },
  },
});

export const card_image = style({
  width: "30%",
  objectFit: "cover",
  borderRight: `solid 2px ${Colors.color.sub_border.light}`,
});

export const card_content = style({
  width: "70%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
