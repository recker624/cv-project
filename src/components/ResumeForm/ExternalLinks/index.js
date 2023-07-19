import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import uniqid from 'uniqid';


class ExternalLinks extends React.Component {
  //eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  

  render() {

    const {
        onExternalLinksChange: changeExternalLinks,
        onExternalLinksAdd: addExternalLinks,
        onExternalLinksDelete: deleteExternalLinks,
        externalLinks
      } = this.props;

    return (
      <div className='mb-4'>
        <div className="mb-2">
          <h2>Websites and Social Links</h2>
        </div>
        <div className="externalLinks-list">
          {
            externalLinks.map((link, index) => {
              return (
                <div key={link._id}>
                  <div className="link-data ">
                    <input
                      type="text"
                      value={link.linkName}
                      data-type="linkName"
                      onChange={(e) => changeExternalLinks(e, index)}
                      className="form-control my-2"
                      placeholder="Enter Website Name"
                    />
                    <input
                      type="text"
                      value={link.linkURL}
                      data-type="linkURL"
                      onChange={(e) => changeExternalLinks(e, index)}
                      className="form-control my-2"
                      placeholder="Enter Website Link"
                    />  
                  </div>
                  <button
                    onClick={(e) => deleteExternalLinks(e, index)}
                    className="btn btn-white deleteSkillBtn"
                  >
                      <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              );
            })
          }
        </div>
        <div>
          <button onClick={(e) => addExternalLinks(e, uniqid())} className="btn btn-secondary"><FontAwesomeIcon icon={faPlus}/> Add link</button>
        </div>
      </div>
    );
  }
}

export default ExternalLinks;