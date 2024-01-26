let btnMenu = document.getElementById("menu")
let btnClose = document.getElementById("close")
let container = document.querySelector(".container")


container.classList.add("hide")

btnClose.onclick = function(){
    container.classList.add("hide")

}

btnMenu.onclick = function(){
    container.classList.remove("hide")

}

// ******************************************

let imgOne = document.getElementById("imgOne")
let imgTwo = document.getElementById("imgTwo")
let imgThree = document.getElementById("imgThree")
let imgFour = document.getElementById("imgFour")

let numBag = document.getElementById("numBag")

imgOne.onclick = ()=>{
    let value = Number(numBag.innerText) + 1
    numBag.innerHTML=value
scrollTo({
    left:0,
    top:0,
    behavior:"smooth"

})

}
imgTwo.onclick = ()=>{
    let value = Number(numBag.innerText) + 1
    numBag.innerHTML=value
scrollTo({
    left:0,
    top:0,
    behavior:"smooth"

})

}
imgThree.onclick = ()=>{
    let value = Number(numBag.innerText) + 1
    numBag.innerHTML=value
scrollTo({
    left:0,
    top:0,
    behavior:"smooth"

})

}

imgFour.onclick = ()=>{
    let value = Number(numBag.innerText) + 1
    numBag.innerHTML=value
scrollTo({
    left:0,
    top:0,
    behavior:"smooth"

})

}


// let value = Number(totalElement.innerText) + Number(price)
// totalElement.innerHTML = value