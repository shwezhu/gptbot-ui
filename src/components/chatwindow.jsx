import InputBar from "./inputbar.jsx";
import DialogArea from "./dialog.jsx";

export default function ChatWindow() {
    return (
        <div className={'flex-grow flex flex-col mx-auto w-full xl:w-2/3'}>
            <DialogArea/>
            <InputBar/>
        </div>
    )
}