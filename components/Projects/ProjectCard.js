import { FaGithubSquare, FaExternalLinkAlt} from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="project__card mb-5">
        <div className="p-4">
              <div className="d-flex justify-content-between pt-3 pb-3">
                <h5>DAWN DRIVING TUITION</h5>
                  <div className="d-flex">
                    <FaGithubSquare className="project__card__github" />
                    <FaExternalLinkAlt className="project__card__link" />
                   </div>
               </div>
            <p>I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore. Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth.</p>
           <ul className=" about__skills d-flex flex-wrap mt-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>BOOTSTRAP</li>
                <li>JAVASCRIPT</li>
                <li>REACT.JS</li>
                <li>NEXT.JS</li>
                <li>FIGMA</li>
                <li>HEADLESS CMS</li>
              </ul>
        </div>
    </div>
  )
}

export default ProjectCard
