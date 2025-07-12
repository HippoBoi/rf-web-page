import "./DownloadButton.css";

const DownloadButton = () => {
    const handleClick = () => {
        window.open("https://drive.google.com/file/d/1cSDwtxD3N1H52UGJQZNoXB8hFx3Q9X6t/view?usp=sharing");
    };

    return (
        <div>
            <text style={{ color: "gray", paddingRight: 25 }}><i>alpha available</i></text>
            <button className="download-button" onClick={handleClick}>Download Now</button>
        </div>
    );
}

export default DownloadButton;