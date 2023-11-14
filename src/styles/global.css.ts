import { globalStyle } from "@vanilla-extract/css";
import { Colors } from "./colors";
import { mediaQueryScreen } from "./queries";

globalStyle("body", {
  fontFamily: "var(--font-roboto)",
  backgroundColor: Colors.background.body.light,
  color: Colors.color.main_text.light,
});

globalStyle("p, button", {
  fontSize: "small",
  fontWeight: "normal",

  "@media": {
    [mediaQueryScreen("md")]: {
      fontSize: "medium",
    },
  },
});

globalStyle("h2", {
  fontSize: "large",
  fontWeight: "bold",

  "@media": {
    [mediaQueryScreen("md")]: {
      fontSize: "x-large",
    },
  },
});

globalStyle("h1", {
  fontSize: "x-large",
  fontWeight: "bolder",

  "@media": {
    [mediaQueryScreen("md")]: {
      fontSize: "xx-large",
    },
  },
});

globalStyle("body button", {
  cursor: "pointer",
});
