import Message from "./message.jsx";

export default function Dialog() {
    const message = [
        {
            role: 'bot',
            text: 'Hello, I am a bot.',
            time: '2021-09-01T12:00:00'
        },
        {
            role: 'user',
            text: 'Hello, I am a user.',
            time: '2021-09-01T12:01:00'
        }
    ]

    return (
        <div className={'flex flex-col w-full flex-grow'}>
            {
                message.map((m, i) => {
                    return (
                        <Message key={i} role={m.role} text={m.text} time={m.time}/>
                    )
                })
            }
        </div>
    )
}