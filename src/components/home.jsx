import Background from "./bg.jsx";
import "../main.css";

export default function Home() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
        }}>
            <Background/>
            <h1 className={'ml-64'}>Home</h1>
        </div>
    )
}