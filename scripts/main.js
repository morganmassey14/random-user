import { userdata } from "./userdata.js"
import { userList } from "./user.js";
const randomUser = () => {
	const postElement = document.querySelector(".userInformation");
	userdata().then(apiUser => {	
    postElement.innerHTML = `${userList(apiUser)}`
})
}

const navElement = document.querySelector("#randomUser");

navElement.addEventListener("click", (event) => {
	randomUser();
})

randomUser();


console.log("You look marvelous!")
