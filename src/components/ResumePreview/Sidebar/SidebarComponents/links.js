import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Links() {
  return (
    <div className="links">
      <h2>Links</h2>
      <ul>
        <li><a href="https://sahilsaini.netlify.app">My Portfolio <FontAwesomeIcon icon={ faLink}/></a></li>
        <li><a href="https://www.linkedin.com/in/sahil-saini-977870282">LinkedIn <FontAwesomeIcon icon={ faLink}/></a></li>
        <li><a href="https://github.com/recker624">GitHub <FontAwesomeIcon icon={ faLink}/></a></li>
      </ul>
    </div>
  );
}

export default Links;