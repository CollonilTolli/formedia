"use client"
import { useSwiper } from "swiper/react"
import css from "./ButtonsSwiper.module.scss"

const SwiperButtonPrev = () => {
    const swiper = useSwiper()
    return (
        <button className={css.button} onClick={() => swiper.slidePrev()}>
            <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.3036 6.55597L10.3094 0.171546C10.5393 -0.057182 10.9121 -0.057182 11.142 0.171546C11.3719 0.400256 11.3719 0.771364 11.142 1.00009L4.55865 7.00001L11.1414 12.9999C11.3713 13.2286 11.3713 13.5997 11.1414 13.8285C10.9116 14.0572 10.5387 14.0572 10.3088 13.8285L3.30301 7.44403C3.18048 7.3221 3.12795 7.16045 3.13613 7.00059C3.12852 6.84013 3.18103 6.6785 3.3036 6.55597Z"
                    fill="white"
                />
            </svg>
        </button>
    )
}
const SwiperButtonNext = () => {
    const swiper = useSwiper()
    return (
        <button className={css.button} onClick={() => swiper.slideNext()}>
            <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.6964 6.55597L4.6906 0.171546C4.4607 -0.057182 4.08786 -0.057182 3.85797 0.171546C3.62807 0.400256 3.62807 0.771364 3.85797 1.00009L10.4414 7.00001L3.85855 12.9999C3.62866 13.2286 3.62866 13.5997 3.85855 13.8285C4.08845 14.0572 4.46129 14.0572 4.69116 13.8285L11.697 7.44403C11.8195 7.3221 11.8721 7.16045 11.8639 7.00059C11.8715 6.84013 11.819 6.6785 11.6964 6.55597Z"
                    fill="white"
                />
            </svg>
        </button>
    )
}

export default function SwiperButtons() {
    return (
        <div className={css.Buttons}>
            <SwiperButtonPrev />
            <SwiperButtonNext />
        </div>
    )
}
