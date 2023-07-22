function Profile({professionalSummary}) {
  return (
    <div className="profile">
      <div className="profile-heading">
        {
          (professionalSummary.description.length > 0) ? <h2>Profile</h2> : null
        }
      </div>
      <div className="profile-description">
        <p>
          {professionalSummary.description}
        </p>
      </div>
    </div>
  )
}

export default Profile;