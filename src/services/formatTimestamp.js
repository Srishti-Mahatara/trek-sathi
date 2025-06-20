export const formatTimestamp = (timestamp) => {
    if (!timestamp || typeof timestamp !== "string") return "";

    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "Invalid date";

    const dateOptions = { day: "numeric", month: "short", year: "numeric" };
    const timeOptions = { hour: "2-digit", minute: "2-digit" };

    const formattedDate = date.toLocaleDateString("en-US", dateOptions);
    const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

    const day = date.getDate();
    const suffix =
        day >= 11 && day <= 13
            ? "th"
            : day % 10 === 1
                ? "st"
                : day % 10 === 2
                    ? "nd"
                    : day % 10 === 3
                        ? "rd"
                        : "th";

    const finalDate = formattedDate.replace(/(\d+)/, `$1${suffix}`);

    if (isToday(date)) {
        return `Today · ${formattedTime}`;
    } else if (isYesterday(date)) {
        return `Yesterday · ${formattedTime}`;
    } else {
        return formattedDate;
    }
};

export const formatTimestampShort = (timestamp) => {
    if (!timestamp || typeof timestamp !== "string") return "Invalid date";
    const now = new Date();
    const inputTimestamp = new Date(timestamp);

    if (isToday(inputTimestamp)) {
        return inputTimestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    } else if (isYesterday(inputTimestamp)) {
        return "Yesterday ";
    } else if (inputTimestamp.getFullYear === now.getFullYear()) {
        return inputTimestamp.toLocaleTimeString([], {
            day: "2-digit",
            month: "short",
        });
    } else {
        return inputTimestamp.toLocaleTimeString();
    }
};

export const isToday = (date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

export const isYesterday = (date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()
    );
}


