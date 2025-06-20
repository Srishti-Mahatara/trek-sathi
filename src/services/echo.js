import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const getEchoConfig = () => ({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT,
    wssPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: false, //false for localhost; true in production
    encrypted: false,
    enabledTransports: ['ws', 'wss'], //wss in production
    disableStats: true,
    authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
    auth: {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
        },
    },
});

const attachEchoDebugListeners = (echoInstance) => {
    const connection = echoInstance.connector?.pusher?.connection;
    if (!connection) return;

    // Debugging Events
    connection.bind('connected', () => {
        console.log('[Echo] ✅ Connected to WebSocket server.');
    });

    connection.bind('disconnected', () => {
        console.warn('[Echo] 🔌 Disconnected from WebSocket server.');
    });

    connection.bind('error', (err) => {
        console.error('[Echo] ❌ Connection error:', err);
    });
}


export { Echo, getEchoConfig, attachEchoDebugListeners };



