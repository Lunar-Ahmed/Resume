var i = 0;
var txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corrupti esse cupiditate, porro consequatur aperiam libero quibusdam dolorem nulla facere? Aspernatur, sapiente nesciunt ratione alias reiciendis ipsum ullam consequatur exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corrupti esse cupiditate, porro consequatur aperiam libero quibusdam dolorem nulla facere? Aspernatur, sapiente nesciunt ratione alias reiciendis ipsum ullam consequatur exercitationem.'
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

const progressBar = document.querySelector('.progress-bar');
const progressValue = 50; // Example: 50% progress

progressBar.style.width = `${progressValue}%`;


progressBar.style.width = `${progressValue}%`;