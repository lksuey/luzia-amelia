(function(){
  var nav=document.getElementById('nav'), b=document.getElementById('burger'), hd=document.getElementById('top-nav');
  b.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    b.setAttribute('aria-expanded',open?'true':'false');
    hd.classList.add('solid');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');b.setAttribute('aria-expanded','false');}
  });
  function onScroll(){
    if(window.scrollY>40||nav.classList.contains('open')) hd.classList.add('solid');
    else hd.classList.remove('solid');
  }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  document.getElementById('ano').textContent=new Date().getFullYear();
})();
