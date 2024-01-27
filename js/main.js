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


imgOne.addEventListener("click" , add)
imgTwo.addEventListener("click" , add)
imgThree.addEventListener("click" , add)
imgFour.addEventListener("click" , add)


// function add(){
//     let value = Number(numBag.innerText) + 1
//     numBag.innerHTML=value
// scrollTo({
//     left:0,
//     top:0,
//     behavior:"smooth"

// })
// }

// imgOne.onclick = ()=>{
//     let value = Number(numBag.innerText) + 1
//     numBag.innerHTML=value
// scrollTo({
//     left:0,
//     top:0,
//     behavior:"smooth"

// })

// }
// imgTwo.onclick = ()=>{
//     let value = Number(numBag.innerText) + 1
//     numBag.innerHTML=value
// scrollTo({
//     left:0,
//     top:0,
//     behavior:"smooth"

// })

// }
// imgThree.onclick = ()=>{
//     let value = Number(numBag.innerText) + 1
//     numBag.innerHTML=value
// scrollTo({
//     left:0,
//     top:0,
//     behavior:"smooth"

// })

// }

// imgFour.onclick = ()=>{
//     let value = Number(numBag.innerText) + 1
//     numBag.innerHTML=value
// scrollTo({
//     left:0,
//     top:0,
//     behavior:"smooth"

// })

// }


// ************************

let item1 = document.getElementById("itemOne")
let item2 = document.getElementById("itemTwo")
let item3 = document.getElementById("itemThree")
let item4 = document.getElementById("itemFour")
let item5 = document.getElementById("itemFive")
let item6 = document.getElementById("itemSix")

item1.addEventListener("click", add)
item2.addEventListener("click", add)
item3.addEventListener("click", add)
item4.addEventListener("click", add)
item5.addEventListener("click", add)
item6.addEventListener("click", add)



function add(){
    let value = Number(numBag.innerText) + 1
    numBag.innerHTML=value
scrollTo({
    left:0,
    top:0,
    behavior:"smooth"

})
}

console.log(item2)