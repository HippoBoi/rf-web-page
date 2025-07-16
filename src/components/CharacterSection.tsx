import "./CharacterSection.css";
import CharacterInfo from "./CharacterInfo";
import { useState } from "react";
import CharacterCarousel from "./CharacterCarousel";
import characters from "./CharactersData";

const CharacterSection = () => {
  const [charIndex, setCharIndex] = useState(0);

  return (
    <div className="character-section-container">
        <div className="characters-background"></div>
          <CharacterInfo 
            name={characters[charIndex].name} 
            splash={characters[charIndex].splash}
            health={characters[charIndex].health}
            damage={characters[charIndex].damage}
            difficulty={characters[charIndex].difficulty}
            specialStat={characters[charIndex].specialStat}
            specialStatValue={characters[charIndex].specialStatValue}/>

          <CharacterCarousel onClick={(index: number) => { setCharIndex(index) }} />
    </div>
  )
}

export default CharacterSection;