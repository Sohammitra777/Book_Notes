const url = "http://localhost:3000"; 

const sortPost = document.querySelector("#sort"); 
const parentDiv = document.getElementById("main");
sortPost.addEventListener("click", () => {
    parentDiv.classList.add("fade-out");
    setTimeout(() => {
        parentDiv.innerHTML = "";

        if(sortPost.textContent === "SORT BY : Rating"){
            sortPost.textContent = "SORT BY : A to Z"; 
            fetchUserDetail('/ratingDetails', true); 
        } else {
            sortPost.textContent = "SORT BY : Rating"; 
            fetchUserDetail('/atozDetails', true);
        }
        parentDiv.classList.remove("fade-out");
    }, 300); 
});

async function viewAndEditContent(id){
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
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    //setting Attribute
    division.setAttribute("class", "books");
    division.setAttribute("id", data.id); 
    seperationDiv1.setAttribute("class", "div1"); 
    seperationDiv2.setAttribute("class", "div2"); 

    //including contents
    head.textContent = data.name; 
    rateHead.textContent = "Rating : " + data.rating; 
    editButton.textContent = "View Note"
    deleteButton.textContent = "Delete Book"; 

    //appending division childs
    seperationDiv1.append(head, rateHead); 
    seperationDiv2.append(editButton, deleteButton); 
    division.append(seperationDiv1, seperationDiv2); 

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