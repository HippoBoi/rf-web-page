import "./CharacterSection.css";
import rhay from "../assets/rhay.webp";
import CharacterInfo from "./CharacterInfo";
import { useState } from "react";

const characters = [
  {
      "name": "Rhay",
      "splash": rhay,
      "health": 2,
      "damage": 4,
      "difficulty": 3,
      "specialStat": "Cool Hair",
      "specialStatValue": 5
  },
  {
      "name": "Ramón",
      "splash": rhay,
      "health": 3,
      "damage": 3,
      "difficulty": 2,
      "specialStat": "Teacups",
      "specialStatValue": 5
  },
  {
      "name": "Clean",
      "splash": rhay,
      "health": 1,
      "damage": 5,
      "difficulty": 3,
      "specialStat": "Hacker",
      "specialStatValue": 5
  },
  {
      "name": "Shugo",
      "splash": rhay,
      "health": 3,
      "damage": 3,
      "difficulty": 4,
      "specialStat": "Strawhat",
      "specialStatValue": 5
  },
  {
      "name": "Nephi",
      "splash": rhay,
      "health": 5,
      "damage": 1,
      "difficulty": 2,
      "specialStat": "Bauker",
      "specialStatValue": 5
  },
]

const CharacterSection = () => {
  const [charIndex] = useState(0);

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
    </div>
  )
}

export default CharacterSection;