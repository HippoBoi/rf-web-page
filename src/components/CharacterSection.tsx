import "./CharacterSection.css";
import CharacterInfo from "./CharacterInfo";
import { useState, useEffect, useRef } from "react";
import CharacterCarousel from "./CharacterCarousel";
import characters from "./CharactersData";
import { applyPalette, loadSavedPalette } from "../utils/palette";

const ANIM_DURATION = 240;

const CharacterSection = () => {
  const [displayedIndex, setDisplayedIndex] = useState(() => {
    try {
      const raw = localStorage.getItem("rf:selectedCharIndex");
      const parsed = raw ? Number(raw) : NaN;
      if (!Number.isInteger(parsed) || parsed < 0 || parsed >= characters.length) return 0;
      return parsed;
    } catch (e) {
      console.error(e);
      return 0;
    }
  });

  const [exitingIndex, setExitingIndex] = useState<number | null>(null);
  const isTransitioningRef = useRef(false);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const saved = loadSavedPalette();
    if (saved) {
      applyPalette(saved, false);
    } else {
      applyPalette(characters[displayedIndex].palette);
    }
  }, [displayedIndex]);

  useEffect(() => {
    applyPalette(characters[displayedIndex].palette);
    try {
      localStorage.setItem("rf:selectedCharIndex", String(displayedIndex));
    } catch (e) {
      console.log(e);
    }
  }, [displayedIndex]);

  const handleSelect = (index: number) => {
    if (index === displayedIndex || isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setExitingIndex(displayedIndex);
    setDisplayedIndex(index);
    transitionTimeoutRef.current = setTimeout(() => {
      setExitingIndex(null);
      isTransitioningRef.current = false;
      transitionTimeoutRef.current = null;
    }, ANIM_DURATION);
  };

  return (
    <div id="characters" className="character-section-container">
      <div className="characters-background"></div>

      {exitingIndex !== null && (
        <CharacterInfo
          animClass="char-exit"
          name={characters[exitingIndex].name}
          splash={characters[exitingIndex].splash}
          health={characters[exitingIndex].health}
          damage={characters[exitingIndex].damage}
          difficulty={characters[exitingIndex].difficulty}
          specialStat={characters[exitingIndex].specialStat}
          specialStatValue={characters[exitingIndex].specialStatValue}
        />
      )}

      <CharacterInfo
        animClass={exitingIndex !== null ? "char-enter" : ""}
        name={characters[displayedIndex].name}
        splash={characters[displayedIndex].splash}
        health={characters[displayedIndex].health}
        damage={characters[displayedIndex].damage}
        difficulty={characters[displayedIndex].difficulty}
        specialStat={characters[displayedIndex].specialStat}
        specialStatValue={characters[displayedIndex].specialStatValue}
      />

      <CharacterCarousel onClick={handleSelect} />
    </div>
  );
};

export default CharacterSection;