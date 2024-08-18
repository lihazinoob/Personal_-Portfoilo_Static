const hamburger = document.querySelector('.menuham');
const navLinks = document.querySelector('.list');
const linksfornavigation = document.querySelectorAll('.navlink');

hamburger.addEventListener('click', function()
{
  hamburger.classList.toggle('is-active');
  navLinks.classList.toggle('open');
  console.log("clicked");

});

linksfornavigation.forEach(link => {
  link.addEventListener('click', function()
  {
    hamburger.classList.remove('is-active');
    navLinks.classList.remove('open');
  });
  });


