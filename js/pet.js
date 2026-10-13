document.addEventListener('DOMContentLoaded', function () {
    let tasksDone = 0;
    if (sessionStorage.getItem('task1_done') === 'true') tasksDone++;
    if (sessionStorage.getItem('task2_done') === 'true') tasksDone++;
    if (sessionStorage.getItem('task3_done') === 'true') tasksDone++;

    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = Math.round((tasksDone / 3) * 100) + '%';
    }

    const petImage = document.getElementById('pet-image');
    const statCards = document.querySelectorAll('.stat-card');
    const savedHat = sessionStorage.getItem('currentHat');

    statCards.forEach(function (card) {
        const hatNumber = card.dataset.hat;

        if (savedHat === hatNumber) {
            card.classList.add('active');
            const savedImage = card.dataset.image;
            if (savedImage && petImage) {
                petImage.src = savedImage;
            }
        }

        card.addEventListener('click', function () {
            statCards.forEach(function (c) {
                c.classList.remove('active');
            });
            this.classList.add('active');

            const newImage = this.dataset.image;
            if (newImage && petImage) {
                petImage.src = newImage;
            }

            sessionStorage.setItem('currentHat', hatNumber);
        });
    });
});