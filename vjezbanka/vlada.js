var toggleButton = document.querySelector('.toggle-button');
var mobilenav = document.querySelector('.mobile-nav');
var closebuttom = document.querySelector('.close-button');

toggleButton.addEventListener('click', function() {
  mobilenav.classList.add('open')
})

closebuttom.addEventListener('click', function() {
  mobilenav.classList.remove('open')
});