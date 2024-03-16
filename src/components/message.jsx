export default function Message({role, text, time}) {
    const messageClass = role === 'bot' ? 'mr-auto mb-4 bg-gray-300 text-black' : 'ml-auto bg-blue-300 text-white'
    const timePos = role === 'bot' ? 'order-2' : 'order-1'
    const rolePos = role === 'bot' ? 'order-1' : 'order-2'
    const sentTime = new Date(time).toLocaleString()

    return (
        <div className={messageClass} >
            <div className={'flex flex-row justify-between'}>
                <span className={rolePos}>{role}</span>
                <span className={timePos}>{sentTime}</span>
            </div>
            <p>{text}</p>
        </div>
    )
}