import "./BackgroundSlider.css"

interface Props {
    images: string[]
}

const BackgroundSlider = ({images}: Props) => {
    const repetitions = 6;

    const repeatSliderPattern = () => {
        return Array.from({ length: repetitions }).map(() => {
            return images.map((item, index) => {
                return <img className="background-icons" src={item} key={`img-${index}`}></img>
            })
        });
    };

    return (
        <>
            <div className="background-slide firstRow" style={{ display: "flex", flexDirection: "row" }}>
                {repeatSliderPattern()}
            </div>

            <div className="background-slide secondRow" style={{ display: "flex", flexDirection: "row" }}>
                {repeatSliderPattern()}
            </div>
        </>
    );
}

export default BackgroundSlider;