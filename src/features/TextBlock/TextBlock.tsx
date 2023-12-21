import type { SpecProject } from "@/types/types"
import css from "./TextBlock.module.scss"
import Tag from "../../shared/Tag/Tag"
import Button from "../../shared/Button/Button"

export default function TextBlock({ data }: { data: SpecProject }) {
    return (
        <div className={css.textBlock}>
            <Tag content={data.tag} />
            <h1 className={css.textBlock_title}>{data.title}</h1>
            <p className={css.textBlock_description}>{data.descriprion}</p>
            <Button content={data.button} />
        </div>
    )
}
