import {formatTimestamp} from "../utils.js";

export default function Message({role, text, time}) {
    const messageClass = role === 'bot' ?
        'mr-auto mb-4 bg-cyan-100 text-black' : 'ml-auto bg-blue-400 text-white'
    const timePos = role === 'bot' ? 'order-2' : 'order-1'
    const rolePos = role === 'bot' ? 'order-1 mr-5' : 'order-2 ml-5'
    const sentTime = formatTimestamp(time)

    return (
        <div className={`px-2 py-2 rounded-xl ${messageClass}`} >
            <div className={'flex flex-row items-center border-2'}>
                <span className={ `text-xl leading-normal ${rolePos}`}>{role}</span>
                <span className={`text-base leading-normal  ${timePos}`}>{sentTime}</span>
            </div>
            <p>{text}</p>
        </div>
    )
}