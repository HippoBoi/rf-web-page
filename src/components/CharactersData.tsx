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
        palette: { primary: "#020616", secondary: "#1e368d", accent: "#4679f8", "bg-color": "#020616" },
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
        palette: { primary: "#120403", secondary: "#4f281a", accent: "#ff9f5f", "bg-color": "#120403" },
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
        palette: { primary: "#010f01", secondary: "#1f6e39", accent: "#48de43", "bg-color": "#010f01" },
        health: 5,
        damage: 1,
        difficulty: 2,
        specialStat: "BauKer",
        specialStatValue: 5,
    },
];

export default characters;