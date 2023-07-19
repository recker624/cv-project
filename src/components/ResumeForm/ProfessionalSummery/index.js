import React from "react";

class ProfessionalSummery extends React.Component {
  //eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='mb-5 professional-summary'>
        <div className="mb-3">
          <h2>Professional Summary</h2>
        </div>
        <textarea id="professional-summary" className='form-control' rows="5" cols="40"></textarea>
      </div>
    );   
  }

}

export default ProfessionalSummery;