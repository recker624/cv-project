function Occupation({ jobTitle }) {
  if (jobTitle.length === 0) return;
  return (
    <div className="occupation">
      {jobTitle.toUpperCase()}
    </div>
  );
}

export default Occupation;