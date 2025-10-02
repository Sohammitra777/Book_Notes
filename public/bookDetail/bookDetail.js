import { fetchUserDetail } from "../util/util.js";

const sortPost = document.querySelector("#sort"); 
const parentDiv = document.getElementById("main");
sortPost.addEventListener("click", () => {
    parentDiv.classList.add("fade-out");
    setTimeout(() => {
        parentDiv.innerHTML = "";

        if(sortPost.textContent === "SORT BY : Rating"){
            sortPost.textContent = "SORT BY : A to Z"; 
            fetchUserDetail('/ratingDetails', false); 
        } else {
            sortPost.textContent = "SORT BY : Rating"; 
            fetchUserDetail('/atozDetails', false);
        }
        parentDiv.classList.remove("fade-out");
    }, 300); 
});

fetchUserDetail('/atozDetails', false)