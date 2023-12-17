import clsx from "clsx";
import * as s from "./Footer.css";
import { TextLink } from "../TextLink/TextLink";

export const Footer = () => {
  return (
    <div className={clsx(s.Footer_wrapper)}>
      <p>copyright&copy;2023&nbsp;</p>
      <TextLink href="https://www.rhappy.dev" blank={true}>
        rhappy
      </TextLink>
    </div>
  );
};
