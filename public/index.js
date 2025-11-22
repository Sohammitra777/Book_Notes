import { fetchUserDetail, url } from "./util/util.js";

setInterval(() => {
    window.location.reload();
}, 15 * 60 * 1000);

const form = document.getElementById("form");
form.setAttribute("action", url + "/submit");

const sortPost = document.querySelector("#sort");
const parentDiv = document.getElementById("main");
sortPost.addEventListener("click", () => {
    parentDiv.classList.add("fade-out");
    setTimeout(() => {
        parentDiv.innerHTML = "";

        if (sortPost.textContent === "SORT BY : Rating") {
            sortPost.textContent = "SORT BY : A to Z";
            fetchUserDetail("/ratingDetails", true);
        } else {
            sortPost.textContent = "SORT BY : Rating";
            fetchUserDetail("/atozDetails", true);
        }
        parentDiv.classList.remove("fade-out");
    }, 300);
});

const viewEdit = document.querySelector("#viewEdit > h4");
viewEdit.addEventListener(
    "click",
    () => (window.location.href = "bookDetail/bookDetail.html")
);

fetchUserDetail("/atozDetails", true);
