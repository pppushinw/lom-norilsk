const links = [...document.querySelectorAll('a[href^="#"]')];

links.map(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let section = document.querySelector(link.hash);
        section.scrollIntoView({behavior: 'smooth', block: 'start'})
    });
});