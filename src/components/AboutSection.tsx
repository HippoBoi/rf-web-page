import { useEffect, useRef } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(".about-animate");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-inner">

        {/* Heading */}
        <div className="about-heading about-animate">
          <h2 className="about-title">Random Fighters</h2>
          <p className="about-description">
            is a MOBA inspired game made using the Godot Engine. This is an open source project made for fun (and for a few of my friends!). Feel free to use the assets found in this project in any way you like. Credits would be appreciated as well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
