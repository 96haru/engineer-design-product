import { Colors } from "@/styles/colors";
import { style } from "@vanilla-extract/css";

export const Pagetitle_wrappper = style({
  minHeight: "240px",
  height: "15dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const PageTitle_title = style({
  // fontFamily: "var(--font-archivo_black)",
  borderBottom: `solid 4px ${Colors.color.LinkButton.light}`
});
