import Image from "next/image"
import ProjectCard from "./ProjectCard"

const FeaturedProject = ({ setting }) => {
  const { projects, projectTitle, projectInfo, githubUrl, projectLink, projectSkills } = setting.fields
  return (
    <section className="project pb-5">
      <div className="container">
        <h2 className="mt-5 mb-4">{ projects }</h2>
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
