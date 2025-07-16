import characters from "./CharactersData";
import "./CharacterCarousel.css";

interface Props {
    onClick: (index: number) => void
}

const CharacterCarousel = ({ onClick }: Props) => {
    return (
        <div className="carousel">
            { characters.map((char, index) => (
                <button 
                    className="character"
                    onClick={() => onClick(index)}>
                        <img className="character-icon" src={char.icon}></img>
                </button>
            ))}
        </div>
    )
}

export default CharacterCarousel