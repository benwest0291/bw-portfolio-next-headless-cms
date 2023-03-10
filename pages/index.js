import Masthead from "@/components/Masthead/Masthead";
import About from "../components/About/About"
import Service from "../components/Services/Service"
import Contact from "../components/Contact/Contact"
import FeaturedProject from "@/components/Projects/FeaturedProject";
import { createClient } from "contentful";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'homepage' })

  return {
    props: { homepage: res.items },
    revalidate: 10
  }
}

export default function Home({ homepage }) {

  return (
    <>
      {homepage.map(setting => (
        <Masthead
          key={setting.sys.id}
          setting={setting}
        />
      ))}
      <main>
        {homepage.map(setting => (
          <About
            key={setting.sys.id}
            setting={setting}
          />
        ))}
        {homepage.map(setting => (
          <Service
            key={setting.sys.id}
            setting={setting}
          />
        ))}
        {homepage.map(setting => (
          <FeaturedProject
            key={setting.sys.id}
            setting={setting}
          />
        ))}
        {homepage.map(setting => (
          <Contact
            key={setting.sys.id}
            setting={setting}
          />
        ))}
      </main>
    </>
  )
}
