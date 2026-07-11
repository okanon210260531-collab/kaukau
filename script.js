const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('#nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const modal=document.querySelector('#posterModal');
document.querySelector('#posterBtn').addEventListener('click',()=>modal.showModal());
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const toast=document.querySelector('.toast');
document.querySelectorAll('.fake-action').forEach(btn=>btn.addEventListener('click',()=>{toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}));
