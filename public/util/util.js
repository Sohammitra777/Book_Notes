export const url = "http://localhost:3000"; 

async function viewContent(id){
    window.location.href = `/noteDetail/noteDetail.html?id=${id}`;
}

async function deleteBook(id){
    const theDiv = document.getElementById(id);
    theDiv.remove(); 
    const response = await fetch(url + '/deleteBook/' + id, {method:'DELETE'}); 
    //const data = await response.json();
    location.reload(); 
    //console.log(data.deleted); 
}

function bookDivCreation(data){ 
    //console.log(data); 
    //div creation
    const division = document.createElement("div");
    
    

    //div child creation
    const seperationDiv1 = document.createElement("div"); 
    const seperationDiv2 = document.createElement("div"); 
    const head = document.createElement("h2");
    const rateHead = document.createElement("h4");
    const viewButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    //setting Attribute
    division.setAttribute("class", "books");
    division.setAttribute("id", data.id); 
    seperationDiv1.setAttribute("class", "div1"); 
    seperationDiv2.setAttribute("class", "div2"); 

    //including contents
    head.textContent = data.name; 
    rateHead.textContent = "Rating : " + data.rating; 
    viewButton.textContent = "Add / View Note"
    deleteButton.textContent = "Delete Book"; 

    //appending division childs
    seperationDiv1.append(head, rateHead); 
    seperationDiv2.append(viewButton, deleteButton); 
    division.append(seperationDiv1, seperationDiv2); 

    //inserting inside parent div
    const select = document.getElementById("main");  
    select.append(division); 

    //adding event Listner
    viewButton.addEventListener("click", () => viewContent(data.id)); 
    deleteButton.addEventListener("click", () => deleteBook(data.id));

}

export async function fetchUserDetail(getRequest, threeOnly){
    const response = await fetch(url + getRequest);
    const data = await response.json(); 
    //console.log(data.users[0]); 
    if (threeOnly) for (let i = 0; i < 3 && data.users[i] !== undefined; i++) bookDivCreation(data.users[i]);
    else data.users.forEach(element =>  bookDivCreation(element));
}