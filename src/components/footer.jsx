export default function Footer() {
    return (
        // flex justify-center: center its content horizontally,
        // mx-auto: center itself horizontally, mx-auto not work for inline element,
        // flex item is neither block nor inline element, so mx-auto will work.
        // flex item is not flex container.
        <div className={'flex justify-center w-full pb-1 text-sm xl:pb-3 xl:text-base'}>
            妮妮殿下的猫猫 ©2024 Created by 为霜
        </div>
    )
}