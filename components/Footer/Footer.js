import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link"

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
                 <Link href="https://github.com/benwest0291" target="_blank">
                    <FaGithub
                      className="footer__socail-logo footer__socail-spacer"
                      />
                  </Link>
                  <Link href="https://www.linkedin.com/in/ben-west-020691/" target="_blank">
                    <FaLinkedin
                      className="footer__socail-logo"
                      />
                  </Link>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
