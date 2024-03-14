import {useState} from "react";

export default function InputBar() {
    const [text, setText] = useState('');

    function onChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <textarea
                onChange={onChange}
                value={text}
                style={{
                    resize: 'none',
                }}
                placeholder={'请输入...'}>

            </textarea>
        </div>
    )
}