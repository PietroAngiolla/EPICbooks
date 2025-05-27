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
                    <p class="card-text">Genre: ${element.category}</p>
                    <p class="card-text">Price: ${element.price}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`
            bookList.innerHTML+=cardHTML
            
        });
    } catch (error) {
        console.log(error)
    }
}

getAllBooks()