import { fetchUserDetail } from "../util/util.js";

const sortPost = document.querySelector("#sort");
const parentDiv = document.getElementById("main");

sortPost.addEventListener("click", () => {
  parentDiv.classList.add("fade-out");
  setTimeout(() => {
    parentDiv.innerHTML = "";
    const isRating = sortPost.textContent.includes("Rating");
    sortPost.textContent = isRating ? "SORT BY : A to Z" : "SORT BY : Rating";
    fetchUserDetail(isRating ? "/ratingDetails" : "/atozDetails", false);
    parentDiv.classList.remove("fade-out");
  }, 300);
});

fetchUserDetail("/atozDetails", false);
