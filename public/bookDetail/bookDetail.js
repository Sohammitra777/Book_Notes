const url = "http://localhost:3000"; 

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
    head.textContent = data.bookName; 
    rateHead.textContent = "Rating : "
    ratePara.textContent = data.Rating; 
    editButton.textContent = "View/Edit Book"
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

async function fetchUserDetail(){
    const response = await fetch(url + '/details');
    const data = await response.json();
    data.users.forEach(element => {
        bookDivCreation(element); 
    });
}

fetchUserDetail(); 