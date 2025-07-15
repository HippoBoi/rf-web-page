import "./CharacterInfo.css";

interface Props {
    name: string;
    desc: string;
    splash: string;
}

const CharacterInfo = ({ name, desc, splash }: Props) => {
  return (
    <>
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
                    <h3 className="description">{desc}</h3>
                    <h3 className="description">{desc}</h3>
                    <h3 className="description">{desc}</h3>
                </li>
            </ul>
        </div>
    </>
  )
}

export default CharacterInfo