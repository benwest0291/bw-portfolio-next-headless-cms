
import Image from "next/image"
import Link from "next/link"
import Hamburger from 'hamburger-react'
import { useState } from "react"

const Navbar = () => {
  const [ isOpen, setOpen ] = useState(false)

   function navBar() {
    setOpen(isOpen => !isOpen)
  }

  let toggleMenu = isOpen ? 'active' : ' '

  return (
    <>
        <nav className="navbar">
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
                  <li className="nabar__link" ><Link href="/">About</Link></li>
                  <li className="nabar__link" ><Link  href="/">Experience</Link></li>
                  <li className="nabar__link" ><Link href="/">Services</Link></li>
                  <li className="nabar__link" ><Link href="/">Projects</Link></li>
                  <li className="nabar__link" ><Link href="/">Contact</Link></li>
                  <li className="nabar__link resume" ><Link href="/">Resume</Link></li>
                </ul>
              </div>
            </div>
        </nav >
    </>
  )
}

export default Navbar
