document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            const targetSection = document.getElementById(targetId);

            const scrollTo = targetSection.offsetTop - (window.innerHeight - targetSection.offsetHeight) / 2;

            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        });
    });
});