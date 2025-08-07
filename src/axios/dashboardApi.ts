import axios from "axios"

export function getDashboardAxios () {

    const BASEURL = process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL;

    if (!BASEURL) {
        throw new Error("NEXT_PUBLIC_DASHBOARD_BASE_URL is not specified in .env");
    }

    const axiosInstance = axios.create({
        baseURL: BASEURL,
    })

    return axiosInstance;
}