document.addEventListener('DOMContentLoaded', function () {
    const viewButtons = document.querySelectorAll('.view-button');
    const popups = document.querySelectorAll('.popup');
    const closeButton = document.querySelectorAll('.close-button');

    viewButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            popups[index].style.display = 'flex';
        });
    });

    closeButton.forEach(button => {
        button.addEventListener('click', function () {
            button.closest('.popup').style.display = 'none';
        });
    });
});