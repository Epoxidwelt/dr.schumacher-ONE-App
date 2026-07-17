const OFFICIAL = {
  home: 'https://www.schumacher-online.com/de',
  catalog: 'https://schumacher-katalog.com/de/',
  sheets: 'https://www.schumacher-online.com/de/downloads/datenblaetter',
  images: 'https://www.schumacher-online.com/de/downloads/produktbilder',
  plans: 'https://www.schumacher-online.com/de/downloads/anleitungen-plaene',
  disinfectionPlans: 'https://www.eqmed.de/'
};

const PRODUCTS = [
  {id:'aseptoman-med',sku:'00-610-005',name:'ASEPTOMAN® MED',category:'hands',kind:'Händedesinfektionsmittel',spectrum:['begrenzt viruzid PLUS'],summary:'Alkoholisches Händedesinfektionsmittel für die hygienische und chirurgische Händedesinfektion.',facts:['Wirksam innerhalb von 30 Sekunden gegen Noro-, Adeno- und Rotaviren','Hervorragende Hautverträglichkeit durch pflegende Rückfetter','Frei von quartären Ammoniumverbindungen'],sizes:['100 ml','500 ml','1 l'],color:'#0876d1'},
  {id:'aseptoman-gel',sku:'00-615-005',name:'ASEPTOMAN® GEL',category:'hands',kind:'Händedesinfektionsgel',spectrum:['begrenzt viruzid'],summary:'Gelförmiges Präparat für eine einfache, kontrollierte Händedesinfektion.',facts:['Angenehme Gelkonsistenz','Für die häufige Anwendung geeignet','Sehr gute Verteilung auf den Händen'],sizes:['100 ml','500 ml','1 l'],color:'#0876d1'},
  {id:'aseptoman-viral',sku:'00-610-010',name:'ASEPTOMAN® VIRAL',category:'hands',kind:'Händedesinfektionsmittel',spectrum:['viruzid'],summary:'Händedesinfektionsmittel mit erweitertem Wirkungsspektrum für besondere Anforderungen.',facts:['Breites Wirkungsspektrum','Für hygienische und chirurgische Händedesinfektion','Aktuelle Einwirkzeiten bitte der Produktinformation entnehmen'],sizes:['500 ml','1 l'],color:'#0876d1'},
  {id:'descoderm',sku:'00-620-005',name:'DESCODERM',category:'hands',kind:'Händedesinfektionsmittel',spectrum:['begrenzt viruzid'],summary:'Farbstoff- und parfümfreies Händedesinfektionsmittel für sensible Haut.',facts:['Frei von Farb- und Parfümstoffen','Für sensible Haut geeignet','Für medizinische Bereiche'],sizes:['100 ml','500 ml','1 l'],color:'#0876d1'},
  {id:'descosept-sensitive',sku:'00-311-005',name:'DESCOSEPT SENSITIVE',category:'surface',kind:'Gebrauchsfertige Flächendesinfektion',spectrum:['begrenzt viruzid PLUS'],summary:'Alkoholische Schnelldesinfektion für materialempfindliche, patientennahe Flächen.',facts:['Schnell trocknend','Gute Materialverträglichkeit','Gebrauchsfertig und einfach anzuwenden'],sizes:['500 ml','1 l','5 l'],color:'#44ad45'},
  {id:'descosept-sensitive-wipes',sku:'00-313-100',name:'DESCOSEPT SENSITIVE WIPES',category:'surface',kind:'Reinigungs- und Desinfektionstücher',spectrum:['begrenzt viruzid PLUS'],summary:'Gebrauchsfertige Tücher für die schnelle Reinigung und Desinfektion mittelgroßer Flächen.',facts:['Schnelle Einzelentnahme','Nachhaltige Bio-Vlies-Variante verfügbar','Ideal für patientennahe Bereiche'],sizes:['60 Tücher','100 Tücher','120 Tücher'],color:'#44ad45'},
  {id:'descosept-spezial',sku:'00-330-010',name:'DESCOSEPT SPEZIAL',category:'surface',kind:'Alkoholfreie Flächendesinfektion',spectrum:['begrenzt viruzid'],summary:'Alkoholfreie gebrauchsfertige Reinigung und Desinfektion für empfindliche Oberflächen.',facts:['Ohne Alkohole, Aldehyde und Phenole','Für empfindliche Oberflächen','Reinigend und desinfizierend'],sizes:['1 l','5 l'],color:'#44ad45'},
  {id:'ultrasol-oxy',sku:'00-355-100',name:'ULTRASOL OXY® WIPES',category:'surface',kind:'Reinigungs- und Desinfektionstücher',spectrum:['viruzid','sporizid'],summary:'Oxidative Reinigung und Desinfektion mit sehr breitem Wirkungsspektrum.',facts:['Viruzid und sporizid','Für Routine und Ausbruchsfall','Dualauslobung als Biozid- und Medizinprodukt'],sizes:['100 Tücher'],color:'#44ad45'},
  {id:'ultrasol-active',sku:'00-358-020',name:'ULTRASOL® ACTIVE',category:'surface',kind:'Desinfektionsmittel-Konzentrat',spectrum:['viruzid','sporizid'],summary:'Pulverkonzentrat für anspruchsvolle Reinigung und Flächendesinfektion.',facts:['Breites Wirkungsspektrum','Praktisch staubfreie Anwendung','Gute Reinigungsleistung'],sizes:['20 g','1 kg'],color:'#44ad45'},
  {id:'perfektan-active',sku:'00-410-020',name:'PERFEKTAN® ACTIVE',category:'instruments',kind:'Manuelle Instrumentenaufbereitung',spectrum:['viruzid'],summary:'Konzentrat zur manuellen Reinigung und Desinfektion medizinischer Instrumente.',facts:['Für das Tauchbadverfahren','Breites Wirkungsspektrum','Materialschonende Formulierung'],sizes:['2 l','5 l'],color:'#7956b3'},
  {id:'descoton-extra',sku:'00-420-020',name:'DESCOTON EXTRA',category:'instruments',kind:'Instrumentendesinfektion',spectrum:['begrenzt viruzid PLUS'],summary:'Reinigendes und desinfizierendes Präparat für die manuelle Instrumentenaufbereitung.',facts:['Reinigung und Desinfektion in einem Schritt','Für medizinische Instrumente','Dosierung gemäß Produktinformation'],sizes:['2 l','5 l'],color:'#7956b3'},
  {id:'esh-spender',sku:'00-900-001',name:'ESH SPENDERSYSTEM',category:'application',kind:'Spender und Applikation',spectrum:[],summary:'Hygienisches Spendersystem für Hände- und Hautpräparate.',facts:['Einfacher Gebindewechsel','Für unterschiedliche Gebindegrößen','Für professionelle Hygienekonzepte'],sizes:['500 ml','1 l'],color:'#ef829a'},
  {id:'vacubag',sku:'00-905-010',name:'VACUBAG® SYSTEM',category:'application',kind:'Geschlossenes Spendersystem',spectrum:[],summary:'Geschlossenes Beutelsystem für hygienische und wirtschaftliche Produktentnahme.',facts:['Einfacher Bag-Austausch','Pumpenaufbereitung entfällt','Optimierte Restentleerung'],sizes:['1 l'],color:'#ef829a'},
  {id:'wipes-spender',sku:'00-910-001',name:'VLIESTUCH-SPENDERSYSTEM',category:'application',kind:'Spender und Applikation',spectrum:[],summary:'Wiederverwendbares Spendersystem für getränkte Vliestücher.',facts:['Einfache Anwendung','Verschiedene Größen verfügbar','Aufbereitungshinweise beachten'],sizes:['Kompakt','Standard'],color:'#ef829a'}
];

