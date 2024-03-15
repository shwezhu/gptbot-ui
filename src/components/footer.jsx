export default function Footer() {
    return (
        // flex justify-center: center its content horizontally,
        // mx-auto: center itself horizontally, mx-auto not work for inline element,
        // flex item is neither block nor inline element, so mx-auto will work.
        // flex item is not flex container.
        <div className={'flex justify-center w-full'}>
            妮妮殿下的专属机器人 ©2024 Created by 为霜
        </div>
    )
}