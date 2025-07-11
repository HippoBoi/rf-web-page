import logo from '../assets/logo.webp'
import BackgroundSlider from '../components/BackgroundSlider';
import DownloadButton from '../components/DownloadButton';

import rhay from "../assets/rhay_icon.png";
import ramon from "../assets/ramon_icon.png";
import clean from "../assets/clean_icon.png";
import shugo from "../assets/shugo_icon.png";
import DancingLogo from '../components/DancingLogo';
import Characters from '../components/Characters';

const Landing = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <DancingLogo logo={logo} />
            <DownloadButton />
            <div style={{ paddingTop: "5%"}} />
            <BackgroundSlider images={[rhay, ramon, clean, shugo]} />
            <Characters />
        </div>
    );
}

export default Landing;