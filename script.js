// Products rendering + responsive image extension fallback
const PRODUCTS_URL = 'products.json';

const PRODUCTS_FALLBACK = [
  {"id":"tv-24n","title":"24\" LED TV (Normal)","category":"Televisions","series":"LED TV","tags":["Full HD 1080p","60cm","Low Power","Energy Efficient"],"specs":["16.7M Colors","Dynamic Contrast","USB & HDMI Input"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MK24","badges":["Bestseller","1 Year Warranty"]},
  {"id":"tv-32s","title":"32\" Smart LED TV (Android 11)","category":"Televisions","series":"Android","tags":["HD Ready","Smart TV","Voice Remote"],"specs":["1GB RAM","8GB ROM","WiFi","Bluetooth"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MK32","badges":["Hot Deal","Popular"]},
  {"id":"tv-43w","title":"43\" webOS TV","category":"Televisions","series":"webOS","tags":["Full HD","Voice Control","Smart"],"specs":["1GB RAM","8GB ROM","Magic Remote"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MK43","badges":["New Arrival"]},
  {"id":"tv-50g","title":"50\" Google TV","category":"Televisions","series":"Google","tags":["4K UHD","Chromecast Built-in"],"specs":["2GB RAM","16GB ROM","HDR10","Dolby Audio"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MK50","badges":["Smart Pick"]},
  {"id":"tv-55web","title":"55\" WebOS TV","category":"Televisions","series":"webOS","tags":["4K UHD","AI Processor","Voice Keypad"],"specs":["1GB RAM","8GB ROM","Wide Viewing Angle"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MK55","badges":["Premium"]},
  {"id":"tv-65web","title":"65\" WebOS TV","category":"Televisions","series":"webOS","tags":["Ultra HD 4K","ThinQ AI","HDR10+"],"specs":["2GB RAM","16GB ROM","Dolby Vision"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MK65","badges":["Flagship","5 Year Warranty"]},
  {"id":"wm-7","title":"Semi Auto Washing Machine – 7.0 kg","category":"Washing Machines","series":"SAWM","tags":["Toughened Glass","ABS Body"],"specs":["135W Motor","2 Programs","Heavy Pulsator","Buzzer"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MKSSAWM7","badges":["Compact","Reliable"]},
  {"id":"wm-9","title":"Semi Auto Washing Machine – 9.0 kg","category":"Washing Machines","series":"SAWM","tags":["Toughened Glass","ABS Body","Rust Proof"],"specs":["185W Motor","Diamond Drum","Lint Filter","Buzzer"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MKSSAWM9","badges":["Top Rated"]},
  {"id":"wm-11","title":"Semi Auto Washing Machine – 11.0 kg","category":"Washing Machines","series":"SAWM","tags":["Heavy Duty","Large Capacity","ABS Body"],"specs":["200W Motor","2 Programs","Heavy Pulsator","Buzzer"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MKSSAWM11","badges":["Heavy Load"]},
  {"id":"stab-fridge","title":"Refrigerator Stabilizer (up to 365L)","category":"Stabilizers","series":"Stabilizer","tags":["500 VA","Automatic Cut-off","Surge Protection"],"specs":["Wall Mount","LED Indicator"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MKSTBZREF","badges":["Energy Saver"]},
  {"id":"stab-led-plus","title":"Smart Plus Stabilizer (up to 75 Inch LED TV)","category":"Stabilizers","series":"Stabilizer","tags":["LED TV","Smart","5 Year Warranty"],"specs":["High Voltage Cut-off","Copper Winding"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MKSTBZSMT","badges":["Smart Protection"]},
  {"id":"stab-led-mini","title":"MINI Stabilizer (up to 43 Inch LED TV)","category":"Stabilizers","series":"Stabilizer","tags":["Compact","Automatic Restart"],"specs":["LED Display","Smart Protection Circuit"],"image":"https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/MKSTBZMINI","badges":["Mini Power"]}
];

const EXT_TRY = ['.png', '.jpg', '.jpeg', '.webp'];

function imgWithFallback(baseUrl){
  const img = new Image();
  img.decoding = 'async';
  img.loading = 'lazy';
  img.alt = 'Product image';
  let idx = 0;
  function setSrc(){ img.src = baseUrl + EXT_TRY[idx]; }
  img.addEventListener('error', ()=>{
    idx++;
    if (idx < EXT_TRY.length) setSrc();
    else img.src = 'https://raw.githubusercontent.com/Tarun1203/makwell-electronics/main/images/Makwell-logo.png';
  }, {passive:true});
  setSrc();
  return img;
}

const $ = s=>document.querySelector(s);
const state = { all:[], filtered:[], page:1, perPage:16, q:'', cat:'All', sort:'popular' };

function slug(v){ return (v||'').toLowerCase(); }
function applyFilters(){
  const q = slug(state.q), cat = state.cat;
  let list = state.all.slice();
  if(cat && cat!=='All') list = list.filter(p=>p.category===cat);
  if(q){
    list = list.filter(p =>
      slug(p.title).includes(q) ||
      slug(p.category).includes(q) ||
      (p.tags||[]).some(t=>slug(t).includes(q)) ||
      (p.series && slug(p.series).includes(q))
    );
  }
  if(state.sort==='name') list.sort((a,b)=>a.title.localeCompare(b.title));
  state.filtered = list; state.page=1; render();
}

function render(){
  const results = $('#results'); const skuCount = $('#skuCount');
  results.innerHTML = '';
  const total = state.filtered.length; skuCount.textContent = `${total} item${total===1?'':'s'}`;
  const slice = state.filtered.slice((state.page-1)*state.perPage, state.page*state.perPage);

  for(const p of slice){
    const card = document.createElement('article'); card.className='card product';

    const media = document.createElement('div'); media.className='media';
    const badges = document.createElement('div'); badges.className='badges';
    (p.badges||[]).forEach(b=>{ const s=document.createElement('span'); s.className='badge'; s.textContent=b; badges.appendChild(s); });
    const img = imgWithFallback(p.image);
    media.appendChild(img); media.appendChild(badges);

    const h3 = document.createElement('h3'); h3.style.margin='6px 0 0'; h3.textContent=p.title;
    const meta = document.createElement('div'); meta.className='muted';
    meta.textContent = `${p.category}${p.series ? ' • '+p.series : ''}`;

    const tags = document.createElement('div'); tags.className='tags';
    (p.tags||[]).forEach(t=>{ const x=document.createElement('span'); x.className='tag'; x.textContent=t; tags.appendChild(x); });

    const row = document.createElement('div'); row.className='price-row';
    const left = document.createElement('div'); left.className='muted'; left.textContent=(p.specs||[]).slice(0,2).join(' • ');
    const btn = document.createElement('a'); btn.className='btn'; btn.href='contact.html'; btn.textContent='Enquiry';
    row.appendChild(left); row.appendChild(btn);

    card.appendChild(media); card.appendChild(h3); card.appendChild(meta); card.appendChild(tags); card.appendChild(row);
    results.appendChild(card);
  }
  renderPager();
}

function renderPager(){
  const pager = document.getElementById('pager'); pager.innerHTML='';
  const total = state.filtered.length; const pages = Math.max(1, Math.ceil(total/state.perPage));
  if(pages<=1) return;
  function b(label, disabled, run){ const x=document.createElement('button'); x.className='btn'+(disabled?' secondary':''); x.textContent=label; x.disabled=!!disabled; if(run) x.addEventListener('click', run); return x; }
  pager.appendChild(b('Prev', state.page===1, ()=>{state.page--; render();}));
  pager.appendChild(b('Next', state.page===pages, ()=>{state.page++; render();}));
}

function initFilters(){
  const cats = ['All', ...Array.from(new Set(state.all.map(p=>p.category)))];
  const sel = document.getElementById('category'); sel.innerHTML = cats.map(c=>`<option>${c}</option>`).join('');
  sel.value='All'; sel.addEventListener('change', e=>{ state.cat=e.target.value; applyFilters(); });
  const q = document.getElementById('q'); q.addEventListener('input', e=>{ state.q=e.target.value; applyFilters(); });
  document.getElementById('sort').addEventListener('change', e=>{ state.sort=e.target.value; applyFilters(); });
  addEventListener('keydown', e=>{ if(e.key==='/' && document.activeElement!==q){ e.preventDefault(); q.focus(); } });
}

async function loadProducts(){
  try{
    const r = await fetch(PRODUCTS_URL, {cache:'no-store'});
    if(!r.ok) throw 0;
    const data = await r.json();
    return Array.isArray(data) ? data : PRODUCTS_FALLBACK;
  }catch{
    return PRODUCTS_FALLBACK;
  }
}

(async function(){
  state.all = await loadProducts();
  initFilters();
  applyFilters();
})();
