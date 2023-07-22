import shiba from '../../../../assets/images/shiba.jpg';

function Photo({ photo }) {
  if (photo !== '') {
    return (
      <div className="photo">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
        <img src={photo} alt="Image" />
      </div>
    );
  } else {
    return (
      <div className="photo">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
        <img src={ shiba } alt="Image" />
      </div>
    );
  }
}

export default Photo;