function Photo({photo}) {
  return (
    <div className="photo">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
      {photo && <img src={photo} alt="Image" />}
    </div>
  )
}

export default Photo;