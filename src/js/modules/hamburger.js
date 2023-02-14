const hamburger = () => {
    const toggle = document.querySelector('.hamburger__toggle'),
          links = document.querySelectorAll('.hamburger__list'),
          bg = document.querySelector('.hamburger__bg'),
          nav = document.querySelector('.hamburger__nav');

    toggle.addEventListener('click', () => {
        if (toggle.checked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.checked = false;
            document.body.style.overflow = '';
        })
    })
}

export default hamburger;