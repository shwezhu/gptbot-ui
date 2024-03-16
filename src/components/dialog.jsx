import Message from "./message.jsx";

export default function Dialog() {
    const message = [
        {
            text: 'Hello, I am a user.'
        },
        {
            role: 'Bot',
            text: '请注意，relative、absolute、bottom-0、right-0、和bg-transparent这些类可能需要你根据你的CSS框架或自定义CSS来定义。如果你使用的是Tailwind CSS，上面的类名可以直接使用，否则你需要在你的CSS文件中添加相应的规则。',
            time: new Date().getTime()
        },
        {
            text: 'Hello, I am a user.'
        },
        {
            role: 'Bot',
            text: '请注意，relative、absolute、bottom-0、right-0、和bg-transparent这些类可能需要你根据你的CSS框架或自定义CSS来定义。如果你使用的是Tailwind CSS，上面的类名可以直接使用，否则你需要在你的CSS文件中添加相应的规则。',
            time: new Date().getTime()
        },
        {
            text: 'Hello, I am a user.'
        },
        {
            role: 'Bot',
            text: '请注意，relative、absolute、bottom-0、right-0、和bg-transparent这些类可能需要你根据你的CSS框架或自定义CSS来定义。如果你使用的是Tailwind CSS，上面的类名可以直接使用，否则你需要在你的CSS文件中添加相应的规则。',
            time: new Date().getTime()
        },
        {
            text: 'Hello, I am a user.'
        },
        {
            role: 'Bot',
            text: '请注意，relative、absolute、bottom-0、right-0、和bg-transparent这些类可能需要你根据你的CSS框架或自定义CSS来定义。如果你使用的是Tailwind CSS，上面的类名可以直接使用，否则你需要在你的CSS文件中添加相应的规则。',
            time: new Date().getTime()
        },
    ]

    return (
        <div className={'flex flex-col w-full pt-4 flex-grow h-0 overflow-auto'}>
            {
                message.map((m, i) => {
                    return (
                        <Message key={i} message={m}/>
                    )
                })
            }
        </div>
    )
}