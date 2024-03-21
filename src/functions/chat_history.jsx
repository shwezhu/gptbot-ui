const chatKey = 'chat_history';
const sizeKey = 'size';
const clearSize = 30;

function getChatHistory() {
    const chatHistoryStr = localStorage.getItem(chatKey);
    if (!chatHistoryStr) {
        return [];
    }

    try {
        return JSON.parse(chatHistoryStr);
    } catch (e) {
        console.error('Error parsing chat history: ' + e);
        return [];
    }
}

function saveChatHistory(history) {
    let chatHistoryStr;
    try {
        chatHistoryStr = JSON.stringify(history);
    } catch (e) {
        alert("存储聊天记录失败 meow~")
        console.error('Error stringify chat history: ' + e);
        return;
    }

    if(localStorage && !localStorage.getItem(sizeKey)) {
        setLocalStorageSize();
    }

    if (chatHistoryStr.length >= Number(localStorage.getItem(sizeKey))) {
        alert("历史聊天记录过大, 请删除旧信息, 看右上角喵~")
        return;
    }

    localStorage.setItem(chatKey, chatHistoryStr);
}

function clearChatHistory() {
    // reset the size
    localStorage.removeItem('size');

    let chatHistory = getChatHistory();
    if (!chatHistory) {
        return;
    }

    // remove the last 'clearSize' messages
    chatHistory.splice(0, Math.min(clearSize, chatHistory.length));

    saveChatHistory(chatHistory);
    alert('部分聊天记录已清除~')
}

function setLocalStorageSize() {
    let i = 0;
    try {
        // Roughly 10240000 UTF-16 code units.
        for (i = 250; i <= 10000; i += 250) {
            localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
        }
    } catch (e) {
        localStorage.removeItem('test');
        // Size in utf-16 code units, not bytes.
        localStorage.setItem(sizeKey, String((i - 250) * 1024));
    }
}

export {getChatHistory, saveChatHistory, clearChatHistory}

