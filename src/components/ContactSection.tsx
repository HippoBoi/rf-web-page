import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section contact-column-container">
      <div className="contact-container">
        <div className="contact-texts">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-description">
            Feel free to get in contact with me directly!
          </p>
        </div>

        <div className="contact-info-container">
          <div className="contact-texts">
            <h2 className="contact-subtitle">Email</h2>
            <p className="contact-description">
              tagrifavc@gmail.com
            </p>
          </div>

          <div className="contact-texts">
            <h2 className="contact-subtitle">Discord</h2>
            <p className="contact-description">
              @cheesyhippo
            </p>
          </div>

          <div className="contact-texts">
            <h2 className="contact-subtitle">Fax</h2>
            <p className="contact-description">
              +1 (555) 5231-1503 432673 982617
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
