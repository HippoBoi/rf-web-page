import { useEffect, useRef } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const GITHUB_URL = "https://github.com/HippoBoi/random-fighters";

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
      { threshold: 0.35 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-inner">

        <div className="about-heading about-animate">
          <h2 className="about-title">Random Fighters</h2>
          <p className="about-description">
            is a MOBA inspired game made using the Godot Engine. This is an open source project made for fun (and for a few of my friends!). Feel free to use the assets found in this project in any way you like. Credits would be appreciated as well.
          </p>
        </div>

        <a
            className="about-github-btn"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="about-github-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0 1 12 6.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
