var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/kosmos-elite-dangerous-planeta-korabl-pilot.jpg") {
    myImage.setAttribute("width", "600");
    myImage.setAttribute("src", "images/elite-dangerous-horizon-asteroid-belt-infinite-cosmos.jpg");
  } else {
    myImage.setAttribute("src", "images/kosmos-elite-dangerous-planeta-korabl-pilot.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your nickname.");
    localStorage.setItem("nickname", myName);
    myHeading.textContent = "o7, cmdr " + myName + "!";
}

if (!localStorage.getItem("nickname")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("nickname");
    myHeading.textContent = "o7, cmdr " + storedName + "!";
}

myButton.onclick = function () {
    setUserName();
};