const state = {
  screen: localStorage.getItem('priceList') ? 'menu' : 'prices',
  priceList: localStorage.getItem('priceList') || '',
  category: 'all', query: '', spectrum: 'all', selected: null,
  prices: JSON.parse(localStorage.getItem('prices') || '{}'),
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  size: ''
};

const $ = (selector) => document.querySelector(selector);
const money = (value) => value === undefined || value === null || value === ''
  ? 'Preis nicht hinterlegt'
  : new Intl.NumberFormat('de-DE', {style:'currency', currency:'EUR'}).format(Number(value));

function icon(name) {
  const icons = {
    surface:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/></svg>',
    hands:'<svg viewBox="0 0 24 24"><path d="M7 12V5a1.5 1.5 0 0 1 3 0v5-7a1.5 1.5 0 0 1 3 0v7-6a1.5 1.5 0 0 1 3 0v6-4a1.5 1.5 0 0 1 3 0v8c0 5-3 8-8 8-4 0-7-2-8-6l-1-4a1.6 1.6 0 0 1 3-1l2 4z"/></svg>',
    instruments:'<svg viewBox="0 0 24 24"><path d="M5 20 19 6M7 4l3 3-3 3-3-3 3-3Zm10 10 3 3-3 3-3-3 3-3Z"/></svg>',
    application:'<svg viewBox="0 0 24 24"><path d="M9 3h6v3H9zM8 6h8l2 5v10H6V11l2-5Zm2 6h4"/></svg>',
    all:'<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4zM8 4v16M4 9h16M4 14h16"/></svg>',
    downloads:'<svg viewBox="0 0 24 24"><path d="M12 3v12m-4-4 4 4 4-4M4 19h16"/></svg>',
    search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg>',
    star:'<svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>',
    settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 15 6l-.3-2.6h-4L10.4 6a8 8 0 0 0-1.6 1L6.5 6 4.5 9.5 6.6 11a7 7 0 0 0 0 2l-2.1 1.5 2 3.4 2.4-1A8 8 0 0 0 10.5 18l.3 2.6h4L15.1 18a8 8 0 0 0 1.6-1l2.3 1 2-3.4-2.1-1.5c.1-.4.1-.7.1-1.1Z"/></svg>'
  };
  return icons[name] || '';
}

