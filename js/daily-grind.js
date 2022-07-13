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

  case 2:
    today = "Tuesday";

    coffee = {
      color: "orangered",
      name: "Pumpkin Spice Latte",
      pic: "images/pumpkin-spice-latte.jpg",
      alt: "A picture of a pumpkin spice latte in an orange mug",
      day: "Tuesday",
      desc: `Treat yourself on a Tuesday, with our cozy Pumpkin Spice Latte`,
    };

    break;

  case 3:
    today = "Wednesday";

    coffee = {
      color: "maroon",
      name: "Cold Brew",
      pic: "images/cold-brew.jpg",
      alt: "A picture of two glasses of cold brew coffee drinks",
      day: "Wednesday",
      desc: `Cool off with our refreshing Cold Brews`,
    };

    break;

  case 4:
    today = "Thursday";

    coffee = {
      color: "navy",
      name: "Drip Coffee",
      pic: "images/drip.jpg",
      alt: "A mug of black drip coffee",
      day: "Thursday",
      desc: `Friday is almost here! Time to push through with our classic Drip Coffee`,
    };
    break;

  case 5:
    today = "Friday";

    coffee = {
      color: "palevioletred",
      name: "Caramel Latte",
      pic: "images/caramel-latte.jpg",
      alt: "A glass of a caramel latte",
      day: "Friday",
      desc: `You made it to Friday! Enjoy an sweet and creamy Caramel Latte`,
    };
    break;

  case 6:
    today = "Saturday";

    coffee = {
      color: "seagreen",
      name: "Frappaccino",
      pic: "images/frappaccino.jpg",
      alt: "A glass of frappaccino, with a green straw",
      day: "Saturday",
      desc: `It's Saturday! Time to enjoy a nice, cold, refreshing frappacino`,
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
