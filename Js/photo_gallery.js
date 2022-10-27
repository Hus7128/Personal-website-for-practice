
function currentSlide(n) {

  //This function has 3 small functions
  //1.click thumbnail to display the large photo
  //2.click thumbnail to display the title and description
  //3.light the chosen thumbnail by changing css(add a new class name)

  // i,j,k for count
  let i = 0;
  let j = 0;
  let k = 0

  //slide for control wwhick slide to display
  let slides = document.getElementsByClassName("mySlides");

  //dispaly each before this slide, incase every one stands there
  do {
    slides[i].style.display = "none";
    i++
  } while (i < slides.length);
  
  //choose to show the given one here, all slides are stored in slides[] like arraylist
  slides[n-1].style.display = "block";


  //control text to display
  let texts = document.getElementsByClassName("myTexts");
  
  //same reason as slides
  do {
    texts[j].style.display = "none";
    j++
  } while (j < slides.length);
  
  // same use like slides
  texts[n-1].style.display = "block";


  // thumbnail is each small image
  let doc = document.getElementsByClassName("thumbnail");

  // incase each image you click before become active, so we clean it before each time we show a new one
  // just add a new name which has opacity == 1 in css
  do {
    doc[k].className = doc[k].className.replace(" active", "");
    k++
  } while (k < doc.length);

  // make the one you click to active
  doc[n-1].className += " active";

}

