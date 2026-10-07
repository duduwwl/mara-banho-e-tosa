document.querySelectorAll('.menu-toggle').forEach((button)=>button.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.toggle('open')));
document.querySelectorAll('.main-nav a').forEach((link)=>link.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.remove('open')));

const params = new URLSearchParams(location.search);
const requestedService = params.get('service');
document.querySelectorAll('.choice').forEach((button)=>{
  if(requestedService && button.dataset.service === requestedService){ document.querySelectorAll('.choice').forEach((item)=>item.classList.remove('active')); button.classList.add('active'); }
  button.addEventListener('click',()=>{ document.querySelectorAll('.choice').forEach((item)=>item.classList.remove('active')); button.classList.add('active'); });
});
document.querySelectorAll('.date-choice, .calendar-day:not(.muted)').forEach((button)=>button.addEventListener('click',()=>{document.querySelectorAll('.date-choice, .calendar-day').forEach((item)=>item.classList.remove('active'));button.classList.add('active');const label=document.querySelector('.selected-date-label');if(label && button.dataset.label) label.textContent=button.dataset.label;}));
document.querySelectorAll('.time-choice:not(.disabled)').forEach((button)=>button.addEventListener('click',()=>{document.querySelectorAll('.time-choice').forEach((item)=>item.classList.remove('active'));button.classList.add('active')}));
const bookingForm=document.querySelector('#booking-form');
if(bookingForm){bookingForm.addEventListener('submit',(event)=>{event.preventDefault();bookingForm.hidden=true;document.querySelector('.booking-success').hidden=false;});}

document.querySelectorAll('.row-more').forEach((button)=>button.addEventListener('click',()=>{const status=button.parentElement.querySelector('.status');if(status){status.classList.toggle('confirmed');status.classList.toggle('waiting');status.textContent=status.classList.contains('confirmed')?'Confirmado':'Aguardando';}}));
