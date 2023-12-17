import { Colors } from "@/styles/colors";
import { globalStyle, style } from "@vanilla-extract/css";

export const table = style({
  width: "100%",
});

globalStyle(`${table} tr`, {
  borderBottom: `solid 1px ${Colors.color.main_border.light}`,
});

export const about_body = style({
})

globalStyle(`${about_body} h1, h2`, {
  borderBottom: `solid 1px ${Colors.color.main_border.light}`,
  marginBottom: "1rem"
});
