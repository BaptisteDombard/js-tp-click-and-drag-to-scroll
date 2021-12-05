document.documentElement.className = "js-enabled";

const aItems = document.querySelectorAll("div.item");


document.querySelector("div.item").addEventListener("click", (event) =>{
    for (const eItem of aItems) {
        eItem.scrollLeft;
    }
})