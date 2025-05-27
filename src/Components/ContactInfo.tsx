const ContactInfo = (type: string, detail: string) => {
  if (type === "EMERGENCY") {
    // Phone number
    return (
      <a href={`tel:${detail.replace(/\s+/g, '')}`} className="hover:underline">
        {detail}
      </a>
    );
  } else if (type === "EMAIL") {
    // Email address
    return (
      <a href={`mailto:${detail}`} className="hover:underline">
        {detail}
      </a>
    );
  } else if (type === "LOCATION") {
    // Address with Google Maps link and embedded map
    const encodedAddress = encodeURIComponent(detail);
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    return (
      <div>
        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {detail}
        </a>
        
      </div>
    );
  } else {
    // Default fallback — plain text
    return detail;
  }
}

export default ContactInfo