import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Masthead = ({ setting }) => {

  const { firstLine, name, thirdLine, mastheadParagraph } = setting.fields
  return (
    <section className="masthead">
      <div className="container">
      <div className="row">
          <div className="col-12 col-md-6">
            <div className="mt-5">
              <p>{ firstLine }</p>
              <h1>{ name }</h1>
              <p>{ thirdLine }</p>
              <p className="w-75">{ mastheadParagraph  }</p>
                <button className="main__btn mt-3 mb-3">CONTACT ME</button>
                <div className="">
                  <FaGithub
                      className="m-2 masthead__socails"
                    />
                    <FaLinkedin
                      className="m-2 masthead__socails"
                    />
              </div>
            </div>
            </div>
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
              <Image src="/main-image.svg" alt="banner image" width={450} height={450} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Masthead
