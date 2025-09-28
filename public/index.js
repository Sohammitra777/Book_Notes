const url = "http://localhost:3000"; 

const viewEdit = document.querySelector("#viewEdit > button")
viewEdit.addEventListener("click", () => window.location.href = 'bookDetail/bookDetail.html'); 

async function viewAndEditContent(id){
    window.location.href = `noteDetail/noteDetail.html?id=${id}`;
}

async function deleteBook(id){
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
    division.append(head); 
    division.append(rateHead); 
    division.append(ratePara); 
    division.append(editButton); 
    division.append(deleteButton);

    //inserting inside parent div
    const select = document.getElementById("bookShown");  
    select.append(division); 

    //adding event Listner
    editButton.addEventListener("click", () => viewAndEditContent(data.id)); 
    deleteButton.addEventListener("click", () => deleteBook(data.id));

}

export async function fetchUserDetail(){
    const response = await fetch(url + '/details');
    const data = await response.json(); 
    for(let i = 0; i<3; i++)  {
        if(data.users[i] === undefined) break; 
        bookDivCreation(data.users[i]);   
    }; 
    // data.users.forEach(element =>  bookDivCreation(element));
}

fetchUserDetail(); 




