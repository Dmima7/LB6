document.addEventListener('DOMContentLoaded', function () {
    if (!sessionStorage.getItem('appStarted')) {
        sessionStorage.clear();
        sessionStorage.setItem('appStarted', 'true');
    }

    const coinDisplay = document.getElementById('coin-count');
    if (coinDisplay) {
        const totalCoins = parseInt(sessionStorage.getItem('totalCoins')) || 0;
        coinDisplay.textContent = totalCoins;
    }
});