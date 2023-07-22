function Details({ email, phone, country, city }) {
  
  return (
    <div className="details">
      {
        (email || phone || country || city) ? <h2>Details</h2> : null
      }
      <ul>
        {
          email ? <li>{email}</li> : null
        }
        {
          phone ? <li>{phone[0].toUpperCase() + phone.slice(1)}</li> : null
        }
        {
          city ? <li>{city[0].toUpperCase() + city.slice(1)}</li> : null
        }
        {
          country ? <li>{country[0].toUpperCase() + country.slice(1)}</li> : null
        }
      </ul>
    </div>
  );
}

export default Details;