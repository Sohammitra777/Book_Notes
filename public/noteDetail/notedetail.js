import { url } from "../util/util.js";


async function deleteButton(id){
    const element = document.getElementById(id)
    element.remove();
    await fetch(url + '/deleteNote/' + id, {method:"DELETE"}); 
}


function notesDetailCreation(id, element){
    //div creation
    const division = document.createElement("div"); 
    division.setAttribute("class", "notes");
    division.setAttribute("id", id); 

    const paragraph = document.createElement("p");
    paragraph.textContent = element;

    const button = document.createElement("button"); 
    button.textContent = "Delete";
    button.addEventListener("click", ()=> deleteButton(id));  


    division.append(paragraph, button); 
    const select = document.getElementById("noteDetail"); 
    select.append(division); 
}


const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if (id) {
    document.getElementById("noteId").value = id;
}


async function fetchBookDetail(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(`http://localhost:3000/noteDetail/${id}`); 
    const data = await response.json(); 
    //console.log(data.value.rows[0]); 
    data.value.rows.forEach(element => {
        notesDetailCreation(element.id, element.note); 
    }); 
}

fetchBookDetail(); 