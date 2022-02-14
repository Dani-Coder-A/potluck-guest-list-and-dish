// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// asign dishes only appears when guest list full
const assignButton = document.querySelector(".assign");
// asign items targets assigned dish per guest
const assignedItems = document.querySelector(".assigned-items");

//Add Event Listener and Create Element
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    //let listItem = document.createElement("li");
    //listItem.innerText = guest;
    //guestList.append(listItem);
    addToList(guest);
  }
  clearInput();
  updateGuestCount();
  //console.log(guest);
});

//Clear Input Box
const clearInput = function () {
  guestInput.value = "";
};

//Refactor Code
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//Limit Guest List
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//Build an Array and Loop through Array
const assignItems = function () {
  const potluckItems = [
    "green beans",
    "mashed potatoes",
    "mac and cheese",
    "baked beans",
    "pulled pork",
    "fried chicken",
    "chips",
    "salad",
    "veggie casserole",
    "cookies",
    "fruit",
    "beverages"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
