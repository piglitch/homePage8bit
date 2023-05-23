// Dom manipulation


function updateSkillsLink() {
    let skills = document.getElementById('skills');
    skills.setAttribute('href', '');
}
  
function redirectToSkillPage(event) {
  event.preventDefault();
  window.location.href = 'skill.html';
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
