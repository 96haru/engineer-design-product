import clsx from "clsx"
import * as s from "./PageTitle.css"

type PageTitle_Props = {
    title: string
}

export const PageTitle = (props: PageTitle_Props) => {
    return (
        <div className={clsx(s.Pagetitle_wrappper)}>
            <h1 className={clsx(s.PageTitle_title)}>{props.title}</h1>
        </div>
    )
}