import ContactForm from "./ContactForm"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = ({ setting }) => {

  const { getInTouch, contactNumber, email, getInTouchInfomation } = setting.fields

  return (
    <section className="contact pt-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6" data-aos="fade-right">
            <h2 className="mb-4">{getInTouch}</h2>
            <div className="contact__line mb-5"></div>
            <ul className="contact__list">
              <li className="mb-3"><FaPhoneAlt className="contact__phone__logo" /><span className="contact__number">{contactNumber}</span></li>
              <li><FaEnvelope className="contact__mail__logo" /><span className="contact__email">{email}</span></li>
            </ul>
            <p className="pb-5">{getInTouchInfomation}</p>
          </div>
          <div className="col-12 col-md-6 pb-5" data-aos="fade-left">
            <div className="d-flex justify-content-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
