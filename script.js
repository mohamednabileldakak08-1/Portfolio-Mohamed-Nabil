// small interactions: set current year and ensure links open safely
document.getElementById('year').textContent = new Date().getFullYear();

// Extra: prevent default on non-configured features (keeps page safe when demo)
document.addEventListener('click', function(e){
  // if a link with href="#" exists in future, this avoids scroll jump
  if(e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
    e.preventDefault();
  }
});
// Extra: ensure external links open in new tab safely