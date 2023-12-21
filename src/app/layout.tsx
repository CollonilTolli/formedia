import type { Metadata } from "next"
import "@/globalsCss/normalize.css"
import "@/globalsCss/globals.scss"

export const metadata: Metadata = {
    title: "Тестовое задание Исаев Н.К.",
    description: "Клиентская часть",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
