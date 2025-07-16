import "./CharacterInfo.css";
import star from "../assets/star_icon.webp";

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
    const addStars = (amount: number) => {
        return Array.from({ length: amount }).map(() => {
            return <img className="star" src={star}></img>
        })
    }

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
                            {addStars(4)}
                        </div>
                        <div className="stat-row">
                            <h3 className="description">Damage:</h3>
                            {addStars(4)}
                        </div>
                        <div className="stat-row">
                            <h3 className="description">Difficulty:</h3>
                            {addStars(2)}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CharacterInfo