import "./DownloadButton.css";

const DownloadButton = () => {
    return (
        <div>
            <a href="https://drive.google.com/file/d/14FCFJzHRU3EQDvtELjyhmxjGxFBD6uYe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="download-button">Download</button>
            </a>
        </div>
    );
}

export default DownloadButton;
