import type { Tag } from "@/types/types"
import css from "./Tag.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function Tag({ content }: { content: Tag }) {
    return (
        <div className={css.tag}>
            <Link href={content.link} title={content.name}>
                {!!content.icon && (
                    <Image src={content.icon} alt="" width={12} height={18} />
                )}
                {content.name}
            </Link>
        </div>
    )
}
