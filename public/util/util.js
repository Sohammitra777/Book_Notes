export const url = "http://localhost:3000"; 

async function viewContent(id) {
  window.location.href = `/noteDetail/noteDetail.html?id=${id}`;
}

async function deleteBook(id) {
  document.getElementById(id)?.remove(); 
  await fetch(`${url}/deleteBook/${id}`, { method: 'DELETE' }); 
  location.reload();
}

function bookDivCreation({ id, name, rating }) { 
  const division = Object.assign(document.createElement("div"), { className: "books", id });

  const head = Object.assign(document.createElement("h2"), { textContent: name });
  const rateHead = Object.assign(document.createElement("h4"), { textContent: `Rating : ${rating}` });
  
  const viewButton = Object.assign(document.createElement("button"), { textContent: "Add / View Note" });
  const deleteButton = Object.assign(document.createElement("button"), { textContent: "Delete Book" });

  viewButton.addEventListener("click", () => viewContent(id)); 
  deleteButton.addEventListener("click", () => deleteBook(id));

  const seperationDiv1 = Object.assign(document.createElement("div"), { className: "div1" });
  const seperationDiv2 = Object.assign(document.createElement("div"), { className: "div2" });

  seperationDiv1.append(head, rateHead);
  seperationDiv2.append(viewButton, deleteButton);
  division.append(seperationDiv1, seperationDiv2);

  document.getElementById("main").append(division);
}

export async function fetchUserDetail(getRequest, threeOnly) {
  const { users } = await (await fetch(url + getRequest)).json();
  (threeOnly ? users.slice(0, 3) : users).forEach(bookDivCreation);
}
