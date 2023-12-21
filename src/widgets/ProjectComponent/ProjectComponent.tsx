import type { SpecProject } from "@/types/types"
import css from "./ProjectComponent.module.scss"
import ProjectItem from "@/features/ProjectItem/ProjectItem"
import ProjectSlider from "../../entities/ProjectSlider/ProjectSlider"
import cn from "classnames"
import Image from "next/image"
import TextBlock from "@/features/TextBlock/TextBlock"
import { SwiperSlide } from "swiper/react"

export default function ProjectComponent({ data }: { data: SpecProject }) {
    return (
        <div className={css.project}>
            <div className={css.project_image}>
                <Image
                    src={data.bgImage}
                    alt={data.title}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className={cn(css.project_container, "container")}>
                <TextBlock data={data} />
                <ProjectSlider data={data} />
            </div>
        </div>
    )
}
