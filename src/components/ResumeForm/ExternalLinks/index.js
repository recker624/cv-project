import React from "react";
import "./index.scss"

function ExternalLinksInternal() {
  return (
    <div>
      <button>+ Add link</button>
    </div>
  );
}

function ExternalLinks() {
  return (
    <div className='mb-5'>
      <div className="mb-3">
        <h2>Websites and Social Links</h2>
      </div>
      <ExternalLinksInternal />
    </div>
  );
}

export default ExternalLinks;