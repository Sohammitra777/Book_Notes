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

function getId(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id; 
}

async function fetchBookDetail(){
    const id = getId(); 
    const response = await fetch(`http://localhost:3000/noteDetail/${id}`); 
    const data = await response.json(); 
    //console.log(data.value.rows[0]); 
    data.value.rows.forEach(element => {
        notesDetailCreation(element.id, element.note); 
    }); 
}

async function plus(value){
    await fetch(
        url + '/noteSubmit', 
        {
            method : "POST", 
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                id : getId(), 
                note : value
            })

        }
    )
}

function addingNote(){
    const plusButton = document.getElementById("plusButton");
    const text = document.getElementById("note"); 
    
    plusButton.addEventListener("click", () => {
        if(text.value == "") alert("Please fill the required field"); 
        else{
            plus(text.value);
            setTimeout(() => {
                location.reload();
            }, 5000);
        }    
    })
    text.value = ""; 
}

addingNote(); 

fetchBookDetail(); 