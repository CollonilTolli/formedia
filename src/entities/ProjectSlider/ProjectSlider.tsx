"use client"
import type { SpecProject } from "@/types/types"
import css from "./ProjectSlider.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import ProjectItem from "@/features/ProjectItem/ProjectItem"
import "swiper/css"
import "./ProjectSlider.scss"
import SwiperButtons from "@/shared/ButtonsSwiper/ButtonsSwiper"

export default function ProjectSlider({ data }: { data: SpecProject }) {
    return (
        <div className={css.ProjectSlider}>
            <Swiper
                spaceBetween={16}
                slidesPerView={5}
                pagination={{
                    type: "progressbar",
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2.2,
                    },
                    767: {
                        slidesPerView: 5.3,
                    },
                    1023: {
                        slidesPerView: 6,
                    },
                    1439: {
                        slidesPerView: 5.5,
                    },
                }}
                loop={true}
                modules={[Pagination]}
            >
                {data.slides.map((el) => (
                    <SwiperSlide key={el.name}>
                        <ProjectItem content={el} />
                    </SwiperSlide>
                ))}
                <div className={css.navigation}>
                    <SwiperButtons />
                </div>
            </Swiper>
        </div>
    )
}
