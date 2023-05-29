var count = 0;
var inc = 0;
var margin = 0;
var slider = document.querySelector(".slider-width");
var itemDisplay = 0;

if (screen.width > 1439) {
  itemDisplay = document
    .querySelector(".slider-container")
    .getAttribute("item-display-d");
  //  margin = itemDisplay * 7;
  
}
if (screen.width > 767 && screen.width < 1440) {
  itemDisplay = document
    .querySelector(".slider-container")
    .getAttribute("item-display-t");
  // margin = itemDisplay * 6.8;
}
if (screen.width > 359 && screen.width < 768) {
  itemDisplay = document
    .querySelector(".slider-container")
    .getAttribute("item-display-m");
  // margin = itemDisplay * 20;
}

var items = document.querySelectorAll(".item");

var itemleft = items.length % itemDisplay;
var itemslide = Math.floor(items.length / itemDisplay) - 1;
// for (let i = 0; i < items.length; i++) {
//   items[i].style.width = screen.width / itemDisplay - margin + "px";
// }

function next() {
  if (inc !== itemslide + itemleft) {
    if (inc == itemslide) {
      inc = inc + itemleft;
      count = count - (screen.width / itemDisplay) * itemleft;
    } else {
      inc++;
      count = count - screen.width;
    }
  }
  slider.style.left = count + "px";
}

function prev() {
  if (inc !== 0) {
    if (inc == itemleft) {
      inc = inc - itemleft;
      count = count + (screen.width / itemDisplay) * itemleft;
    } else {
      inc--;
      count = count + screen.width;
    }
  }

  slider.style.left = count + "px";
}
