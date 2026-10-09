'use strict';
// Shared accessible photo viewer. Native dialog keeps keyboard focus inside.
const viewer=document.createElement('dialog');
viewer.className='photo-dialog';
viewer.setAttribute('aria-labelledby','photo-dialog-title');
viewer.innerHTML='<div class="dialog-bar"><h2 id="photo-dialog-title"></h2><button class="dialog-close" type="button">Fermer ×</button></div><img alt=""><p class="dialog-note">Photomontage · voyage imaginé avec vos photos de référence. Ce n’est pas une photo du séjour à venir.</p>';
document.body.append(viewer);
let viewerOpener=null;
document.addEventListener('click',e=>{
 const button=e.target.closest('[data-full-image]');if(!button)return;
 viewerOpener=button;viewer.querySelector('img').src=button.dataset.fullImage;
 viewer.querySelector('img').alt=button.dataset.imageTitle||'Photomontage du voyage à cinq';
 viewer.querySelector('h2').textContent=button.dataset.imageTitle||'Notre carte postale';
 viewer.showModal();
});
viewer.querySelector('.dialog-close').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close();}});
viewer.addEventListener('close',()=>{if(viewerOpener?.isConnected)viewerOpener.focus({preventScroll:true});});
document.querySelectorAll('[data-place-filter]').forEach(button=>button.addEventListener('click',()=>{
 const value=button.dataset.placeFilter;
 document.querySelectorAll('[data-place-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 let visible=0;document.querySelectorAll('.place-card').forEach(card=>{card.hidden=value!=='all'&&card.dataset.selected!==value;if(!card.hidden)visible++;});
 const status=document.querySelector('#place-count');if(status)status.textContent=visible+' lieux affichés';
}));
