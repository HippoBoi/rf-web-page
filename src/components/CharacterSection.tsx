import "./CharacterSection.css";
import CharacterInfo from "./CharacterInfo";
import { useState, useEffect } from "react";
import CharacterCarousel from "./CharacterCarousel";
import characters from "./CharactersData";
import { applyPalette, loadSavedPalette } from "../utils/palette";

const CharacterSection = () => {
  const [charIndex, setCharIndex] = useState(() => {
    try {
      const raw = localStorage.getItem("rf:selectedCharIndex");
      return raw ? Number(raw) : 0;
    } catch (e) { 
      console.error(e);
      return 0; 
    }
  });

  useEffect(() => {
    const saved = loadSavedPalette();

    if (saved) {
      applyPalette(saved, false);
    } else {
      applyPalette(characters[charIndex].palette);
    }
  }, []);

  useEffect(() => {
    applyPalette(characters[charIndex].palette);
    try { 
      localStorage.setItem("rf:selectedCharIndex", String(charIndex)); 
    } 
    catch(e) { 
      console.log(e);
    }
  }, [charIndex]);

  return (
    <div id="characters" className="character-section-container">
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