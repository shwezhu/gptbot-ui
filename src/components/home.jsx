import "../main.css";
import ChatWindow from "./chatwindow.jsx";
import backgroundImage from "../assets/bg.png";

export default function Home() {
    const style = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100dvh', // dvh: https://www.youtube.com/watch?v=-sF5KsEo6gM
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
    }

    return (
        <div style={style}>
            <ChatWindow/>
        </div>
    )
}