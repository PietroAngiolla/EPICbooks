const STRIVESCHOOL_BOOKS_API = "https://striveschool-api.herokuapp.com/books"

async function getAllBooks() {
    try {
        const result = await fetch(STRIVESCHOOL_BOOKS_API)
        const json = await result.json()
        console.log(json)
        const bookList = document.querySelector(".row")
        json.forEach(element => {
            const cardHTML =`
            <div class="card col-xs-6 col-md-3 col-lg-2" style="width: 18rem;">
                <img src= ${element.img} class="card-img-top" alt = "title: ${element.title}">
                <div class="card-body">
                    <h5 class="card-title">Title: ${element.title}</h5>
                    <p class="card-text genre">Genre: ${element.category}</p>
                    <p class="card-text price">Price: ${element.price}</p>
                    <a onclick="addToSC(event)" class="btn btn-primary" id="shop-btn">Add to Shopping Cart</a>
                    <a onclick="skipBook(event)" class="btn btn-primary skipbtn" id="skip-btn">Skip Book</a>
                    <a onclick="#" class="btn btn-primary" id="detail-btn">Details</a>
                </div>
            </div>`
            bookList.innerHTML+=cardHTML
            
        });
    } catch (error) {
        console.log(error)
    }
}

getAllBooks()

function addToSC(event) {
    const button=event.target;
    console.log(button)
    const card=button.closest(".card")
    const skipButton=card.querySelector(".skipbtn")
    console.log(card)
    const price=card.querySelector(".price")
    console.log(price)
    button.remove()
    const addedToSC= `<p>ADDED TO SHOPPING CART</p>`
    price.insertAdjacentHTML("afterend", addedToSC)
    skipButton.remove()
}

const form=document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    const searchValue=document.getElementById("search-bar").value.toString()
    console.log(searchValue)
    const cards=document.querySelectorAll(".card")
    console.log(cards)
    let titleArray=[]
    console.log(titleArray)
    cards.forEach(card =>{
        const cardBody=card.children[1]
        const bookTitle=cardBody.querySelector(".card-title").innerHTML
        titleArray.push(bookTitle)
        console.log(bookTitle)
    })
    console.log(titleArray)
    const searchResult=titleArray.filter(function(element){
        return element.includes(searchValue)
    })
    console.log(searchResult)
    let cardsArray=[]
    const row=document.querySelector(".row")
    const cardsHTML=Array.from(cards).map(el => el.outerHTML)
    console.log(cardsHTML)
    cards.forEach(card=>{
        card.remove()
    })
    cards.forEach(card =>{
        if (searchResult.includes(card.children[1].querySelector(".card-title").innerHTML)){
            row.appendChild(card)
        }
    })
})

function skipBook(event) {
    const button=event.target;
    const card=button.closest(".card")
    card.style.display="none"
}