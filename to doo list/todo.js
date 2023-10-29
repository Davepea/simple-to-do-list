let item =  document.getElementById("item")
let form = document.getElementById("form").addEventListener("submit", submit)
function submit(e){
    e.preventDefault()
   let value = document.querySelector(".form-control").value
//    item.innerHTML += `
//    </li><li class="col-12 d-flex justify-content-between list-items align-items-center px-4 py-2">
//    <p class="fs-6 m-0 collection-item">${e.target.value}</p>
//     <button>
//        <i class="fa-solid fa-close"></i>
//    </button>
//     </li>
//    `
   let li = document.createElement("li")
    li.className="col-12 d-flex justify-content-between list-items align-items-center px-4 py-2"


    //create p
    let p = document.createElement("p")
    p.className = `fs-6 m-0 collection-item`
    p.append(value)
    let button = document.createElement("img")
    button.src = "https://img.icons8.com/ios-glyphs/30/null/macos-close.png"
    button.className= "fa-close"
    let i = document.createElement("i")
    i.className=`fa-solid fa-close`
    button.append(i)
    
    li.append(p);
    li.append(button)
    console.log(li)
    item.append(li)
    
}



item.addEventListener("click", deleteli)
function deleteli(e){
    if(e.target.classList.contains('fa-close')){
        confirm(`are you sure you want to delete this`)
        let li = e.target.parentElement ;
        item.removeChild(li)
    }
}


let clearAll = document.getElementById("mybtn1").addEventListener("click",clear2)
function clear2(){
  item.style.display = "none"
}

















let search = document.getElementById("search")
console.log(search)

search.addEventListener("keyup", searchbar)
function searchbar(e){

  let text = e.target.value.toLowerCase();
    console.log(text);
  let li = item.querySelectorAll("li")
   console.log(li);
    li.forEach((it)=>{
        let liTem = it.textContent.toLowerCase()
        console.log(liTem)
        if(liTem.indexOf(text) != -1){
            it.style.display = "block"
        }else{
            it.style.display = "none"
        }
    })
}
