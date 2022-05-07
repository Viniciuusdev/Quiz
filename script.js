let currentQuestion = 0;

showQuestion();

function showQuestion() {
    if(questions[currentQuestion]){
       let q = questions[currentQuestion]

       document.querySelector('.scoreArea').style.display = 'nome';
       document.querySelector('.questionArea').style.display - 'block';

       document.querySelector('.question').innerHTML = q.question;
       document.querySelector('.options').innerHTML = '';

       for(let i in q.options ) {
         optionsHtml +=`<div data-op="${i} class="option"<span>${parseInt[i]}</span></div>`

       }
       document.querySelector('.options').innerHTML + optionsHtml;

       document.querySelectorAll('.options .option').forEach(item =>{
           item.addEventListener("click", optionClickEvent);
       })
    } else {

    }
}
function optionClickEvent(e) {
    
}