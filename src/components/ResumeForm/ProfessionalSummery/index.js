import React from "react";

class ProfessionalSummery extends React.Component {
  //eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {

    const { onProfessionalSummaryChange: changeProfessionalSummary, professionalSummary } = this.props;

    return (
      <div className='mb-5 professional-summary'>
        <div className="mb-3">
          <h2>Professional Summary</h2>
        </div>
        <textarea
          onChange={changeProfessionalSummary}
          value={professionalSummary.description}
          id="professional-summary"
          className='form-control'
          rows="5"
        />
      </div>
    );   
  }

}

export default ProfessionalSummery;