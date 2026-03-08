import rhay from "../assets/rhay.webp";
import ramon from "../assets/ramon.webp";
import clean from "../assets/clean.webp";
import shugo from "../assets/shugo.webp";
import nephi from "../assets/nephi.webp";

import rhayIcon from "../assets/rhay_icon.png";
import ramonIcon from "../assets/ramon_icon.png";
import cleanIcon from "../assets/clean_icon.png";
import shugoIcon from "../assets/shugo_icon.png";
import nephiIcon from "../assets/nephi_icon.png";

const characters = [
    {
        name: "Rhay",
        icon: rhayIcon,
        splash: rhay,
        palette: { primary: "#0b0918", secondary: "#101b3b", accent: "#6f7dff", "bg-color": "#090a19" },
        health: 2,
        damage: 4,
        difficulty: 3,
        specialStat: "Sonic",
        specialStatValue: 5,
    },
    {
        name: "Ramón",
        icon: ramonIcon,
        splash: ramon,
        palette: { primary: "#0c0904", secondary: "#4e4819", accent: "#ffe56f", "bg-color": "#0c0904" },
        health: 3,
        damage: 3,
        difficulty: 2,
        specialStat: "Teacups",
        specialStatValue: 5,
    },
    {
        name: "Clean",
        icon: cleanIcon,
        splash: clean,
        palette: { primary: "#041526", secondary: "#0a5a8f", accent: "#3ec1ff", "bg-color": "#041526" },
        health: 1,
        damage: 5,
        difficulty: 3,
        specialStat: "Hacker",
        specialStatValue: 5,
    },
    {
        name: "Shugo",
        icon: shugoIcon,
        splash: shugo,
        palette: { primary: "#061a2e", secondary: "#0b4f85", accent: "#5fd8ff", "bg-color": "#061a2e" },
        health: 3,
        damage: 3,
        difficulty: 4,
        specialStat: "Strawhat",
        specialStatValue: 5,
    },
    {
        name: "Nephi",
        icon: nephiIcon,
        splash: nephi,
        palette: { primary: "#07132a", secondary: "#115c92", accent: "#7fe0ff", "bg-color": "#07132a" },
        health: 5,
        damage: 1,
        difficulty: 2,
        specialStat: "BauKer",
        specialStatValue: 5,
    },
];

export default characters;