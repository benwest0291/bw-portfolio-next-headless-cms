import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link"

const ProjectCard = ({ title, info, github, url, skills }) => {
  return (
    <div className="project__card mb-5" id="projects">
      <div className="p-4">
        <div className="d-flex justify-content-between pt-3 pb-3">
          <h5>{title}</h5>
          <div className="d-flex">
            <Link href={github} target="_blank"><FaGithubSquare className="project__card__github" /></Link>
            <Link href={url} target="_blank"><FaExternalLinkAlt className="project__card__link" /></Link>
          </div>
        </div>
        <p>{info}</p>
        <ul className=" about__skills d-flex flex-wrap mt-4">
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
