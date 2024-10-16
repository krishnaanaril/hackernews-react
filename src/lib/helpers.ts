export function getDocumentTitle(title: string): string {
    let newTitle = 'HackerNews - React';
    if(title) {
        const isLong = title?.length > 40;
        newTitle = `${title?.slice(0, 40)}${isLong ? '...' : ''} | HackerNews - React`;
    }
    return newTitle;
}

export function timeAgo(unixTimestamp: number): string {
    unixTimestamp *= 1000;
    const thisMoment = new Date().getTime();
    const seconds = Math.floor((thisMoment - unixTimestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 0) {
        return interval + (interval === 1 ? ' year' : ' years');
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 0) {
        return interval + (interval === 1 ? ' month' : ' months');
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 0) {
        return interval + (interval === 1 ? ' day' : ' days');
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 0) {
        return interval + (interval === 1 ? ' hour' : ' hours');
    }
    interval = Math.floor(seconds / 60);
    if (interval > 0) {
        return interval + (interval === 1 ? ' minute' : ' minutes');
    }
    return Math.floor(seconds) + (interval === 1 ? ' second' : ' seconds');
}