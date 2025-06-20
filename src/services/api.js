import axios from 'axios';

// Base URL for API
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Request interceptor to include Sanctum token if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    // Log the request before it is sent
    console.log("API Request:");
    console.log(`➡️ Method: ${config.method.toUpperCase()}`);
    console.log(`➡️ URL: ${config.baseURL}${config.url}`);
    console.log('➡️ Headers:', config.headers);

    if (config.data) {
        console.log("➡️ Data:", config.data);
    }

    return config;
});

// Response interceptor to catch 401 errors and clear auth
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            console.warn("Token expired or unauthorized. Logging out...");

            // Clear localStorage or any other auth state
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_user");

        }
        return Promise.reject(error);
    }
);

export async function apiRequest(endpoint, method = "GET", data = null, config={}) {
    try {
        const response = await api({
            url: endpoint,
            method,
            data,
            ...config,
        });
        return response.data;
    } catch (error) {
        console.error('API Request failed:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
}

export default api;
