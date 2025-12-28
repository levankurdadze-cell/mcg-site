(function(){
  // Active link
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if((a.getAttribute('href')||'').toLowerCase() === path){ a.classList.add('active'); }
  });

  // Premium sticky header: shrink + depth on scroll
  const nav = document.querySelector('.nav');
  if(!nav) return;

  let ticking = false;
  const onScroll = () => {
    if(ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      nav.classList.toggle('is-scrolled', window.scrollY > 20);
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();