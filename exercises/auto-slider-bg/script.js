const homePage = document.querySelector(".home-page");
const dot = document.getElementsByClassName('dot');
let indexImage = 0, indexDot = 0;
dot[0].classList.add('active-dot');

const changeSlidesAutomatic = () => {
  const bgImages = ["url('img/img 1.png')", "url('img/img2.png')", "url('img/img3.png')", "url('img/img4.png')", "url('img/img5.png')"];
  if (indexImage && indexDot > dot.length - 1) {
    indexImage = 0;
    indexDot = 0;
  }
  
  if (indexImage === indexDot) {
      homePage.style.backgroundImage = bgImages[indexImage];
      activeDot = dot[indexDot].classList.add('active-dot');
    }
    for (i = 0; i < dot.length; i++) {
      if(i !== indexImage) {
        dot[i].classList.remove('active-dot');
      }
    }
    indexImage++;
    indexDot++;
}


const changeSlideUsingDots = (pressedDot) => {
  
  switch (pressedDot)
  {
    case 1: homePage.style.backgroundImage = "url('img/img 1.png')";
    indexDot = 1; indexImage = 1;
    break;
    case 2: homePage.style.backgroundImage = "url('img/img2.png')";
    indexDot = 2; indexImage = 2;
    break;
    case 3: homePage.style.backgroundImage = "url('img/img3.png')";
    indexDot = 3; indexImage = 3;
    break;
    case 4: homePage.style.backgroundImage = "url('img/img4.png')";
    indexDot = 4; indexImage = 4;
    break;
    case 5: homePage.style.backgroundImage = "url('img/img5.png')";
    indexDot = 5; indexImage = 5;
    break;
  }
  
  for (i = 0; i < dot.length; i++) {
    if (pressedDot-1 === i) {activeDot = dot[i].classList.add('active-dot');}
    else {dot[i].classList.remove('active-dot');}
  }
}
setInterval(changeSlidesAutomatic, 4000);
