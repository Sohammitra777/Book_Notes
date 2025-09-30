import { fetchUserDetail } from "./util/util.js";

const viewEdit = document.querySelector("#viewEdit > button"); 
viewEdit.addEventListener("click", () => window.location.href = 'bookDetail/bookDetail.html'); 

fetchUserDetail('/atozDetails', true); 