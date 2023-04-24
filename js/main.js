const button = document.querySelector(".header-all-read");
const counter = document.querySelector(".header-counter");
const notification = document.querySelectorAll(".item")
const read = document.querySelectorAll("#read")
const message = document.querySelector(".item-message")

//Initialize notification counter
let counterValue = read.length;
counter.textContent = counterValue;

//Mark all read Button
const markRead = (item) => {
    /* notification.forEach(x => x.classList.add("item-read"))   */
    for(let i = 0; i < item; i++){
        notification[i].classList.add("item-read");
        if(counter.textContent > 0){
            counter.textContent = counterValue--
        }
    }
}
button.addEventListener("click", () => {
    markRead(notification.length);

});

//Mark read on each notification
notification.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.add("item-read");

        const unreadNotifications = Array.from(notification).reduce(
            (acc, item) => {
              if (!item.classList.contains("item-read")) {
                acc++;
              }
              return acc;
            },
            0
          );
      
          counter.textContent = unreadNotifications
    })
})
