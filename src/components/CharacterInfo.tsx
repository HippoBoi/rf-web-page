import "./CharacterInfo.css";
import star from "../assets/star_icon.webp";

interface Props {
    animClass?: string;
    name: string;
    splash: string;
    health?: number;
    damage?: number;
    difficulty?: number;
    specialStat?: string;
    specialStatValue?: number;
}

const CharacterInfo = ({ animClass, name, splash, health, damage, difficulty, specialStat, specialStatValue }: Props) => {
    const addStars = (amount: number) => {
        return Array.from({ length: amount }).map((_, i) => {
            return <img key={i} className="star" src={star} alt="" aria-hidden="true"></img>
        })
    }

    return (
        <div className={`char-content ${animClass ?? ''}`}>
            <div className="portrait">
                <img 
                    className="splash" 
                    src={splash} >
                </img>
            </div>
            
            <div className="info">
                <h1 className="name">{name}</h1>
                <ul className="description-container">
                    <li>
                        <div className="stat-row">
                            <h3 className="description">Health:</h3>
                            {addStars(health!)}
                        </div>
                        <div className="stat-row">
                            <h3 className="description">Damage:</h3>
                            {addStars(damage!)}
                        </div>
                        <div className="stat-row">
                            <h3 className="description">Difficulty:</h3>
                            {addStars(difficulty!)}
                        </div>

                        {specialStat && (
                            <div className="stat-row">
                                <h3 className="description">{specialStat}:</h3>
                                {addStars(specialStatValue!)}
                            </div>
                        )}
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CharacterInfo