function solve() {
 let buttonsRef = document.getElementsByClassName('answer-text');

 Array.from(buttonsRef).forEach((el => el.addEventListener('click', showAnswer)));

 function showAnswer(ev){
  let nextSection = ev.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling;
  nextSection.style.display = 'block'
 }
}
