import Image from "next/image"
import Link from "next/link"

const PageNotFound = () => {
  return (
    <div className="not__found">
      <div className="not__found__infomation">
         <h2 className="text-center h1 mt-3">404</h2>
        <Image src="/404.svg" width={500} height={500} alt="404" />
        <h2 className="text-center h1 mb-3 mt-3">Ooopps</h2>
        <Link className="text-center" href="/">Back to the homepage</Link>
      </div>
    </div>
  )
}

export default PageNotFound
