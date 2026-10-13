document.addEventListener('DOMContentLoaded', function () {
    let totalCoins = parseInt(sessionStorage.getItem('totalCoins')) || 0;
    const coinDisplay = document.getElementById('coin-count');
    const rewardCards = document.querySelectorAll('.reward-card');

    rewardCards.forEach(function (card) {
        const rewardId = card.dataset.id;
        const price = parseInt(card.dataset.price, 10) || 0;

        if (sessionStorage.getItem(rewardId + '_bought') === 'true') {
            card.classList.add('purchased');
        }

        card.addEventListener('click', function () {
            if (this.classList.contains('purchased')) return;

            if (totalCoins < price) {
                alert('Недостаточно монет! Нужно: ' + price + ', у вас: ' + totalCoins);
                return;
            }

            totalCoins -= price;
            sessionStorage.setItem('totalCoins', totalCoins);

            if (coinDisplay) {
                coinDisplay.textContent = totalCoins;
            }

            this.classList.add('purchased');
            sessionStorage.setItem(rewardId + '_bought', 'true');

            alert('Куплено! Осталось монет: ' + totalCoins);
        });
    });
});