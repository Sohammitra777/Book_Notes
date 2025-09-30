const url = "http://localhost:3000"; 

const sortPost = document.querySelector("#sort"); 
sortPost.addEventListener("click", () => {
    if(sortPost.textContent === "SORT BY : Rating"){
        sortPost.textContent = "SORT BY : A to Z"; 
        const parentDiv = document.getElementById('main');
        parentDiv.innerHTML = '';   
        fetchUserDetail('/ratingDetails'); 
    }
    else{
        sortPost.textContent = "SORT BY : Rating"; 
        const parentDiv = document.getElementById('main');
        parentDiv.innerHTML = '';   
        fetchUserDetail('/atozDetails');
    }
})

async function viewAndEditContent(id){
    window.location.href = `/noteDetail/noteDetail.html?id=${id}`;
}

async function deleteBook(id){
    const theDiv = document.getElementById(id);
    theDiv.remove(); 
    const response = await fetch(url + '/deleteBook/' + id, {method:'DELETE'}); 
    const data = await response.json();
    console.log(data.deleted); 
}

function bookDivCreation(data){ 
    //console.log(data); 
    //div creation
    const division = document.createElement("div");
    
    //setting Attribute
    division.setAttribute("class", "books");
    division.setAttribute("id", data.id); 

    //div child creation
    const head = document.createElement("h4");
    const rateHead = document.createElement("h4"); 
    const ratePara = document.createElement("p"); 
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    //including contents
    head.textContent = data.name; 
    rateHead.textContent = "Rating : "
    ratePara.textContent = data.rating; 
    editButton.textContent = "View Note"
    deleteButton.textContent = "Delete Book"; 

    //appending division childs
    division.append(head, rateHead, ratePara, editButton, deleteButton); 

    //inserting inside parent div
    const select = document.getElementById("main");  
    select.append(division); 

    //adding event Listner
    editButton.addEventListener("click", () => viewAndEditContent(data.id)); 
    deleteButton.addEventListener("click", () => deleteBook(data.id));

}

export async function fetchUserDetail(getRequest, threeOnly){
    const response = await fetch(url + getRequest);
    const data = await response.json(); 
    if (threeOnly) for (let i = 0; i < 3 && data.users[i] !== undefined; i++) bookDivCreation(data.users[i]);
    else data.users.forEach(element =>  bookDivCreation(element));
}