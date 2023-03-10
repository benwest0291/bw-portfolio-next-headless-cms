import ServiceCard from "./ServiceCard"
const Service = ({ setting }) => {

  const { servicesHeading, servicesTitle1, servicesParagraph1, servicesTitle2, servicesParagraph2, servicesTitle3, servicesParagraph3 } = setting.fields

  return (
    <section className="services pb-5" id="freelance">
      <div className="container">
        <h2 className="pt-4 mb-4">{servicesHeading}</h2>
        <div className="services__line mb-5"></div>
        <div className="row">
          <div className="col-12 col-md-4 mb-5">
            <ServiceCard
              heading={servicesTitle1}
              paragraph={servicesParagraph1}
            />
          </div>
          <div className="col-12 col-md-4 mb-5">
            <ServiceCard
              heading={servicesTitle2}
              paragraph={servicesParagraph2}
            />
          </div>
          <div className="col-12 col-md-4 mb-5">
            <ServiceCard
              heading={servicesTitle3}
              paragraph={servicesParagraph3}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
