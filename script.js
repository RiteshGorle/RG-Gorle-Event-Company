//SECTION 01: PRELOADER START

$(document).ready(function() {
  setTimeout(function() {
    $('#container').addClass('loaded');
    // Once the container has finished, the scroll appears
    if ($('#container').hasClass('loaded')) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $('#preloader').delay(100).queue(function() {
        $(this).remove();
      });}
  }, 700);});
//SECTION 01: PRELOADER END



// SECTION 02 SIGN UP BUTTON MODAL
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// SECTION 02 SIGN UP BUTTON END



//SECTION 04: TYPEWRTING TEXT START
var i = 0;
var txt = 'Life is an Event, Make it Memorable & Our Business is Making Memories.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
   
    document.getElementById("demo").style.fontFamily = "sans-serif";
    document.getElementById("demo").style.fontSize = "x-large";
    document.getElementById("demo").style.fontWeight = "900";
    document.getElementById("demo").style.color = "red";
    i++;
    setTimeout(typeWriter, speed);
  }
}
//SECTION 04: TYPEWRTING TEXT END




// SECTION 07:  BUY PLAN BUTTON MODAL START
// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// SECTION 07:  BUY PLAN BUTTON MODAL END



//SECTION 09:  TESTIMONIALS START

const sliderElm = document.querySelector(".slider-container .slider");
const btnLeft = document.querySelector(".slider-container .btn-left");
const btnRight = document.querySelector(".slider-container .btn-right");

const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

// Functions:
function moveSlider() {
  let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
  sliderElm.style.marginLeft = -leftMargin + "px";
  console.log(sliderElm.clientWidth, leftMargin);
}
function moveLeft() {
  if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
  else idxCurrentSlide--;

  moveSlider();
}
function moveRight() {
  if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
  else idxCurrentSlide++;

  moveSlider();
}

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);
//SECTION 09:  TESTIMONIALS END