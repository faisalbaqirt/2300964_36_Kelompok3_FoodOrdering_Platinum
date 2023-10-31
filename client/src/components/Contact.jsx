function Contact() {
  return (
    <div id="contact" className="text-center">
      <h2>Contact Us</h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Reservations</h3>
          <div className="contact-item">
            <p>Please call or text</p>
            <p>(+62) 822 1854 2511</p>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Address</h3>
          <div className="contact-item">
            <p>Komplek Bandung Indah Raya</p>
            <p>C 10 No. 1</p>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Opening Hours</h3>
          <div className="contact-item">
            <p>Weekday: 09:00 AM - 07:30 PM</p>
            <p>Weekend: 09:00 AM - 09:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
