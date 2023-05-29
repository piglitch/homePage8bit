// Dom manipulation


function updateSkillsLink() {
    let skills = document.getElementById('skills');
    skills.setAttribute('href', '');
}
  
function redirectToSkillPage(event) {
  event.preventDefault();
  window.location.href = 'skill.html';
}
  
function updateContact() {
  let accordion = document.getElementsByClassName('accordion-container');
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }
}


// Call shared functions on specific pages
if (document.getElementById('skills')) {
  updateSkillsLink();
}
  
if (document.getElementById('skl')) {
  var skl = document.getElementById('skl');
  skl.addEventListener('click', redirectToSkillPage);
}
  
if (document.getElementById('js')) {
  updateDescriptionText();
}

if (document.getElementsByClassName('accordion-container')){
  updateContact();
}


