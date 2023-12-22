import { SpecProject } from "@/types/types"
import ProjectComponent from "@/widgets/ProjectComponent/ProjectComponent"
import { specProject } from "@/MockData/MockData"
import axios from "axios"

async function getData() {
    const res = await fetch("http://127.0.0.1/api/v1/specproject/getproject")
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res ? res.json() : specProject
}
export default async function Page() {
    const data = await getData()
    return (
        <>
            <ProjectComponent data={data} />
        </>
    )
}
