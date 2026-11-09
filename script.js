const nav=document.getElementById('nav');
document.getElementById('menuToggle').addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quoteForm').addEventListener('submit',e=>{
 e.preventDefault();const f=new FormData(e.target);
 const msg=`Hello Rinkol, I would like to request a consultation/quote.%0AName: ${encodeURIComponent(f.get('name'))}%0APhone: ${encodeURIComponent(f.get('phone'))}%0AService: ${encodeURIComponent(f.get('service'))}%0ADetails: ${encodeURIComponent(f.get('message')||'Not provided')}`;
 window.open(`https://wa.me/254731496586?text=${msg}`,'_blank','noopener');
});
const panel=document.getElementById('chatPanel'), body=document.getElementById('chatBody');
document.getElementById('chatLaunch').addEventListener('click',()=>{panel.hidden=false;});
document.getElementById('chatClose').addEventListener('click',()=>panel.hidden=true);
function answer(q){
 const s=q.toLowerCase();
 if(s.includes('fumig')||s.includes('pest')||s.includes('termite')||s.includes('cockroach')||s.includes('rodent')) return "Rinkol offers general pest control, termite control, structural pest management, hotel and aircraft fumigation, cargo/container and ship-hold fumigation, stored-grain management, and gel/liquid pest control. Tell us your location and the pest or site involved so our team can advise.";
 if(s.includes('clean')||s.includes('hygiene')||s.includes('sanitary')||s.includes('garbage')||s.includes('garden')) return "Our cleaning and hygiene services include commercial and post-construction cleaning, sanitary bins, gardening and grounds maintenance, and garbage collection. Contact us with your property type, location and service needs for a consultation.";
 if(s.includes('quote')||s.includes('price')||s.includes('cost')||s.includes('book')) return "Rinkol offers free advice, estimates and surveys. Use the Request a Quote form on this page or WhatsApp us on +254 731 496 586. Please share your location, service needed and approximate size of the site.";
 if(s.includes('eco2')||s.includes('eco 2')) return "The company profile describes Rinkol's ECO2FUME® training and approval in 2011, and use for selected commodities and structures. Contact our team to check suitability, availability and the safety requirements for your specific job.";
 if(s.includes('where')||s.includes('address')||s.includes('contact')||s.includes('phone')) return "Rinkol is located at Space Mall, off Moi Drive, Nairobi. Call +254 731 496 586 or email info@rinkolpest.com.";
 return "I can help with fumigation and pest control, cleaning and hygiene, ECO2FUME®, or requesting a quote. For site-specific recommendations, please speak to our team on +254 731 496 586.";
}
function addMessage(txt,cls){const p=document.createElement('p');p.className=cls;p.textContent=txt;body.appendChild(p);body.scrollTop=body.scrollHeight;}
function send(q){if(!q.trim())return;addMessage(q,'user-msg');setTimeout(()=>addMessage(answer(q),'bot-msg'),250);}
document.getElementById('chatForm').addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('chatMessage');send(input.value);input.value='';});
body.querySelectorAll('[data-q]').forEach(b=>b.addEventListener('click',()=>send(b.dataset.q)));
