import { FaGithub, FaLinkedin } from "react-icons/fa";

const Masthead = () => {
  return (
    <div className="masthead">
      <div className="container">
      <div className="row">
          <div className="col-12 col-md-6">
            <p>Hi, my name is</p>
            <h1>Ben</h1>
            <p>I build things for the web.</p>
            <p> I’m a front end developer specializing in building (and occasionally designing) exceptional digital experiences. </p>
            <button>Contact me</button>
              <FaGithub
                  className=""
                />
                <FaLinkedin
                  className=""
                />
          </div>
          <div className="col-12 col-md-6">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Masthead
