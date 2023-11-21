import { Colors } from "@/styles/colors";
import { style } from "@vanilla-extract/css";

export const Footer_wrapper = style({
  width: "100%",
  background: Colors.background.footer.light,
  height: "20dvh",
  color: Colors.color.footer_text.light,
  marginTop: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
});