function header(back=false) {
  return `<header class="topbar">
    ${back ? '<button class="icon-button" data-action="back" aria-label="Zurück">←</button>' : ''}
    <img class="logo" src="public/assets/dr-schumacher-logo.png" alt="Dr. Schumacher">
    <div class="grow"></div>
    <button class="price-pill" data-action="prices"><span>Aktive Preisliste</span><strong>${state.priceList || 'wählen'}</strong></button>
  </header>`;
}

function bottomNav(active='home') {
  return `<nav class="bottom-nav">
    <button data-nav="home" class="${active==='home'?'active':''}">${icon('surface')}<span>Start</span></button>
    <button data-nav="search" class="${active==='search'?'active':''}">${icon('search')}<span>Suche</span></button>
    <button data-nav="favorites" class="${active==='favorites'?'active':''}">${icon('star')}<span>Favoriten</span></button>
    <button data-nav="settings" class="${active==='settings'?'active':''}">${icon('settings')}<span>Mehr</span></button>
  </nav>`;
}

function render() {
  const app = $('#app');
  let html = '';
  if (state.screen === 'prices') html = priceScreen();
  if (state.screen === 'menu') html = header() + menuScreen() + bottomNav('home');
  if (state.screen === 'products') html = header(true) + productsScreen() + bottomNav('search');
  if (state.screen === 'detail') html = header(true) + detailScreen() + bottomNav('search');
  if (state.screen === 'favorites') html = header(true) + favoritesScreen() + bottomNav('favorites');
  if (state.screen === 'settings') html = header(true) + settingsScreen() + bottomNav('settings');
  app.innerHTML = html;
  bind();
}

function priceScreen() {
  const options = ['UVP','FH 1','FH 2','FH 3','FH 4','FH 5'];
  return `<main class="price-shell">
    <section class="price-panel">
      <img class="welcome-logo" src="public/assets/dr-schumacher-logo.png" alt="Dr. Schumacher">
      <span class="eyebrow">Interner Produktberater</span>
      <h1>Welche Preisliste möchten Sie verwenden?</h1>
      <p>Die Auswahl gilt für die gesamte Sitzung. Sie kann später jederzeit geändert werden.</p>
      <div class="price-options">${options.map(option => `<button class="price-option ${state.priceList===option?'selected':''}" data-price="${option}"><span>${option}</span>${option==='UVP'?'<small>Öffentliche Verkaufspreise</small>':'<small>Interne Preisliste</small>'}</button>`).join('')}</div>
      <button class="primary-button" data-action="start" ${!state.priceList?'disabled':''}>Produktberater starten <span>→</span></button>
      <p class="privacy-note">Preise bleiben lokal auf diesem Gerät und werden nicht in eine Cloud übertragen.</p>
    </section>
  </main>`;
}

