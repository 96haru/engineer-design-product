import { Colors } from "@/styles/colors";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  backgroundColor: Colors.background.HomeSection.light,
  margin: "2rem 0px",
})

export const UsageSection_title = style({
  borderBottom: `solid 1px ${Colors.color.main_border.light}`,
});