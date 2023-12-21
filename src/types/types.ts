export interface SpecProject {
    tag: Tag
    title: string
    descriprion: string
    bgImage: string
    button: Button
    slides: Slide[]
}
export interface Slide {
    name: string
    image: string
    link: string
    description?: string
}
export interface Button {
    text: string
    color?: string
    link?: string
    bgColor?: string
}
export interface Tag {
    name: string
    icon?: string
    link: string
}
