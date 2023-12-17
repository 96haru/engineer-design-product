import { Colors } from "@/styles/colors";
import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "fit-content",
  margin: "1rem 0",
  padding: "0.5rem 1.2rem",
  borderRadius: "100vh",
  background: `linear-gradient(120deg, ${Colors.color.LinkButton.gradient.start}, ${Colors.color.LinkButton.gradient.end})`,
  border: `solid 1px ${Colors.color.main_border.light}`,

  "@media": {
    [mediaQueryScreen("md")]: {
      margin: "2rem 0",
      padding: "0.5rem 1.2rem",
    },
  },
});

export const button = style({
  display: "flex",
  alignItems: "center",
});
