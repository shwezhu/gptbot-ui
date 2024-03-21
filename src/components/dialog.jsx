import Message from "./message.jsx";
import {useEffect, useRef} from "react";
import Loading from "./loading.jsx";

export default function Dialog({ chatHistory, loading, onStop }) {
    const endOfMessagesRef = useRef(null);

    function scrollToBottom() {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    return (
        <div className={'flex flex-col w-full flex-grow h-0 overflow-auto px-1'}>
            {
                chatHistory.map((m, i) => {
                    return (
                        <Message key={i} message={m}/>
                    )
                })
            }
            { loading ? <Loading onStop={onStop} /> : null }
            <div ref={endOfMessagesRef} />
        </div>
    )
}