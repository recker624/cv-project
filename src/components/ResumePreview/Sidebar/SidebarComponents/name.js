function Name({ firstName, lastName }) {
  return (
    <div className="name">
      <p> {firstName + " " + lastName}</p>
      <div className="underline"></div>
    </div>
  );
}

export default Name;