function menuScreen() {
  const cards = [
    ['surface','Fläche','Desinfektion & Reinigung'],
    ['hands','Hände & Haut','Händedesinfektion & Pflege'],
    ['instruments','Instrumente','Aufbereitung & Desinfektion'],
    ['application','Applikation','Spendersysteme & Zubehör'],
    ['all','Produktübersicht','Alle Produkte im Überblick'],
    ['downloads','Downloads','Aktuelle Unterlagen online']
  ];
  return `<main class="page menu-page">
    <section class="intro-card"><div><span class="eyebrow">Schnell. Einfach. Aktuell.</span><h1>Was möchten Sie zeigen?</h1><p>Wählen Sie einen Bereich oder suchen Sie direkt nach einem Produkt.</p></div><div class="status-card"><span>Preisliste</span><strong>${state.priceList}</strong><small>${Object.keys(state.prices).length} Preiszeilen lokal</small></div></section>
    <div class="category-grid">${cards.map(([key,title,sub]) => `<button class="category-card ${key}" data-category="${key}"><span class="category-icon">${icon(key)}</span><span><strong>${title}</strong><small>${sub}</small></span><b>›</b></button>`).join('')}</div>
    <section class="online-card"><div class="online-dot"></div><div><strong>Unterlagen immer aktuell</strong><p>Produktinformationen, Datenblätter und Bilder werden direkt von schumacher-online.com geöffnet.</p></div><a href="${OFFICIAL.home}" target="_blank" rel="noopener">Website öffnen</a></section>
  </main>`;
}

function productsScreen() {
  if (state.category === 'downloads') return downloadsScreen();
  const names = {surface:'Fläche',hands:'Hände & Haut',instruments:'Instrumente',application:'Applikation',all:'Alle Produkte'};
  const spectra = ['all','begrenzt viruzid','begrenzt viruzid PLUS','viruzid','sporizid'];
  const list = PRODUCTS.filter(p =>
    (state.category === 'all' || p.category === state.category) &&
    (!state.query || `${p.name} ${p.kind} ${p.sku}`.toLowerCase().includes(state.query.toLowerCase())) &&
    (state.spectrum === 'all' || p.spectrum.includes(state.spectrum))
  );
  return `<main class="page products-page">
    <div class="section-heading"><div><span class="eyebrow">Produktbereich</span><h1>${names[state.category]}</h1></div><span class="result-count">${list.length} Produkte</span></div>
    <label class="search-box">${icon('search')}<input id="search" value="${escapeHtml(state.query)}" placeholder="Produktname oder Artikelnummer suchen"></label>
    <div class="filter-row">${spectra.map(s => `<button class="filter-chip ${state.spectrum===s?'active':''}" data-spectrum="${s}">${s==='all'?'Alle':s}</button>`).join('')}</div>
    <div class="product-list">${list.map(productCard).join('') || '<div class="empty-state"><h2>Keine Produkte gefunden</h2><p>Bitte ändern Sie Ihre Suche oder den Filter.</p></div>'}</div>
  </main>`;
}

function productCard(product) {
  const price = resolvePrice(product);
  const favorite = state.favorites.includes(product.id);
  return `<article class="product-row" data-product="${product.id}">
    <div class="product-image" style="--product-color:${product.color}"><span>${product.category==='hands'?'✋':product.category==='surface'?'▦':product.category==='instruments'?'✂':'▣'}</span></div>
    <div class="product-copy"><small>${product.kind}</small><h2>${product.name}</h2><div class="badges">${product.spectrum.map(spectrumBadge).join('')}</div><p>Art.-Nr. ${product.sku}</p></div>
    <div class="row-price"><strong>${money(price)}</strong><small>${state.priceList}</small></div>
    <button class="favorite-button ${favorite?'active':''}" data-favorite="${product.id}" aria-label="Favorit">${icon('star')}</button>
    <span class="chevron">›</span>
  </article>`;
}

