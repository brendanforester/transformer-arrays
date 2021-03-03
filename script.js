var wrapEle = document.createElement("div");
var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

function createPerson(prs) {
  var ele = document.createElement("div");
  ele.classList.add("character");
  var imageEle = document.createElement("IMG");
  if (prs.afl == "autobot") {
    ele.classList.add("autobot");
    imageEle.setAttribute(
      "src",
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png"
    );
    ele.appendChild(imageEle);
  } else if (prs.afl == "decepticon") {
    ele.classList.add("decepticon");
    imageEle.setAttribute(
      "src",
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png"
    );
    ele.appendChild(imageEle);
  }
  var nameEle = document.createElement("div");
  nameEle.innerHTML = "Name: " + prs.name;
  ele.appendChild(nameEle);
  var classEle = document.createElement("div");
  classEle.innerHTML = "Class: " + prs.class.toUpperCase();
  ele.appendChild(classEle);
  var vehicleEle = document.createElement("div");
  vehicleEle.innerHTML = "Vehicle: " + prs.vehicle;
  ele.appendChild(vehicleEle);
  if (prs.vehicle == "truck") {
    vehicleEle.style.color = "blue";
  } else if (prs.vehicle == "tank") {
    vehicleEle.style.color = "green";
  } else if (prs.vehicle == "car") {
    vehicleEle.style.color = "gold";
  } else if (prs.vehicle == "plane") {
    vehicleEle.style.color = "white";
  }
  wrapEle.appendChild(ele);
  document.body.appendChild(wrapEle);
}

for (var i = 0; i < chrs.length; i++) {
  createPerson(chrs[i]);
}

// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white