// ================= toggle style switcher ======================
const styleSwitcherToggle = document.querySelector(".switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".switcher").classList.toggle("open");
})

// hide style - sewitcher on-scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".switcher").classList.contains('open'))
    {
        document.querySelector(".switcher").classList.remove('open');
    }
})





const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('bxs-sun');
    dayNight.querySelector('i').classList.toggle('bxs-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark'))
    {
        dayNight.querySelector('i').classList.add('bxs-sun');
    }
    else
    {
        dayNight.querySelector('i').classList.add('bxs-moon');
    }
})