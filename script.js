const hamburger = document.querySelector(".mobile_menu");
const naviganion = document.querySelector(".navigation");
const maincont = document.getElementById("main_content");
var mItems = document.querySelectorAll(".btn_ul");

hamburger.addEventListener("click", () => {
    naviganion.classList.toggle("active");
    hamburger.classList.toggle("active");
    maincont.classList.toggle("blur10");
})
for(var i = 0 ; i < mItems.length ; i++){
    mItems[i].addEventListener("click", () => {
    naviganion.classList.toggle("active");
    hamburger.classList.toggle("active"); 
    maincont.classList.toggle("blur10");   
    })
}



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


// Collapsible
var collapsible = document.getElementsByClassName("Collapsible")
for(var i = 0 ; i < collapsible.length ; i++){
    collapsible[i].addEventListener("click", function() {
        var collItems = this.parentNode.firstChild;
        while (collItems) {
            if (collItems.nodeType === 1 && collItems !== this){
                collItems.classList.remove("large")
            }
            collItems = collItems.nextSibling;
        }
        if(this.classList.contains("large")){
            this.classList.remove("large");
        } else {
            this.classList.toggle("large");
        }
    })
}