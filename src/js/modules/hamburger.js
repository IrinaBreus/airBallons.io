const hamburger = () => {
    const links = document.querySelectorAll(".hamburger__list"),
          bg = document.querySelector('.hamburger__bg'),
          nav = document.querySelector('.hamburger__nav'),
          toggle = document.querySelector('.hamburger__toggle');

    links.forEach(item => {
        item.addEventListener('click', () => {
            toggle.checked = false;
        })
    })
}

export default hamburger;