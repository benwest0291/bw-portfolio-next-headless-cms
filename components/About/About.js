import Image from "next/image"

const About = ({ setting }) =>{

  const { aboutHeading, aboutParagraph } = setting.fields
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
                 <Image src="/main-image.svg" alt="banner image" width={400} height={400} className="about__image"/>
              </div>
          </div>
          <div className="col-12 col-md-6">
          <div className="about__content mt-5">
              <h2>{ aboutHeading }</h2>
              <p className="mt-4 mb-4">{ aboutParagraph }</p>
              <ul className=" about__skills d-flex mb-5 flex-wrap">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>BOOTSTRAP</li>
                <li>JAVASCRIPT</li>
                <li>REACT.JS</li>
                <li>NEXT.JS</li>
                <li>FIGMA</li>
                <li>WORDPRESS</li>
                <li>SHOPIFY</li>
                <li>HEADLESS CMS</li>
              </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
