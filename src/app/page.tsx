import ProjectComponent from "@/widgets/ProjectComponent/ProjectComponent"
import { specProject } from "@/MockData/MockData"

export default function Page() {
    return (
        <>
            <ProjectComponent data={specProject} />
        </>
    )
}
