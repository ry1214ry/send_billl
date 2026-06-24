const API_BASE = "";

async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
        const targetUrl = `${API_BASE}${cleanEndpoint}`;

        console.log(`Fetching from endpoint: ${targetUrl}`);
        const res = await fetch(targetUrl, { ...options, headers });

        // DEBUG MODIFICATION: Look at the console instead of clearing the session right away
        if (res.status === 401 || res.status === 403) {
            console.error(`Security Warning: Server returned status code ${res.status} for endpoint: ${endpoint}`);
            // Temporarily commented out so you aren't kicked back to login.html
            // localStorage.clear();
            // window.location.href = '/login.html';
            return { error: `Server returned HTTP Status ${res.status}` };
        }

        return await res.json();
    } catch (err) {
        console.error("API Call network connection error:", err);
        return { error: "Failed to connect to the server." };
    }
}

function logout() {
    localStorage.clear();
    window.location.href = '/login.html';
}