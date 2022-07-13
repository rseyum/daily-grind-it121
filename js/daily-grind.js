function coffeeTemplate(coffee) {
  let myReturn = "";

  myReturn += `
    
        <p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}!
		</p>
    
    `;

  return myReturn;
}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("day")) {
  //data on querystring, load from querystring

  myDay = urlParams.get("day");

  //converts to integer as it's a string from the querystring
  myDay = parseInt(myDay);
}

switch (myDay) {
  case 0:
    today = "Sunday";

    coffee = {
      color: "Pink",
      name: "Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "A picture of a bubble tea",
      day: "Sunday",
      desc: `Enjoy a sweet freshly brewed Bubble Tea`,
    };

    break;

  case 1:
    today = "Monday";

    coffee = {
      color: "brown",
      name: "Mocha",
      pic: "images/mocha.jpg",
      alt: "A picture of a mocha",
      day: "Monday",
      desc: `It's okay if it's Monday! Enjoy a Mocha to start off the week`,
    };

    break;

  default:
    today = "Something went wrong!";
}

// let coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);
//loads coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
console.log(coffee);
