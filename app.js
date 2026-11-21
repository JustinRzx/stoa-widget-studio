'use strict';
const ids=['token','ref','pay','theme','amount'];
const form=document.querySelector('#config');
const fields=Object.fromEntries(ids.map(id=>[id,document.getElementById(id)]));
const params=new URLSearchParams(location.hash.slice(1));
for(const id of ids)if(params.has(id))fields[id].value=params.get(id);
let current=null;
function update(event){
 if(event)event.preventDefault();
 try{
  const values=Object.fromEntries(ids.map(id=>[id,fields[id].value.trim()]));
  const result=buildEmbed(values);
  document.getElementById('preview').src=result.url;
  document.getElementById('direct').href=result.url;
  document.getElementById('code').value=result.html;
  document.getElementById('status').textContent='Configuration valid. Check the referral wallet before publishing.';
  current=values;
 }catch(error){
  current=null;
  document.getElementById('preview').removeAttribute('src');
  document.getElementById('direct').removeAttribute('href');
  document.getElementById('code').value='';
  document.getElementById('status').textContent=error.message;
 }
}
form.addEventListener('submit',update);
// Invalidate stale exports as soon as a field changes; refresh only on explicit submit.
form.addEventListener('input',()=>{current=null;document.getElementById('code').value='';document.getElementById('status').textContent='Unsaved changes — update preview before exporting.';});
async function copy(text){
 const status=document.getElementById('copy-status');
 if(!current){status.textContent='Update the preview with valid inputs first.';return;}
 try{await navigator.clipboard.writeText(text);status.textContent='Copied.';}
 catch{status.textContent='Clipboard unavailable. Select the embed code and copy it manually.';}
}
document.getElementById('copy').addEventListener('click',()=>copy(document.getElementById('code').value));
document.getElementById('share').addEventListener('click',()=>copy(location.href.split('#')[0]+'#'+new URLSearchParams(current||{})));
update();
