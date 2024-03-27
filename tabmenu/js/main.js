
document.querySelectorAll(".menu li").forEach(elem=>{
    elem.addEventListener("click",function(e){

        document.querySelector(".menu li.active").classList.remove("active");
        elem.classList.add("active")
    })
})

document.querySelectorAll(".menu li").forEach(elem=>{
    elem.addEventListener("click",function(){
        let tabSelector = elem.getAttribute("data-id");
        let tab = document.querySelector(tabSelector);
        elem.style.backgroundColor = tab.getAttribute("data-bgColor")

        document.querySelector(".tab.active").classList.remove("active")
        tab.classList.add("active")
    })
})