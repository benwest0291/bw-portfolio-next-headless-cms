import ServiceCard from "./ServiceCard"
const Service = () => {
  return (
    <section className="services pb-5">
      <div className="container">
        <h2 className="mb-4 pt-4">Services</h2>
        <div className="row">
        <div className="col-12 col-md-4 mb-5">
          <ServiceCard />
        </div>
          <div className="col-12 col-md-4 mb-5">
          <ServiceCard />
        </div>
          <div className="col-12 col-md-4 mb-5">
          <ServiceCard />
          </div>
          </div>
      </div>
    </section>
  )
}

export default Service
