document.addEventListener('DOMContentLoaded', function () {
    let totalCoins = parseInt(sessionStorage.getItem('totalCoins')) || 0;
    const coinDisplay = document.getElementById('coin-count');
    const checkboxes = document.querySelectorAll('.task-card__checkbox');

    checkboxes.forEach(function (checkbox) {
        const taskId = checkbox.dataset.id;
        const coinsToAdd = parseInt(checkbox.dataset.coins, 10) || 0;

        if (sessionStorage.getItem(taskId + '_done') === 'true') {
            checkbox.classList.add('checked');
        }

        checkbox.addEventListener('click', function () {
            if (this.classList.contains('checked')) return;

            this.classList.add('checked');
            sessionStorage.setItem(taskId + '_done', 'true');

            totalCoins += coinsToAdd;
            sessionStorage.setItem('totalCoins', totalCoins);

            if (coinDisplay) {
                coinDisplay.textContent = totalCoins;
            }

            alert('Задача выполнена! +' + coinsToAdd + ' монет');
        });
    });
});