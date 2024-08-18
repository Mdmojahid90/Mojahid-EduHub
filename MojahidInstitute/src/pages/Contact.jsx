function Contact() {
  return (
    <>
      <section className="section-contact">
        <div className="container">
          <h2 className="common-heading">Contact Us</h2>
        </div>
        <div className="container grid grid-two--cols">
          <div className="contact-div">
            <form>
              <div className="grid grid-two--cols mb-3">
                <div>
                  <label htmlFor="username">Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject">Subject</label>
                <input type="text" placeholder="Enter main title" />
              </div>
              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="20"
                  cols="50"
                ></textarea>
              </div>
              <div className="btn-div">
                <button className="btn">Send Message</button>
              </div>
            </form>
          </div>
          <div className="location-div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56681091402!2d77.46578377998104!3d12.95428001872109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1723818860494!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
