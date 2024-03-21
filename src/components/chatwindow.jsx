import InputBar from "./inputbar.jsx";
import DialogArea from "./dialog.jsx";
import {useChatGPT} from "../hooks/usechatgpt.jsx";

export default function ChatWindow({fetchPath}) {
    const { chatHistory, loading, onSend, onClear, onStop } = useChatGPT({fetchPath});

    return (
        <div className={' flex-grow flex flex-col mx-auto w-full xl:w-1/2 mt-8'}>
            <DialogArea chatHistory={chatHistory} loading={loading} onStop={onStop}/>
            <InputBar onSend={onSend} onClear={onClear}/>
        </div>
    )
}