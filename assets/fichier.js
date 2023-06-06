
document.addEventListener('DOMContentLoaded', function() {
//flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

//éléments du carrousel
const imgBanniere= document.querySelector('.banner-img');
const points = document.querySelectorAll('.dot');
const texteBanniere = document.querySelector('p');
  
// Variables pour le suivi de l'état du carrousel
let index = 0;
let nbreSlides = points.length;
  
// Fonction pour mettre à jour le carrousel avec le slide suivant
function prochaineSlide() {
//slide actuel
  index = (index + 1) % nbreSlides;
  pointActif();
//image
  imgBanniere.src = './assets/images/slideshow/' + slides[index].image;
// Mettre à jour le texte correspondant à l'image
  texteBanniere.innerHTML = slides[index].tagLine;
}

//slide précédent
function SlidePrécédente() {
//index du slide actuel
  index = (index - 1 + nbreSlides) % nbreSlides;
  pointActif();
//image
  imgBanniere.src = './assets/images/slideshow/' + slides[index].image;
//texte correspondant à l'image
  texteBanniere.innerHTML = slides[index].tagLine;
}
  
//point actif
function pointActif() {
  points.forEach(function(dot, i) {
    if (i == index) {
      dot.classList.add('dot_selected');
    } 
    else {
      dot.classList.remove('dot_selected');
      }
    });
}

pointActif();
  
arrowLeft.addEventListener('click', function() {
  SlidePrécédente();
});
arrowRight.addEventListener('click', function() {
  prochaineSlide();
});
})