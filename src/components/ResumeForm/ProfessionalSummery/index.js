import React from "react";
import "./index.scss";

function ProfessionalSummeryInternal() {
  return (
    <textarea id="professional-summary" className='form-control' rows="5" cols="40"></textarea>
  );
}

function ProfessionalSummery() {
  return (
    <div className='mb-5'>
      <div className="mb-3">
        <h2>Professional Summary</h2>
      </div>
      <ProfessionalSummeryInternal />
    </div>
  );
}

export default ProfessionalSummery;