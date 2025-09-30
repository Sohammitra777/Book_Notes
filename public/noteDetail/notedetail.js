function notesDetailCreation(element){
    //div creation
    const division = document.createElement("div");
    division.textContent = element;
    const select = document.getElementById("noteDetail"); 
    select.append(division); 
}

async function fetchBookDetail(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(`http://localhost:3000/bookdetail/${id}`); 
    const data = await response.json(); 
    notesDetailCreation(data.value.rows[0].note); 
}

fetchBookDetail(); 