import "./DancingLogo.css"

interface Props {
    logo: string
}

const DancingLogo = ({logo}: Props) => {
    return (
        <div className="logo" style={{ maxWidth: "100%", maxHeight: "100%", paddingTop: "4%", paddingBottom: "4%"}}>
            <img className="logo-image" src={logo} />
        </div>
    );
}

export default DancingLogo;