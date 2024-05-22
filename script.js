let form = document.querySelector("form");
let ul = document.querySelector("ul");
let select = document.querySelector("select");
let textarea = document.querySelector("textarea");

const feedback = (e) =>{
    e.preventDefault()

    

    let li = document.createElement("li")
    li.innerText = select.value;
    li.className = "list-group-item p-4"

    let h1 = document.createElement("h1")
    h1.innerText = "Rating : " + select.value;
    let p = document.createElement("p")
    p.innerText = "Review : " + textarea.value;
    let button = document.createElement("button")
    button.innerText = "Delete";
    button.className ="btn btn-danger rounded-0 float-end";

    

    li.appendChild(h1)
    li.appendChild(p)
    li.appendChild(button)

    ul.appendChild(li)

    form.reset()

}

form.addEventListener("submit",feedback)

const delet = (e) =>{
    if(e.target.className.includes("btn-danger")){
        let li = e.target.parentElement;
        if(window.confirm("Are you Sure")){
            ul.removeChild(li);
        }
    }
}
ul.addEventListener("click",delet);
    
    
    

   
   
    

   





