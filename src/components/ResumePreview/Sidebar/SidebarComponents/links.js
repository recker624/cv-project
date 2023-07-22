import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Links({ externalLinks }) {
  
  return (
    <div className="links">
      {
        (externalLinks.length !== 0) ? <h2>Links</h2> : null
      }
      <ul>{
        externalLinks.map((link, index) => {
          return (
            <li key={link._id + index}><a href={link.linkURL}> {link.linkName} <FontAwesomeIcon icon={ faLink}/></a></li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Links;