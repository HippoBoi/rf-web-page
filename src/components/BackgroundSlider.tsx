import "./BackgroundSlider.css"

interface Props {
    images: string[]
}

const BackgroundSlider = ({images}: Props) => {
    return (
        <div className="background-slide" style={{ display: "flex", flexDirection: "row" }}>
            {images.map((item) => {
                return <img className="background-icons" src={item}></img>
            })}
            {images.map((item) => {
                return <img className="background-icons" src={item}></img>
            })}
            {images.map((item) => {
                return <img className="background-icons" src={item}></img>
            })}
            {images.map((item) => {
                return <img className="background-icons" src={item}></img>
            })}
            {images.map((item) => {
                return <img className="background-icons" src={item}></img>
            })}
        </div>
    );
}

export default BackgroundSlider;