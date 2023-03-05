import Image from "next/image"
import ProjectCard from "./ProjectCard"

const FeaturedProject = ({ setting }) => {
  const { projects, projectTitle, projectInfo, githubUrl, projectLink, projectSkills } = setting.fields
  return (
    <section className="project pb-5">
      <div className="container">
        <h2 className="mt-5">{projects}</h2>
        <div className="project__line mb-5"></div>
        <div className="green__line mb-4"></div>
        <Image className="project__image" src="/project.png" width={700} height={400} alt="project image" />
          <div className="project__space">
            <ProjectCard
              title={ projectTitle }
              info={ projectInfo }
              github={ githubUrl }
              url={ projectLink }
              skills= { projectSkills }
            />
          </div>
      </div>
    </section>
  )
}

export default FeaturedProject
