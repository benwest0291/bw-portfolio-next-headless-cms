import Image from "next/image"

const About = ({ setting }) =>{

  const { aboutHeading, aboutParagraph, skills } = setting.fields
  return (
    <section className="about" id="about">
      <div className="container">
          <div className="row">
             <div className="col-12 col-md-6">
                <div className="d-flex justify-content-center">
              <Image src="/about.svg" alt="banner image" width={385} height={385} className="about__image mt-5"/>
                </div>
              </div>
              <div className="col-12 col-md-6">
                  <div className="about__content mt-4">
                      <h2>{ aboutHeading }</h2>
                      <div className="about__line mb-4"></div>
                      <p className="mt-4 mb-4">{ aboutParagraph }</p>
                      <ul className=" about__skills d-flex mb-5 flex-wrap">
                          {skills.map(skill => (
                            <li key={skill}>{skill}</li>
                          ))}
                      </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
   )
}

export default About
