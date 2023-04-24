const button = document.querySelector(".header-all-read");
const counter = document.querySelector(".header-counter");
const notification = document.querySelectorAll(".item")
const read = document.querySelector(".item-read")
const message = document.querySelector(".item-message")

//Mark all read Button
const markRead = (all) => {
    notification.forEach(x => x.classList.add("item-read"))  
    
}

button.addEventListener("click", markRead)