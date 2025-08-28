/* eslint-disable */

import { AxiosError } from "axios";

export function base64ToFile(data: string, name: string, type: string) {
    const byteArray = Uint8Array.from(atob(data), c => c.charCodeAt(0));
    const file = new File([byteArray], name, { type });
    return file;
}

export function handleCatchBlock(err: any): string {
    if (typeof err === "string") {
        return err;
    } else if (err instanceof AxiosError) {
        if (err.response?.data) {
            return err.response.data;
        } else {
            return err.message;
        }
    } else if (err instanceof Error) {
        return err.message;
    } else {
        return "Something went wrong!";
    }
}