import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="footer__text">DESIGNED AND DEVELOPED WITH ❤️ BY BEN WEST</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="footer__socials">
              <FaGithub
                className="footer__socail-logo footer__socail-spacer"
              />
              <FaLinkedin
                className="footer__socail-logo"
              />
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer
