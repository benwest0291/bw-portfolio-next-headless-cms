import Image from "next/image"
import Hamburger from 'hamburger-react'
import { useState } from "react"
import { Link } from 'react-scroll';

const Navbar = () => {
  const [ isOpen, setOpen ] = useState(false)

   function navBar() {
    setOpen(isOpen => !isOpen)
  }

  let toggleMenu = isOpen ? 'active' : ' '

  return (
    <>
        <nav className="navbar pt-2 pb-4">
          <div className="container">
            <div className="row mt-4">
              <div className="col-12 col-md-6">
                  <Link className="mb-3" href="/"><Image alt="logo" src="/logo.png" width={200} height={30} /></Link>
              </div>
            </div>
          <div className="col-12 col-md-6">
              <div className="d-flex justify-content-end ">
                <Hamburger onClick={ navBar } toggled={ isOpen } toggle={ setOpen } />
              </div>
                <ul className={ `navbar__list  mt-4 ${ toggleMenu }`}>
                  <li className="nabar__link mt-2" ><Link className="link"  to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                  <li className="nabar__link mt-2" ><Link className="link" to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Link></li>
                  <li className="nabar__link mt-2" ><Link className="link"  to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                  <li className="nabar__link mt-2" ><Link className="link" to="contact"  spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                  <li className="nabar__link resume" ><Link href="/public/files/ben-west-cv.pdf"><button className="main__btn">RESUME</button></Link></li>
                </ul>
              </div>
            </div>
        </nav >
    </>
  )
}

export default Navbar
