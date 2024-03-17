import InputBar from "./inputbar.jsx";
import DialogArea from "./dialog.jsx";

export default function ChatWindow() {
    return (
        <div className={' flex-grow flex flex-col mx-auto w-full xl:w-1/2 mt-8'}>
            <DialogArea/>
            <InputBar/>
        </div>
    )
}