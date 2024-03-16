import Message from "./message.jsx";

export default function Dialog() {
    const message = [
        {
            role: 'bot',
            text: 'Hello, I am a bot.',
            time: new Date().getTime()
        },
        {
            role: 'user',
            text: 'Hello, I am a user.',
            time: new Date().getTime()
        }
    ]

    return (
        <div className={'flex flex-col w-full flex-grow pt-4'}>
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