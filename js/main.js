let btnMenu = document.getElementById("menu")
let btnClose = document.getElementById("close")
let container = document.querySelector(".container")

const productsData = [
    {
        id: 1,
        url: "./image/img-enjoy1.png",
        name: "NATIVE IRON CHAIR",
        price: 4990
    },
    {
        id: 2,
        url: "./image/Rectangleenjoy2.png",
        name: "CENTURY DASHE",
        price: 4990
    },
    {
        id: 3,
        url: "./image/Rectangle 545.png",
        name: "NATIVE LIGHT CHAIR",
        price: 4990
    },
    {
        id: 4,
        url: "./image/Rectangle 545.png",
        name: "PAOLA WOOD LAMP",
        price: 5990
    }
]

const imageMaster = document.querySelector(".img-product");

productsData.forEach(product => {
    imageMaster.innerHTML += `
                    <div>
                     <div class="item-cart">
                         <img alt="" class="img-hover" id="imgOne" src="${product.url}">
                        <button class="cart-btn" onclick="addToCart(${product.id})">Add to cart</button>
                    </div>
                    <div class="text-pro">
                        <p>${product.name}</p>
                        <span>$${product.price}</span>
                    </div>
</div>
    
    `
})

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


// imgOne.addEventListener("click" , add)
// imgTwo.addEventListener("click" , add)
// imgThree.addEventListener("click" , add)
// imgFour.addEventListener("click" , add)


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
//
// let item1 = document.getElementById("itemOne")
// let item2 = document.getElementById("itemTwo")
// let item3 = document.getElementById("itemThree")
// let item4 = document.getElementById("itemFour")
// let item5 = document.getElementById("itemFive")
// let item6 = document.getElementById("itemSix")
//
// item1.addEventListener("click", add)
// item2.addEventListener("click", add)
// item3.addEventListener("click", add)
// item4.addEventListener("click", add)
// item5.addEventListener("click", add)
// item6.addEventListener("click", add)
//
//
//
function add(){
    let value = Number(numBag.innerText) + 1
    numBag.innerHTML=value
        scrollTo({
            left:0,
            top:0,
            behavior:"smooth"

        })
}
//


function addToCart(productId) {
    const data = productsData.filter(item => item.id === productId)[0];
    localStorage.setItem("cart", JSON.stringify(data))
}
