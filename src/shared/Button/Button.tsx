import type { Button } from "@/types/types"
import css from "./Button.module.scss"
import Link from "next/link"

export default function Button({ content }: { content: Button }) {
    return !!content.link ? (
        <Link
            className={css.Button}
            draggable={false}
            href={content.link}
            style={{ color: content.color, background: content.bgColor }}
        >
            {content.text}
        </Link>
    ) : (
        <button
            className={css.Button}
            draggable={false}
            style={{ color: content.color, background: content.bgColor }}
        >
            {content.text}
        </button>
    )
}