function detailScreen() {
  const p = PRODUCTS.find(x => x.id === state.selected);
  if (!p) { state.screen = 'products'; return productsScreen(); }
  if (!state.size) state.size = p.sizes[0];
  const price = resolvePrice(p, state.size);
  const favorite = state.favorites.includes(p.id);
  return `<main class="page detail-page">
    <section class="detail-hero">
      <div class="detail-image" style="--product-color:${p.color}"><div class="bottle"><span>${p.name.split(' ')[0]}</span></div></div>
      <div class="detail-copy"><span class="eyebrow">${p.kind}</span><div class="title-line"><h1>${p.name}</h1><button class="favorite-button large ${favorite?'active':''}" data-favorite="${p.id}">${icon('star')}</button></div><div class="badges">${p.spectrum.map(spectrumBadge).join('')}</div><p>${p.summary}</p><small>Artikelnummer: ${p.sku}</small></div>
    </section>
    <section class="detail-grid">
      <div class="info-card"><h2>Das Wichtigste auf einen Blick</h2><ul>${p.facts.map(f => `<li><span>✓</span>${f}</li>`).join('')}</ul><div class="info-warning">Verbindliche Anwendung, Einwirkzeiten und Sicherheit bitte immer anhand der aktuellen offiziellen Produktinformation prüfen.</div></div>
      <div class="price-card-detail"><span>Gebinde auswählen</span><div class="size-selector">${p.sizes.map(size => `<button class="${state.size===size?'active':''}" data-size="${size}">${size}</button>`).join('')}</div><div class="price-display"><div><small>Ihr Preis (${state.priceList})</small><strong>${money(price)}</strong><span>zzgl. MwSt.</span></div><button data-action="prices">Preisliste wechseln</button></div></div>
    </section>
    <section class="document-section"><h2>Aktuelle Unterlagen</h2><div class="document-grid">
      ${documentLink('Produktinformation','Aktuelle Produktinformationen und Einwirkzeiten',OFFICIAL.sheets,'📄')}
      ${documentLink('Sicherheitsdatenblatt','Aktuelle Sicherheitsinformationen',OFFICIAL.sheets,'🛡️')}
      ${documentLink('Betriebsanweisung','Dokumente für den sicheren Umgang',OFFICIAL.sheets,'📋')}
      ${documentLink('Produktbild','Aktuelle Bilddaten herunterladen',OFFICIAL.images,'🖼️')}
    </div></section>
  </main>`;
}

function favoritesScreen() {
  const list = PRODUCTS.filter(p => state.favorites.includes(p.id));
  return `<main class="page products-page"><div class="section-heading"><div><span class="eyebrow">Persönliche Auswahl</span><h1>Favoriten</h1></div><span class="result-count">${list.length}</span></div><div class="product-list">${list.map(productCard).join('') || '<div class="empty-state"><h2>Noch keine Favoriten</h2><p>Tippen Sie bei einem Produkt auf den Stern.</p></div>'}</div></main>`;
}

function settingsScreen() {
  return `<main class="page settings-page"><div class="section-heading"><div><span class="eyebrow">Verwaltung</span><h1>Einstellungen</h1></div></div>
    <section class="settings-card"><button data-action="prices"><span><strong>Preisliste wechseln</strong><small>Aktuell: ${state.priceList}</small></span><b>›</b></button><label class="file-row"><span><strong>Excel-Preise importieren</strong><small>.xlsx, .xls oder .csv – bleibt lokal</small></span><b>Datei auswählen</b><input id="excel" type="file" accept=".xlsx,.xls,.csv"></label><div id="importStatus" class="import-status">${Object.keys(state.prices).length ? `${Object.keys(state.prices).length} Preiszeilen gespeichert` : 'Noch keine Preisdatei importiert'}</div><button data-action="clear-prices"><span><strong>Lokale Preise löschen</strong><small>Entfernt nur die Daten auf diesem Gerät</small></span><b>×</b></button></section>
    <section class="settings-card"><a href="preisvorlage.csv" download><span><strong>Excel-Vorlage herunterladen</strong><small>Vorlage für UVP und FH 1 bis FH 5</small></span><b>↓</b></a><a href="${OFFICIAL.home}" target="_blank"><span><strong>Dr.-Schumacher-Website</strong><small>Öffnet die offizielle Website</small></span><b>↗</b></a></section>
    <p class="version">Interner Produktberater · Präsentationsversion 1.1</p>
  </main>`;
}

function downloadsScreen() {
  const links = [
    ['Gesamtkatalog 2026','Der komplette aktuelle Produktkatalog',OFFICIAL.catalog,'📘'],
    ['Produkt- und Sicherheitsdatenblätter','Produktinformation, SDB und Betriebsanweisungen',OFFICIAL.sheets,'📄'],
    ['Produktbilder','Aktuelle Bilddaten für Präsentationen und Angebote',OFFICIAL.images,'🖼️'],
    ['Anleitungen und Pläne','Anwendungshilfen und Pläne',OFFICIAL.plans,'📋'],
    ['Desinfektionspläne','Direkter Zugang zu aktuellen Desinfektionsplänen',OFFICIAL.disinfectionPlans,'🧼']
  ];
  return `<main class="page downloads-page"><div class="section-heading"><div><span class="eyebrow">Immer aktuell</span><h1>Downloads</h1><p>Alle Unterlagen werden direkt von den offiziellen Online-Quellen geöffnet.</p></div></div><div class="download-list">${links.map(([title,sub,url,emoji]) => `<a href="${url}" target="_blank" rel="noopener"><span class="download-icon">${emoji}</span><span><strong>${title}</strong><small>${sub}</small></span><b>↗</b></a>`).join('')}</div></main>`;
}

