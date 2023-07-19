import { ref, computed } from "vue"
import axios from "axios"

export function useGetWpData() {
    async function getWpData() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_WP_API_BASE}/data`);
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
    return { getWpData };
}