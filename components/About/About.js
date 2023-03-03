import Image from "next/image"

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
                 <Image src="/main-image.svg" alt="banner image" width={450} height={450} className="about__image"/>
              </div>
          </div>
          <div className="col-12 col-md-6">
          <div className="about__content mt-5">
            <h2>About Me</h2>
              <p className="mt-4 mb-4">Salvia tousled chambray, shoreditch retro cliche dreamcatcher coloring book roof party keffiyeh small batch pork belly actually mlkshk shaman. Stumptown typewriter you probably haven't heard of them pork belly dreamcatcher umami woke, chambray snackwave craft beer. You probably haven't heard of them slow-carb trust fund thundercats bespoke live-edge forage echo park artisan coloring book. Semiotics af tumblr, health goth viral iPhone cold-pressed ugh kogi fanny pack. Photo booth 3 wolf moon narwhal, marfa lumbersexual taiyaki biodiesel cloud bread slow-carb enamel pin stumptown taxidermy food truck 8-bit mustache. Pickled next level vaporware, brooklyn af sriracha hoodie try-hard flannel slow-carb raw denim.</p>
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
