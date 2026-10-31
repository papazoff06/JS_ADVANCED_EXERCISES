function solve() {
 let buttonsRef = document.getElementsByClassName('quiz-answer');
 let buttons = Array.from(buttonsRef)
 buttons.forEach((el => el.addEventListener('click', showAnswer)));
 let sections = document.getElementsByTagName('section');
 let result = document.getElementById('results').getElementsByClassName('results-inner')[0].getElementsByTagName('h1')[0];
 
let rightAnswers = 0;

let obj = {
    'Question #1: Which event occurs when the user clicks on an HTML element?': "onclick",
    'Question #2: Which function converting JSON to string?': "JSON.stringify()",
    'Question #3: What is DOM?': "A programming API for HTML and XML documents"
}


 function showAnswer(ev){
    let questionRef = ev.target.parentNode.parentNode.parentNode.getElementsByClassName('question-wrap')[0].getElementsByTagName('h2')[0];
    let question = questionRef.textContent;
    let answer = ev.target.textContent;
    let curentSection = ev.target.parentNode.parentNode.parentNode.parentNode;
    
    if(obj[question] === answer){
        rightAnswers ++;
        ev.target.removeEventListener('click', showAnswer);
    }
    if(curentSection !== sections[2]){
        curentSection.nextElementSibling.style.display = 'block';
        curentSection.style.display = 'none'
    }else{
        
        sections[0].style.display = 'none';
        sections[1].style.display = 'none';
        sections[2].style.display = 'none';
        document.getElementById('results').style.display = 'block';           
    }

        if(rightAnswers < 3){
            result.textContent = `You have ${rightAnswers} right answers`
        }else{
            result.textContent = "You are recognized as top JavaScript fan!"
        }
    }
}
