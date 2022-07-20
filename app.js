const accordion = document.getElementsByClassName('acordion');
const answer = document.querySelector('.answer');
const container = document.querySelector('.main-containe')

// console.log(answer);
// console.log(accordion.length);

for (let i = 0; i< accordion.length; i++) {


    accordion[i].addEventListener('click', function(){       
      
       this.classList.toggle('active');
        
    })





    }

        

        
