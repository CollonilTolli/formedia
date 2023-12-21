import type { Slide } from "@/types/types"
import css from "./ProjectItem.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function ProjectItem({ content }: { content: Slide }) {
    return (
        <Link href={content.link} className={css.projectItem}>
            <div className={css.projectItem_image}>
                <Image
                    src={content.image}
                    alt={content.name}
                    width={193}
                    height={344}
                />
            </div>
            <div className={css.projectItem_container}>
                <div className={css.title}>{content.name}</div>
                <div className={css.description}>
                    <div className={css.description_container}>
                        {content.description}
                    </div>
                </div>
            </div>
        </Link>
    )
}
