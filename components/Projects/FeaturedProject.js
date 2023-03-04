import Image from "next/image"
import ProjectCard from "./ProjectCard"

const FeaturedProject = () => {
  return (
    <section className="project pb-5">
      <div className="container">
        <h2 className="mt-5 mb-4">Projects</h2>
        <Image className="project__image" src="/project.png" width={700} height={400} alt="project image" />
          <div className="project__space">
              <ProjectCard />
          </div>
      </div>
    </section>
  )
}

export default FeaturedProject
