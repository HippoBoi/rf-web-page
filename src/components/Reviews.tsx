import "./Reviews.css";

import rhay from "../assets/rhay_icon.png";
import ramon from "../assets/ramon_icon.png";
import clean from "../assets/clean_icon.png";
import shugo from "../assets/shugo_icon.png";

const reviews = [
  { name: "Rhay", text: "worst game so far", avatar: rhay },
  { name: "Ramon", text: "would be great if my computer could run it", avatar: ramon },
  { name: "Clean", text: "virtual boy had better graphics", avatar: clean },
  { name: "Shugo", text: "its cool", avatar: shugo },
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <h3 className="reviews-title">Real Reviews</h3>
      <div className="reviews-row">
        {reviews.map((r, i) => (
          <article className="review-card" key={i}>
            <img
              className="review-avatar"
              src={r.avatar}
              alt={`${r.name} avatar`}
              loading="lazy"
            />
            <div className="review-content">
              <div className="review-name">{r.name}</div>
              <div className="review-text">{r.text}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
