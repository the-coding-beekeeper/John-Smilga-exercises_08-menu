const menuElements = [{
  name: "buttermilk pancakes",
  image: "images/pancakes.jpg",
  price: "$ 15.99",
  description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
  category: "breakfast"
},
{
  name: "diner double",
  image: "images/burger.jpg",
  price: "$ 13.99",
  description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  category: "lunch"
},
{
  name: "godzilla milkshake",
  image: "images/milkshake.jpg",
  price: "$ 6.99",
  description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  category: "shakes"
},
{
  name: "country delight",
  image: "images/eggs.jpg",
  price: "$ 20.99",
  description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
  category: "breakfast"
},
{
  name: "egg attack",
  image: "images/eggs-burger.jpg",
  price: "$ 22.99",
  description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",
  category: "lunch"
},
{
  name: "oreo dream",
  image: "images/chocolate-shake.jpg",
  price: "$ 18.99",
  description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday ",
  category: "shakes"
},
{
  name: "bacon overflow",
  image: "images/bacon.jpg",
  price: "$ 8.99",
  description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  category: "breakfast"
},
{
  name: "american classic",
  image: "images/classic-burger.jpg",
  price: "$ 12.99",
  description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut ",
  category: "lunch"
},
{
  name: "quarantine buddy",
  image: "images/quarantine.jpg",
  price: "$ 16.99",
  description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. ",
  category: "shakes"
},
{
  name: "bison steak",
  image: "images/steak.jpg",
  price: "$ 22.99",
  description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. ",
  category: "dinner"
}];

const mainEl = document.querySelector(".main");
for (let i=0; i<menuElements.length; i++) {
const menuEl = document.createElement("div");
mainEl.appendChild(menuEl);
menuEl.classList.add("menu-element");
menuEl.innerHTML=`
  <img class="image" src="" alt="pancakes">
  <div class="name-and-price">
    <h2 class="name"></h2>
    <p class="price"></p>
  </div>
  <p class="description"></p>
  `;
const menuEl_image = document.querySelectorAll(".image");
menuEl_image[i].setAttribute("src", menuElements[i].image);
const menuEl_name = document.querySelectorAll(".name");
menuEl_name[i].innerText = menuElements[i].name;
const menuEl_price = document.querySelectorAll(".price");
menuEl_price[i].innerText = menuElements[i].price;
const menuEl_description = document.querySelectorAll(".description");
menuEl_description[i].innerText = menuElements[i].description;
}
function allmeals() {
  const menuEl = document.querySelectorAll(".menu-element");
  menuEl.forEach(el => el.style.display = "block");
}
function breakfast() {
  const menuEl = document.querySelectorAll(".menu-element");
  menuEl.forEach(el => el.style.display = "none");
  for (let i=0; i<menuElements.length; i++) {
    if(menuElements[i].category === "breakfast") {
      menuEl[i].style.display = "block";
    }
  }
}
function lunch() {
  const menuEl = document.querySelectorAll(".menu-element");
  menuEl.forEach(el => el.style.display = "none");
  for (let i=0; i<menuElements.length; i++) {
    if(menuElements[i].category === "lunch") {
      menuEl[i].style.display = "block";
    }
  }
}
function shakes() {
  const menuEl = document.querySelectorAll(".menu-element");
  menuEl.forEach(el => el.style.display = "none");
  for (let i=0; i<menuElements.length; i++) {
    if(menuElements[i].category === "shakes") {
      menuEl[i].style.display = "block";
    }
  }
}
function dinner() {
  const menuEl = document.querySelectorAll(".menu-element");
  menuEl.forEach(el => el.style.display = "none");
  for (let i=0; i<menuElements.length; i++) {
    if(menuElements[i].category === "dinner") {
      menuEl[i].style.display = "block";
    }
  }
}
