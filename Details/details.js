const params = new URLSearchParams(location.search)
const id=params.get("id")
const API_STRIVESCHOOL="https://striveschool-api.herokuapp.com/books/"+id
console.log(API_STRIVESCHOOL)


async function getInformation() {
    try{
        const result= await fetch(API_STRIVESCHOOL)
        return await result.json()
    }catch(error){
        console.log(error)
    }
}

getInformation()
    .then(data => {
        console.log(data)
        const title=document.querySelector("h1")
        title.innerHTML=data.title
        const container=document.querySelector(".container")
        const sectionTemplate=`
        <img src="${data.img}" alt="${data.title}"+" Book cover">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
        container.innerHTML+=sectionTemplate
    }).catch(error =>{
        console.log(error)
    })
        
    