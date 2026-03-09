import { useEffect, useRef } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(".contact-animate");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section contact-column-container" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-texts">
          <h2 className="contact-title contact-animate">Contact</h2>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-texts">
          <h2 className="contact-title contact-animate">Hi there</h2>
          <p className="contact-description contact-animate">
            Feel free to get in contact with me directly!
          </p>
        </div>

        <div className="contact-texts">
          <h2 className="contact-subtitle contact-animate">Email</h2>
          <p className="contact-description contact-animate">
            tagrifavc@gmail.com
          </p>
          <h2 className="contact-subtitle contact-animate">Discord</h2>
          <p className="contact-description contact-animate">
            @cheesyhippo
          </p>
          <h2 className="contact-subtitle contact-animate">Fax</h2>
          <p className="contact-description contact-animate">
            +1 (555) 123-4567 232273 78217 9381338 7287
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
