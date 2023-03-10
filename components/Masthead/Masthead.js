import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"

const Masthead = ({ setting }) => {

  const { firstLine, name, thirdLine, mastheadParagraph, github, linkedin } = setting.fields
  return (
    <section className="masthead pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mt-5">
              <p>{firstLine}</p>
              <h1>{name}</h1>
              <p>{thirdLine}</p>
              <p className="w-75">{mastheadParagraph}</p>
              <Link href="#contact" ><button className="main__btn mt-3 mb-3">CONTACT ME</button></Link>
              <div className="mb-1">
                <Link href={github} target="_blank">
                  <FaGithub
                    className="m-2 masthead__socails"
                  />
                </Link>
                <Link href={linkedin} target="_blank">
                  <FaLinkedin
                    className="m-2 masthead__socails"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
              <Image className="masthead__image" src="/main-image.svg" alt="banner image" width={330} height={330} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Masthead
