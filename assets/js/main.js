(function(){
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if((a.getAttribute('href')||'').toLowerCase() === path){ a.classList.add('active'); }
  });
})();