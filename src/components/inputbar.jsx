import {useRef, useState} from "react";

export default function InputBar() {
    const [text, setText] = useState('');
    const inputRef = useRef(null)

    function handleKeyDown(e) {
        // Shift + Enter should not submit the form.
        // When user inputs Chinese characters, e.isComposing will be true.
        if (e.isComposing || e.shiftKey)
            return

        if (e.key === 'Enter') {
            // Preventing the default behavior of the textarea to avoid a new line when pressing Enter.
            e.preventDefault()
            handleButtonClick()
        }
    }

    function handleButtonClick() {
        console.log(inputRef.current.value)
    }

    return (
        <div className={'flex flex-row my-1.5 xl:mb-4 xl:mt-2'}>
            <button
                className={'h-12 mx-1 xl:mx-2 px-2 rounded-2xl bg-black text-amber-50'}
                onClick={handleButtonClick}>
                Clear
            </button>
            <textarea
                className={'flex-grow px-2 py-3 min-h-8 max-h-36 resize-none border-spacing-2.5 border-gray-300 rounded-2xl'}
                ref={inputRef}  // When React creates a DOM node for textarea, inputRef.current will point to the textarea element.
                autoComplete="off" // Prevent the browser from filling in the input field with cached values.
                autoFocus  // Automatically focuses the textarea when the page loads.
                // https://www.geeksforgeeks.org/how-to-create-auto-resize-textarea-using-javascript-jquery/
                onInput={(e) => {
                    setText(e.target.value);
                    inputRef.current.style.height = 'auto'
                    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
                }}
                onKeyDown={handleKeyDown}
                placeholder="问点什么吧..."
                rows="1"
            >
            </textarea>
            <button
                className={'h-12 mx-1 xl:mx-2 px-2 rounded-2xl bg-black text-amber-50 disabled:bg-gray-600 disabled:text-gray-400'}
                onClick={handleButtonClick}
                disabled={text.trim().length === 0}
            >
                Send
            </button>
        </div>
    )
}