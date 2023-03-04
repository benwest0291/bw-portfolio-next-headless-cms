import Image from "next/image"
import Link from "next/link"
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const PageNotFound = () => {
  const router = useRouter()

   useEffect(() => {
      setTimeout(() => {
        router.push('/')
      }, 5000);
   }, [])

  return (
    <div className="not__found">
       <h2 className="text-center h1 mt-3">404</h2>
       <div className="not__found__infomation">
       <p>You will be auto directed back to the homepage</p>
       <Link className="text-center not__found__link" href="/">Back to the homepage</Link>
       <Image src="/404.svg" width={500} height={500} alt="404" />
       <h2 className="text-center h1 mb-3 mt-3">Ooopps</h2>
      </div>
    </div>
  )
}

export default PageNotFound
