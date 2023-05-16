// Dom manipulation


function updateSkillsLink() {
    let skills = document.getElementById('skills');
    skills.setAttribute('href', '');
  }
  
  function redirectToSkillPage(event) {
    event.preventDefault();
    window.location.href = 'skill.html';
  }
  
  function updateDescriptionText() {
    let description = document.getElementById('js');
    description.innerText = "JavaScript: JavaScript's DOM manipulation capabilities are indispensable for web development. With methods like getElementById, querySelector, and appendChild, developers can dynamically modify HTML, CSS, and content. Whether it's updating text, adding elements, or altering styles, JavaScript empowers developers to create interactive and responsive web applications with ease.";
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
  