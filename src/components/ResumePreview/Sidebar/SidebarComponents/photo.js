import myImage from '../../../../assets/images/my-image.jpg';

function Photo() {
  return (
    <div className="photo">
      {/*eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={ myImage } alt="profile-photo" />
    </div>
  )
}

export default Photo;