function spectrumBadge(s) {
  const cls = s.includes('PLUS') ? 'plus' : s === 'viruzid' ? 'viruzid' : s === 'sporizid' ? 'sporizid' : 'limited';
  return `<span class="badge ${cls}">${s}</span>`;
}
function documentLink(title, sub, url, emoji) {
  return `<a class="document-link" href="${url}" target="_blank" rel="noopener"><span>${emoji}</span><div><strong>${title}</strong><small>${sub}</small></div><b>↗</b></a>`;
}
function resolvePrice(product, size='') {
  const row = state.prices[product.sku] || state.prices[product.id] || {};
  if (size && row.sizes && row.sizes[size]) return row.sizes[size][state.priceList];
  return row[state.priceList];
}
function escapeHtml(text) { return String(text).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function bind() {
  document.querySelectorAll('[data-price]').forEach(button => button.onclick = () => {
    state.priceList = button.dataset.price;
    localStorage.setItem('priceList', state.priceList);
    render();
  });
  document.querySelectorAll('[data-action="prices"]').forEach(button => button.onclick = () => { state.screen='prices'; render(); });
  $('[data-action="start"]')?.addEventListener('click', () => { state.screen='menu'; render(); });
  $('[data-action="back"]')?.addEventListener('click', () => { state.screen = state.screen==='detail' ? 'products' : 'menu'; render(); });
  $('[data-action="clear-prices"]')?.addEventListener('click', () => { state.prices={}; localStorage.removeItem('prices'); render(); });
  document.querySelectorAll('[data-category]').forEach(button => button.onclick = () => { state.category=button.dataset.category; state.screen='products'; state.query=''; state.spectrum='all'; render(); });
  document.querySelectorAll('[data-spectrum]').forEach(button => button.onclick = () => { state.spectrum=button.dataset.spectrum; render(); });
  document.querySelectorAll('[data-product]').forEach(row => row.onclick = event => { if (event.target.closest('[data-favorite]')) return; state.selected=row.dataset.product; state.size=''; state.screen='detail'; render(); });
  document.querySelectorAll('[data-favorite]').forEach(button => button.onclick = event => { event.stopPropagation(); toggleFavorite(button.dataset.favorite); });
  document.querySelectorAll('[data-size]').forEach(button => button.onclick = () => { state.size=button.dataset.size; render(); });
  $('#search')?.addEventListener('input', event => { state.query=event.target.value; render(); });
  $('#excel')?.addEventListener('change', importExcel);
  document.querySelectorAll('[data-nav]').forEach(button => button.onclick = () => {
    const nav = button.dataset.nav;
    if (nav==='home') state.screen='menu';
    if (nav==='search') { state.screen='products'; state.category='all'; }
    if (nav==='favorites') state.screen='favorites';
    if (nav==='settings') state.screen='settings';
    render();
  });
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id) ? state.favorites.filter(x => x!==id) : [...state.favorites,id];
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
  render();
}

async function importExcel(event) {
  const status = $('#importStatus');
  const file = event.target.files[0];
  if (!file) return;
  if (typeof XLSX === 'undefined') { status.textContent='Excel-Modul konnte nicht geladen werden. Bitte Internetverbindung prüfen.'; return; }
  try {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {defval:''});
    const mapped = {};
    for (const row of rows) {
      const sku = String(row.Artikelnummer || row.SKU || row['Artikel-Nr.'] || '').trim();
      if (!sku) continue;
      mapped[sku] = {Gebinde:row.Gebinde||'', UVP:toNumber(row.UVP), 'FH 1':toNumber(row['FH 1']), 'FH 2':toNumber(row['FH 2']), 'FH 3':toNumber(row['FH 3']), 'FH 4':toNumber(row['FH 4']), 'FH 5':toNumber(row['FH 5'])};
    }
    state.prices = mapped;
    localStorage.setItem('prices', JSON.stringify(mapped));
    const hits = PRODUCTS.filter(p => mapped[p.sku]).length;
    status.textContent = `${Object.keys(mapped).length} Preiszeilen eingelesen · ${hits} Produkte zugeordnet`;
  } catch (error) { status.textContent='Import fehlgeschlagen: '+error.message; }
}
function toNumber(value) {
  if (value==='' || value==null) return '';
  if (typeof value==='number') return value;
  return Number(String(value).replace(/\./g,'').replace(',','.').replace(/[^0-9.-]/g,''));
}

render();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js').catch(() => {});
