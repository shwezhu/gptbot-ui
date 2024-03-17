// return: yy-mm-dd hh-mm
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

export {formatTimestamp};