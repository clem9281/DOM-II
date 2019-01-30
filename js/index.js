// Your code goes here

let bus = document.querySelector(".intro img");
let panelImages = document.querySelectorAll(".img-content img");
let modal = document.querySelector(".modal");
let home = document.querySelector(".home");
let buttons = document.querySelectorAll(".btn");
let modalExit = document.getElementById("modal-exit");
let links = Array.from(document.getElementsByTagName("a"));
let nav = document.querySelector("header");
let destinationText = document.querySelectorAll(".destination");
let colors = ["#DD6A52", "#DD6A52", "#E3E3C7", "#9CDBC7", "#68B5AB"];
let welcome = document.querySelector(".intro h2");
let boat = document.querySelector(".content-destination img");
// event 1 : mouseleave
//displays cta modal when mouse leaves document: had to use a named function in order to remove the event listener. click outside the modal to get rid of it, or use exit button
function displayModal() {
  modal.className += " modal-animation";
  home.addEventListener("click", homeEvent => {
    homeEvent.stopPropagation();
    modal.style.display = "none";
    document.removeEventListener("mouseleave", displayModal);
  });
}
document.addEventListener("mouseleave", displayModal);

// modal exit
modalExit.addEventListener("click", event => {
  event.stopPropagation();
  modal.style.display = "none";
  document.removeEventListener("mouseleave", displayModal);
});

// event 2: click: THIS IS ALSO THE NESTED ELEMENT, WITHOUT STOP PROPAGATION THE DESTINATION TEXT TURNS RED WHEN YOU CLICK THE SIGN ME UP BUTTON
destinationText[0].addEventListener("click", event => {
  destinationText[0].style.color = "red";
});

buttons[0].addEventListener("click", event => {
  event.stopPropagation();
  destinationText[0].style.transform = "scale(1.2)";
  console.log("button 0 event");
});

// event 3 : mouseover
buttons[1].addEventListener("mouseover", event => {
  event.stopPropagation();
  destinationText[1].style.background = "#17A2B8";
  destinationText[1].style.color = "white";
  console.log("button 1 event");
});

// event 4: mouseout
buttons[1].addEventListener("mouseout", event => {
  event.stopPropagation();
  destinationText[1].style.background = "white";
  destinationText[1].style.color = "black";
  console.log("button 1 event");
});

//event 5: mousedown
buttons[2].addEventListener("mousedown", event => {
  event.stopPropagation();
  destinationText[2].style.transform = `skew(-15deg)`;
});

//event 6: mouseup
buttons[2].addEventListener("mouseup", event => {
  event.stopPropagation();
  destinationText[2].style.transform = `skew(0deg)`;
});

//event 7: load
// when the bus image loads outline it
bus.addEventListener("load", event => {
  event.stopPropagation();
  bus.style.border = "10px solid #17A2B8";
  console.log("bus load event");
});

//event 8: scroll
// when the window scrolls make the nav flash different colors
document.addEventListener("scroll", () => {
  nav.style.background = colors[Math.floor(Math.random() * colors.length)];
});

// event 9 focus
// links get focus when clicked, but don't lose focus until another focusable element gets focus
links.forEach(element => {
  element.addEventListener("focus", event => {
    element.style.transform = "scale(1.2)";
    element.style.color = "#17A2B8";
    console.log("focused");
  });
});

// event 10:  blur
// when links lose focus return them to previous size
links.forEach(element => {
  element.addEventListener("blur", event => {
    element.style.transform = "scale(1)";
    element.style.color = "black";
    console.log("lost focus");
  });
});

// Stop the navigation from items from refreshing the page by using preventDefault()
links.forEach(element => {
  element.addEventListener("click", event => {
    event.preventDefault;
  });
});

// GSAP
let boatTimeline = new TimelineMax();
console.log(boat);
boat.addEventListener("click", event => {
  boatTimeline
    .to(event.target, 1, { transform: "scale(2)" })
    .to(event.target, 1, {
      transform: "scale(1)"
    });
});
