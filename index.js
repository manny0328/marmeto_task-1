let data
let menCount = 0
let womenCount = 0
let kidcount = 0



const fetchUrl =  async () =>  {
    const response  = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
     data = await response.json()
}
let divEl

const createAndAppend = (data)=> {
    console.log(data)
    
    
        
    
    
       
    
}


const onclickBtnMen = () => {
    let count = 0
    const menContainer = document.getElementById("men")
const womenContainer = document.getElementById("women")
const kidContainer = document.getElementById("kid")
    womenContainer.classList.add("display")
    kidContainer.classList.add("display")
    menContainer.classList.remove("display")


    let currentData = data.categories[0]

   let fetchData = currentData.category_products
    
    if (menCount< 1){
        fetchData.map(each => {
            divEl = document.createElement("div")
            priceContainer = document.createElement("div")
            priceContainer.classList.add("price-container")
            const imgEl = document.createElement("img")
            const titleEl = document.createElement("h1")
            const brandEl = document.createElement("p")
            const priceEl  = document.createElement("p")
            const btnEl = document.createElement("button")
            btnEl.textContent = "Add to Cart"
            btnEl.classList.add("cart")
            imgEl.src = each.image
            imgEl.classList.add("img")
            divEl.appendChild(imgEl)
            
            titleEl.textContent = each.title
            titleEl.classList.add("product-name")
            divEl.appendChild(titleEl)
            divEl.appendChild(priceContainer)
            brandEl.textContent = each.vendor
            brandEl.classList.add("brand")
            priceContainer.appendChild(brandEl)
            priceEl.textContent = each.price
            priceEl.classList.add("price")
            priceContainer.appendChild(priceEl)
            divEl.appendChild(btnEl)
            divEl.classList.add("div-container")
            menContainer.appendChild(divEl)
    
        })
    }
    menCount += 1
    console.log(count)
}


const onclickBtnWomen = () => {
    const menContainer = document.getElementById("men")
const womenContainer = document.getElementById("women")
const kidContainer = document.getElementById("kid")
    menContainer.classList.add("display")
    kidContainer.classList.add("display")
    womenContainer.classList.remove("display")

    let currentData = data.categories[1]

   let fetchData = currentData.category_products
    
    if(womenCount<1){
        fetchData.map(each => {
            divEl = document.createElement("div")
            priceContainer = document.createElement("div")
            priceContainer.classList.add("price-container")
            const imgEl = document.createElement("img")
            const titleEl = document.createElement("h1")
            const brandEl = document.createElement("p")
            const priceEl  = document.createElement("p")
            const btnEl = document.createElement("button")
            btnEl.textContent = "Add to Cart"
            btnEl.classList.add("cart")
            imgEl.src = each.image
            imgEl.classList.add("img")
            divEl.appendChild(imgEl)
            
            titleEl.textContent = each.title
            titleEl.classList.add("product-name")
            divEl.appendChild(titleEl)
            divEl.appendChild(priceContainer)
            brandEl.textContent = each.vendor
            brandEl.classList.add("brand")
            priceContainer.appendChild(brandEl)
            priceEl.textContent = each.price
            priceEl.classList.add("price")
            priceContainer.appendChild(priceEl)
            divEl.appendChild(btnEl)
            divEl.classList.add("div-container")
            womenContainer.appendChild(divEl)
            
    
        })
    }
    womenCount+=1
}

const onclickBtnKid = () => {
    const menContainer = document.getElementById("men")
    const womenContainer = document.getElementById("women")
    const kidContainer = document.getElementById("kid")
    womenContainer.classList.add("display")
    menContainer.classList.add("display")
    kidContainer.classList.remove("display")


    let currentData = data.categories[2]

   let fetchData = currentData.category_products
    
  if(kidcount<1){
    fetchData.map(each => {
        divEl = document.createElement("div")
        priceContainer = document.createElement("div")
        priceContainer.classList.add("price-container")
        const imgEl = document.createElement("img")
        const titleEl = document.createElement("h1")
        const brandEl = document.createElement("p")
        const priceEl  = document.createElement("p")
        const btnEl = document.createElement("button")
        btnEl.textContent = "Add to Cart"
        btnEl.classList.add("cart")
        imgEl.src = each.image
        imgEl.classList.add("img")
        divEl.appendChild(imgEl)
        
        titleEl.textContent = each.title
        titleEl.classList.add("product-name")
        divEl.appendChild(titleEl)
        divEl.appendChild(priceContainer)
        brandEl.textContent = each.vendor
        brandEl.classList.add("brand")
        priceContainer.appendChild(brandEl)
        priceEl.textContent = each.price
        priceEl.classList.add("price")
        priceContainer.appendChild(priceEl)
        divEl.appendChild(btnEl)
        divEl.classList.add("div-container")
        kidContainer.appendChild(divEl)

    })
  }
  kidcount+=1
}   
fetchUrl()