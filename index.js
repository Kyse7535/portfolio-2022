function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log("service worker registred", reg))
        .catch((err) => console.log("service worker not registered", err))
}