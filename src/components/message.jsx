import {formatTimestamp} from "../utils.js";

export default function Message({message}) {
    const messageClass = message.role ?
        'mr-auto mb-4 bg-cyan-100 text-black' : 'ml-auto bg-blue-400 text-white'
    let sentTime = ''
    if (message.time) {
        sentTime = formatTimestamp(message.time)
    }

    return (
        <div className={`px-2 py-2 mb-4 rounded-xl ${messageClass}`}>
            <strong>{message.role ? `${message.role}: ` : null}</strong>
            {message.text}
            {sentTime ? <div className={`text-sm text-end mt-2`}> {sentTime} </div> : null}
        </div>
    )
}