import "../main.css";
import Background from "./bg.jsx";
import ChatWindow from "./chatwindow.jsx";
import Footer from "./footer.jsx";
import Navigator from "./navigator.jsx";

export default function Home() {
    return (
        <div className={'flex flex-col h-dvh w-full'}>
            <Background/>
            <Navigator/>
            <ChatWindow fetchPath={'https://raven1132.com:2096/api/chat'}/>
            <Footer/>
        </div>
    )
}