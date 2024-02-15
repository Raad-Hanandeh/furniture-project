let btnMenu = document.getElementById("menu")
let btnClose = document.getElementById("close")
let container = document.querySelector(".container")

let btnDelete =document.getElementById("delete")
let totalPricee = document.querySelector(".total-price")
let totalNum = document.getElementById("total")


container.classList.add("hide")

btnClose.onclick = function(){
    container.classList.add("hide")

}

btnMenu.onclick = function(){
    container.classList.remove("hide")

}

// ******************************************/




const productsData = [
    {
        id: 1,
        url: "../image/Rectangle 543.png",
        name: "NATIVE IRON CHAIR",
        price: 4990
    },
    {
        id: 2,
        url: "../image/Rectangle 544.png",
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
        url: "../image/Rectangle 546.png",
        name: "PAOLA WOOD LAMP",
        price: 5990
    }
]

const imageMaster = document.querySelector(".img-product");

productsData.forEach(item => {
    imageMaster.innerHTML += `
                    <div class="test-flex">
                     <div class="item-cart">
                         <img alt="" class="img-hover" id="imgOne" src="${item.url}">
                        <button class="cart-btn" onclick="addToCart(${item.id})">Add to cart</button>
                    </div>
                    <div class="text-pro">
                        <p>${item.name}</p>
                        <span>$${item.price}</span>
                    </div>
</div>
    
    `
})


let engoy = document.querySelector(".img-engoy")

const imgGruop = [
    {
    id : 5,
    url:'../image/img-enjoy1.png',
    name:"NATIVE IRON CHAIR",
    price:4990,
    },
    {
        id : 6,
        url:'../image/Rectangleenjoy2.png',
        name:"CENTURY DASHE",
        price:1799,
    },
    {
        id : 7,
        url:'../image/Rectangle enjoy3.png',
        name:"NATIVE LIGHT CHAIR",
        price:4990,
    },
    {
        id : 8,
        url:'../image/Rectangle enjoy4.png',
        name:"PAOLA WOOD LAMP",
        price:5990,
    }
]

imgGruop.forEach(item =>{
    engoy.innerHTML +=`
                   <div class="card-line" >

                   <div class="item-cart">
                   <img alt="" id="itemOne" src="${item.url}">
                   <button class="cart-btn" onclick="addToCart(${item.id})" >Add to cart</button>
               </div>
               <div class="text-enjoy">
                   <p>${item.name}</p>
                   <span>$${item.price}</span>
               </div>
                   </div>
    `
})

 let engoy2 = document.querySelector(".img-engoy2")

const imgGruop2 = [
    {
    id : 9,
    url:'../image/Rectangle enjoy5.png',
    name:"NATIVE IRON CHAIR",
    price:4990,
    },
    {
        id : 10,
        url:'../image/Rectangle enjoy6.png',
        name:"CENTURY DASHE",
        price:1799,
    },
    {
        id : 11,
        url:'../image/Rectangle enjoy7.png',
        name:"NATIVE LIGHT CHAIR",
        price:4990,
    },
    {
        id : 12,
        url:'../image/Rectangle enjoy8.png',
        name:"PAOLA WOOD LAMP",
        price:5990,
    }
]



imgGruop2.forEach((item => {
    engoy2.innerHTML +=`<div class="card-line">
    <div class="item-cart">
        <img alt="" id="itemFive" src="${item.url}">
        <button class="cart-btn"  onclick="addToCart(${item.id})" >Add to cart</button>
    </div>
    
    <div class="text-enjoy">
        <p>${item.name}</p>
        <span>$${item.price}</span>
    </div>

</div>



    `

}))

let numBag = document.getElementById("numBag")

let btnCart=document.querySelectorAll("cart-btn")

function addToCart(productId) {
    const fData = [...productsData,...imgGruop,...imgGruop2].find(item => item.id === productId);
    const oldData = JSON.parse(localStorage?.getItem("cart")||"[]");
    oldData.push(fData)
    localStorage.setItem("cart", JSON.stringify(oldData))

    


    let value = oldData.length
    numBag.innerHTML=value
        scrollTo({
            left:0,
            top:0,
            behavior:"smooth"

        })
        console.log("old",oldData)
        console.log("new" , oldData)


      localStorage.getItem("cart" )
    let calcTotal =  oldData.map(el => el.price).reduce((acc, curr) => acc + curr, 0);
    console.log("calcTotal", calcTotal)
    totalNum.innerHTML = oldData.length > 0 ?  oldData.map(el => el.price).reduce((acc, curr) => acc + curr, 0) : 0
    renderCart()
}



//************************************************* */
let shoping = document.querySelector(".shoping")

let btnClose2 = document.getElementById("close2")
let bagShop = document.getElementById("bag-shop")
let itemShop = document.querySelector(".item-shop")

shoping.classList.add("hide")

function renderCart() {
    shoping.classList.remove("hide")
    const pullData = JSON.parse(localStorage?.getItem("cart")|| "[]")
    const totalPrice = pullData.length > 0 ? pullData.map(item => item?.price).reduce((acc , n)=> acc + n , 0 ) : 0
    console.log("price" , totalPrice)
    if(pullData.length > 0){
        pullData.forEach((item)=>{
            itemShop.innerHTML +=`<div id="${item.id}" class="item-bag">
            <div >
                <img alt="" src="${item.url}">
            </div>
            
            <div>
                <p>${item.name}</p>
                <div class="text-bag">
                    <span>$${item.price}</span>
                    <div class="btn-bag">
                      <button id="delete" onclick="deleteItem(${item.id})">delete</button>
                    </div>
                </div>
            </div>
        </div>
       
            `


        })

    }else{
        itemShop.innerHTML = "No Items in the bag"
        totalPricee.classList.add("hide")


    }

}

bagShop.onclick = ()=>{
    renderCart()
}
btnClose2.onclick = ()=>{
    shoping.classList.add("hide")

}




function deleteItem(id){

    let target = document.getElementById(`${id}`);
    let oldData = JSON.parse(localStorage?.getItem("cart") || "[]");
    if(oldData.length > 0) {
       let filteredData = oldData.filter(el => el.id !== id);
       localStorage.setItem("cart", JSON.stringify(filteredData))
       console.log("filteredData", filteredData);
        totalNum.innerHTML = filteredData.length > 0 ?  filteredData.map(el => el.price).reduce((acc, curr) => acc + curr, 0) : 0

    }
    target.remove();

}
































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

