import "./CharacterSection.css";
import rhay from "../assets/rhay.webp";
import CharacterInfo from "./CharacterInfo";

const CharacterSection = () => {
  return (
    <div className="character-section-container">
        <div className="characters-background"></div>
          <CharacterInfo 
            name="RHAY" 
            desc="Difficulty: ****" 
            splash={rhay} />
    </div>
  )
}

export default CharacterSection;