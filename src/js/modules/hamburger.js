const hamburger = () => {
    const links = document.querySelectorAll(".hamburger__list"),
          toggle = document.querySelector('.hamburger__toggle');

    links.forEach(item => {
        item.addEventListener('click', () => {
            toggle.checked = false;
        })
    })
}

export default hamburger;