const API = 'http://localhost:1214/api/auth';

async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const headers = { 'Content-Type': 'application/json', ...options.headers };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    try {
        const res = await fetch(`${API}${endpoint}`, { ...options, headers });

        // Redirect if token expires or is unauthorized on secure profile fetching
        if (endpoint === '/me' && res.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login.html';
            return null;
        }

        const data = await res.json(); } catch (err) {
        console.error("API Call error:", err);
        return { error: "Failed to connect to the server." };
    }
        return data;

}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login.html';
}