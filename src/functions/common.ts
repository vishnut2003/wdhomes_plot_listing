
export function base64ToFile(data: string, name: string, type: string) {
    const byteArray = Uint8Array.from(atob(data), c => c.charCodeAt(0));
    const file = new File([byteArray], name, { type });
    return file;
}