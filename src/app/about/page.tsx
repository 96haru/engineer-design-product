import clsx from "clsx";

// import * as s from "./page.css"
import * as w from "@/styles/whole.css"
import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function About() {
    return (
        <div className={clsx(w.container)}>
            <PageTitle title="about" />
            <p>Here is about page. sample text sample text sample text. Here is about page. sample text sample text sample text. Here is about page. sample text sample text sample text.</p>
        </div>
    )
}