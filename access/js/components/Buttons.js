export default function ButtonNavActive(){
    const button = document.querySelectorAll('.nav__link');
    button.forEach((btn) => {
        btn.addEventListener('click', () => {
            button.forEach((btn) => btn.classList.remove('nav__link--active'));
            btn.classList.add('nav__link--active');
            btn.childNodes[1].click();
        })
    })
}