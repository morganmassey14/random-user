// import {makeDateNow} from './main.js';
function makeDateNow(date) {
    var d = new Date(date);
    var n = d.toLocaleDateString();
    return n
  }
export const userList = (userObject) => {
    return `
      <section class="userInformation">
        <h2 class="user__name">${userObject.name.first}</h2>
        <img class="user__image" src="${userObject.picture.medium}" />
        <p class="user__age">age: ${userObject.dob.age}<p>
        <p class="user__dob">date of birth: ${makeDateNow(userObject.dob.date)}<p>
        <p class="user__email">email: ${userObject.email}<p>
        <p class="user__phone">home phone: ${userObject.phone}<p>
        <p class="user__cell">cell phone: ${userObject.cell}<p>
        <p class="user__country">country: ${userObject.location.country}<p>
        <p class="user__state">state: ${userObject.location.state}<p>
        <p class="user__city">city: ${userObject.location.city}<p>
        <p class="user__nationality">nationality: ${userObject.nat}<p>
        <p class="user__date">date joined: ${makeDateNow(userObject.registered.date)}<p>
        <p class="user__registeredyears">member years: ${userObject.registered.age}<p>

      </section>
    `
  }
