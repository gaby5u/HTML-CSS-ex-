const carousel = document.querySelector(".carousel");

let isDragStart = false;
let prevPageX, prevScrollLeft;

const dragStart = (e) => {
  //updating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // console.log (e.pageX);
  //pageX - returns the horizontal coordinate of mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIncons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart); //mousedown - when u click only but dont release the button
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);

const arrowIcons = document.querySelectorAll(".wrapper i");
firstImg = carousel.querySelectorAll("img")[0];
console.log(arrowIcons);

const showHideIncons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting max scrollable width
  //showing and hiding prev/next icon according to carousel scrol left value
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  //if the carousel scroll is 0 then dont show the icon else show
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; //getting first img width & adding 14 margin value
    //if clicked icon is left, redce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIncons(), 60); //calling the showHideIcons after 60ms
  });
});
