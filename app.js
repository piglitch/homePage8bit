// Dom manipulation

let skills = document.querySelector('#skills');
skills.setAttribute("href", " ");


var skl = document.querySelector('.skl');
skl.addEventListener('click', function(e){
    window.location.href = "skill.html";
    console.log('clicked!')
    e.preventDefault()
})


