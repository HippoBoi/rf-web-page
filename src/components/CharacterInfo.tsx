import "./CharacterInfo.css";
import star from "../assets/star.webp";

interface Props {
    name: string;
    splash: string;
    health?: number;
    damage?: number;
    difficulty?: number;
    specialStat?: string;
    specialStatValue?: number;
}

const CharacterInfo = (props: Props) => {
  return (
    <>
        <div className="portrait">
            <img 
                className="splash" 
                src={props.splash} >
            </img>
        </div>
        
        <div className="info">
            <h1 className="name">{props.name}</h1>
            <ul className="description-container">
                <li>
                    <div className="stat-row">
                        <h3 className="description">Health:</h3>
                        <img className="star" src={star}></img>
                    </div>
                    <div className="stat-row">
                        <h3 className="description">Damage:</h3>
                        <img className="star" src={star}></img>
                    </div>
                    <div className="stat-row">
                        <h3 className="description">Difficulty:</h3>
                        <img className="star" src={star}></img>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default CharacterInfo