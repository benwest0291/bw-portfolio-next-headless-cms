import Image from "next/image"
import Hamburger from 'hamburger-react'
import { useState } from "react"
import Link from "next/link"


const Navbar = () => {
  const [ isOpen, setOpen ] = useState(false)


   function navBar() {
    setOpen(isOpen => !isOpen)
   }

let toggleMenu = isOpen ? 'active' : null

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
                <ul className={ `navbar__list  mt-4 ${ toggleMenu}`}>
                  <li onClick={ navBar } className="nabar__link mt-2" ><Link className="link" href="#about">About</Link></li>
                  <li onClick={ navBar } className="nabar__link mt-2" ><Link className="link" href="#services">Services</Link></li>
                  <li onClick={ navBar } className="nabar__link mt-2" ><Link className="link"  href="#projects">Projects</Link></li>
                  <li onClick={ navBar } className="nabar__link mt-2" ><Link className="link" href="#contact">Contact</Link></li>
                  <li onClick={ navBar } className="nabar__link resume" ><Link href="/files/bens-cv-2022.pdf" target="_blank"><button className="main__btn">RESUME</button></Link></li>
                </ul>
              </div>
            </div>
        </nav >
    </>
  )
}

export default Navbar
