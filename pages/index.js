import Masthead from "@/components/Masthead/Masthead";
import About from "../components/About/About"
import Service from "../components/Services/Service"
import Contact from "../components/Contact/Contact"

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <About />
        <Service />
        <Contact />
      </main>
    </>
  )
}
