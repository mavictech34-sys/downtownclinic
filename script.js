
const menu = document.querySelector('[data-menu]');
const mobile = document.querySelector('[data-mobile]');
const header = document.querySelector('.header');

if(menu && mobile){
  menu.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    header.classList.toggle('mobile-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobile.classList.remove('open');
    header.classList.remove('mobile-open');
    menu.setAttribute('aria-expanded','false');
    menu.textContent='☰';
  }));
}

document.querySelectorAll('[data-year]').forEach(e => e.textContent = new Date().getFullYear());

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(e => observer.observe(e));

document.querySelectorAll('[data-appointment]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const message = form.querySelector('[data-message]');
    if(message){
      message.hidden = false;
      message.textContent = 'Request received on this demonstration page. Connect this form to the clinic’s secure booking or messaging service before launch.';
    }
  });
});
