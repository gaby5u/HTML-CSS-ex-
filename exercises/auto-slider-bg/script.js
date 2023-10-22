const homePage = document.querySelector(".home-page");
const dot = document.getElementsByClassName("dot");
let indexImage = 0,
  indexDot = 0;
dot[0].classList.add("active-dot");

const changeSlidesAutomatic = () => {
  const bgImages = [
    "url('img/img 1.png')",
    "url('img/img2.png')",
    "url('img/img3.png')",
    "url('img/img4.png')",
    "url('img/img5.png')",
  ];
  if (indexImage && indexDot > dot.length - 1) {
    indexImage = 0;
    indexDot = 0;
  }

  if (indexImage === indexDot) {
    homePage.style.backgroundImage = bgImages[indexImage];
    activeDot = dot[indexDot].classList.add("active-dot");
  }
  for (i = 0; i < dot.length; i++) {
    if (i !== indexImage) {
      dot[i].classList.remove("active-dot");
    }
  }
  indexImage++;
  indexDot++;
};

const changeSlideUsingDots = (pressedDot) => {
  switch (pressedDot) {
    case 1:
      homePage.style.backgroundImage = "url('img/img 1.png')";
      indexDot = 1;
      indexImage = 1;
      break;
    case 2:
      homePage.style.backgroundImage = "url('img/img2.png')";
      indexDot = 2;
      indexImage = 2;
      break;
    case 3:
      homePage.style.backgroundImage = "url('img/img3.png')";
      indexDot = 3;
      indexImage = 3;
      break;
    case 4:
      homePage.style.backgroundImage = "url('img/img4.png')";
      indexDot = 4;
      indexImage = 4;
      break;
    case 5:
      homePage.style.backgroundImage = "url('img/img5.png')";
      indexDot = 5;
      indexImage = 5;
      break;
  }

  for (i = 0; i < dot.length; i++) {
    if (pressedDot - 1 === i) {
      activeDot = dot[i].classList.add("active-dot");
    } else {
      dot[i].classList.remove("active-dot");
    }
  }
};
setInterval(changeSlidesAutomatic, 4000);

// toggleMenu
const toggleMenu = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

//cronology-years
const carousel = document.querySelector(".carousel");

const arrowIcons = document.querySelectorAll(".wrapper i");
firstYear = carousel.querySelectorAll("p")[0];

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstYearWidth = 140;
    carousel.scrollLeft +=
      icon.id == "left-arrow" ? -firstYearWidth : firstYearWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

// Modal-year
const infoCronologySlider = {
  An1954: [
    1954,
    "Alex Katz: Retrospectivă la Muzeul Whitney de Artă Americană.",
  ],
  An1968: [1968, "text2"],
  An1974: [1974, "text3"],
  An1986: [
    1986,
    "Alex Katz: Retrospectivă la Muzeul Whitney de Artă Americană.",
  ],
  An1996: [1996, "text2"],
  An2000: [2000, "text2"],
  An2003: [2003, "text2"],
  An2006: [2006, "text2"],
  An2009: [2009, "text2"],
  An2012: [2012, "text2"],
  An2015: [2015, "text2"],
  An2018: [2018, "text2"],
  An2021: [2021, "text2"],
  An2022: [2022, "text2"],
  An2023: [2023, "text2"],
};
const modal = document.getElementById("modal");
const createModule = (pressedYear) => {
  modal.style.display = "block";
  const titleYearModal = document.querySelector(".modal-content .year");
  const textYearModal = document.querySelector(".modal-content .text");

  for (const property in infoCronologySlider) {
    if (pressedYear === infoCronologySlider[property][0]) {
      titleYearModal.textContent = infoCronologySlider[property][0];
      textYearModal.textContent = infoCronologySlider[property][1];
    }
  }
};

const closeModal = () => {
  modal.style.display = "none";
};

//------------------------------alex-katz-carousel-img-------------------------------

const image = document.querySelectorAll(".image-container img");
const dotsArtistCarousel = document.querySelectorAll(
  ".dots-artist-carousel span"
);
let isActive = false;

const toggleImage = (imageIndex) => {
  for (i = 0; i < image.length; i++) {
    if (i != imageIndex - 1) {
      image[i].classList.remove("active-image");
      image[i].classList.add("inactive-image");
      dotsArtistCarousel[i].classList.remove("active-dot-artist-carousel");
      isActive = true;
    }
  }
  if (image[imageIndex - 1].classList == "inactive-image") {
    image[imageIndex - 1].classList.remove("inactive-image");
    image[imageIndex - 1].classList.add("active-image");

    dotsArtistCarousel[imageIndex - 1].classList.add(
      "active-dot-artist-carousel"
    );
    isActive = true;
  } else {
    image[imageIndex - 1].classList.remove("active-image");
    image[imageIndex - 1].classList.add("inactive-image");
    isActive = false;
  }

  if (isActive === false) {
    dotsArtistCarousel[imageIndex - 1].classList.remove(
      "active-dot-artist-carousel"
    );
  }
};
