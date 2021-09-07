import { userdata } from "./userdata.js"
import { userList } from "./user.js";
const randomUser = () => {
	const postElement = document.querySelector(".userInformation");
	userdata().then(apiUser => {	
    postElement.innerHTML = `${userList(apiUser)}`
})
}

randomUser();

console.log("You look marvelous!")
