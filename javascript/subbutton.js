var btn = document.querySelector('.btn-sub');
var icon = document.querySelector('.far');
btn.addEventListener('click', function() {
  btn.textContent = "Subscribed";
  btn.style.background = '#e5e5e5';
  btn.style.color = '#606060';
  icon.style.display = 'block';
});

icon.addEventListener('click', function() {
  icon.style.pointerEvents = "none"; 
  icon.style.color = "#0374c4";
});