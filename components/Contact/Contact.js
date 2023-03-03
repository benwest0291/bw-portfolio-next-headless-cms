import ContactForm from "./ContactForm"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="mb-5">Get in touch</h2>
            <ul className="contact__list">
              <li className="mb-3"><FaPhoneAlt className="contact__phone__logo" /><span className="contact__number">07712 675 124</span></li>
              <li><FaEnvelope className="contact__mail__logo" /><span className="contact__email">Benwest0291@outlook.com</span></li>
            </ul>
            <p className="pb-5">Salvia tousled chambray, shoreditch retro cliche dreamcatcher coloring book roof party keffiyeh small batch pork belly actually mlkshk shaman. Stumptown typewriter you probably haven't heard of them pork belly dreamcatcher umami woke, chambray snackwave craft beer. You probably haven't heard of them slow-carb trust fund thundercats bespoke live-edge forage echo park artisan coloring book. Semiotics af </p>
          </div>
           <div className="col-12 col-md-6 pb-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
