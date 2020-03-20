export function secondsFormat(seconds: number): string {
    if (!seconds) {
        return '';
    }

    const h = seconds > 3600 ? `${Math.floor(seconds / 3600)}:` : '',
        m = `${Math.floor(seconds / 60) - Math.floor(seconds / 3600) * 60}:`,
        s = Math.floor(seconds % 60) < 10 ? `0${Math.floor(seconds % 60)}` : Math.floor(seconds % 60);

    return h + m + s;
}
