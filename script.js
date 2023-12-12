const hamburger = document.querySelector(".mobile_menu");
const naviganion = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    naviganion.classList.toggle("active");
    hamburger.classList.toggle("active");
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));