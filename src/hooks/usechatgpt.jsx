import {useRef, useState} from 'react';
import {getSystemInstruction, trimMessage} from "../functions/chat_message.jsx";
import {getChatHistory, saveChatHistory} from "../functions/chat_history.jsx";

export const useChatGPT = ({ fetchPath }) => {
    const [messages, setMessages] = useState([]); // for real request
    const [chatHistory, setChatHistory] = useState([]); // for display
    const [loading, setLoading] = useState(false);
    const controller = useRef(null)

    if (chatHistory.length > 0) {
        saveChatHistory(chatHistory);
    } else {
        const history = getChatHistory();
        if (history && history.length > 0) {
            setChatHistory(history);
        }
    }
    trimMessage(messages);

    async function fetchMessage(messages) {
        setLoading(true)
        controller.current = new AbortController()
        try {
            const response = await fetch(fetchPath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token'),
                },
                body: JSON.stringify({messages}),
                signal: controller?.current?.signal,
            });

            setLoading(false)
            if (response.ok) {
                return await response.json();
            } else {
                setMessages((messages) => messages.slice(0, -1));
                if (response.status === 404) {
                    console.error('Error: Resource not found (404)');
                    alert("获取信息失败, 请联系截图主人喵~: Error: fetchMessage: Resource not found (404)");
                    return null;
                }
                const data = await response.json();
                console.error("Error: fetchMessage: " + data.error);
                alert("获取信息失败, 请联系截图主人喵~: fetchMessage: " + data.error);
                return null;
            }
        } catch (e) {
            setLoading(false)
            // remove the last message
            setMessages((messages) => messages.slice(0, -1));

            // AbortError is expected when the user stops the request.
            if (e.name === 'AbortError') {
                return null;
            }

            console.error("Exception: fetchMessage: " + e);
            alert("获取信息失败, 请截图反馈: Exception: fetchMessage: " + e);
        }
    }

    const onSend = async (messageContent, botRole=null) => {
        updateChatHistory('user', messageContent);

        if (botRole !== 'translator') {
            updateMessages('user', messageContent);
        }

        let newMessages;
        if (botRole) {
            const instruction = getSystemInstruction(botRole);
            if (botRole === 'translator') {
                newMessages = [instruction, { role: 'user', content: messageContent }];
            } else {
                newMessages = [instruction, ...messages, { role: 'user', content: messageContent }];
            }
        } else {
            newMessages = [...messages, { role: 'user', content: messageContent }];
        }

        const res = await fetchMessage(newMessages).then();

        // Update chat history and messages for the assistant's response
        if (res && res.content.trim()) {
            updateChatHistory('assistant', res.content);
            if (botRole !== 'translator') {
                updateMessages('assistant', res.content);
            }
        }
    };

    const onClear = () => {
        setMessages([]);
        alert("聊天上下文已清空")
    };

    const onStop = () => {
        if (controller.current) {
            controller.current.abort()
            setLoading(false)
        }
    }

    const updateChatHistory = (role=null, content) => {
        setChatHistory(chatHistory => [
            ...chatHistory,
            {
                role,
                content,
                time: new Date().getTime()
            }
        ]);
    };

    const updateMessages = (role, content) => {
        setMessages(messages => [
            ...messages,
            {
                role,
                content,
            }
        ])
    };

    return {
        loading,
        chatHistory,
        onSend,
        onClear,
        onStop,
    };
};
