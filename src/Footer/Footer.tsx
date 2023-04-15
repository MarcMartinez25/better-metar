import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="container text-center my-2 py-4">
      <ul className="list-none flex justify-center text-zinc-400">
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li className="px-2">
          Developed By <a href="http://marcomartinez.dev" target="_blank" className="hover:text-blue-600">Marco Martinez</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
        </li>
      </ul>
    </div>
  )
}

export default Footer