const CATALOG = {
  "Lugares": [
    {id:"v1", name:"Jardín", floor:"#74875b", texture:"radial-gradient(circle at 5px 6px,#a5b779 0 1.5px,transparent 2px),radial-gradient(circle at 14px 13px,#526c46 0 1.3px,transparent 2px),radial-gradient(ellipse at 70% 70%,#899c65 0 6%,transparent 34%)", textureSize:"19px 19px,23px 23px,100% 100%", venue:true, title:"Jardín · vista superior"},
    {id:"v2", name:"Playa", floor:"#d7c296", texture:"radial-gradient(circle at 4px 5px,#f2dfb6 0 1px,transparent 1.7px),radial-gradient(circle at 13px 12px,#bca777 0 1px,transparent 1.8px),linear-gradient(145deg,#dbc99e,#c9b384)", textureSize:"17px 17px,23px 23px,100% 100%", venue:true, title:"Playa · vista superior"},
    {id:"v3", name:"Hacienda", floor:"#b97856", texture:"repeating-linear-gradient(0deg,transparent 0 47px,#814f3c88 48px 50px),repeating-linear-gradient(90deg,transparent 0 67px,#814f3c88 68px 70px),linear-gradient(135deg,#c98963,#ae704f)", textureSize:"100% 100%", venue:true, title:"Hacienda · vista superior"},
    {id:"v4", name:"Salón", floor:"#9a704d", texture:"repeating-linear-gradient(90deg,transparent 0 63px,#69472f55 64px 66px),repeating-linear-gradient(0deg,transparent 0 31px,#69472f66 32px 34px),repeating-linear-gradient(0deg,#b78c60 0 31px,#a77b54 32px 63px)", textureSize:"100% 100%", venue:true, title:"Salón · vista superior"},
    {id:"v5", name:"Terraza", floor:"#a9a89a", texture:"repeating-linear-gradient(0deg,transparent 0 71px,#77796e66 72px 74px),repeating-linear-gradient(90deg,transparent 0 71px,#77796e66 72px 74px),linear-gradient(135deg,#c1bdad,#a6a596)", textureSize:"100% 100%", venue:true, title:"Terraza · vista superior"},
    {id:"v6", name:"Iglesia", floor:"#c7bca5", texture:"repeating-linear-gradient(0deg,transparent 0 91px,#93856f66 92px 94px),repeating-linear-gradient(90deg,transparent 0 91px,#93856f66 92px 94px),linear-gradient(135deg,#d9d0bd,#bdb29b)", textureSize:"100% 100%", venue:true, title:"Iglesia · vista superior"}
  ],
  "Mesas": [
    {id:"t1", name:"Mesa redonda", kind:"table", w:120, h:120, label:"Mesa"},
    {id:"t2", name:"Mesa imperial", kind:"table", w:240, h:100, label:"Imperial", rect:true},
    {id:"t3", name:"Silla", size:48},
    {id:"t4", name:"Mesa de novios", kind:"table", w:260, h:100, label:"Novios", rect:true},
    {id:"t5", name:"Pista de baile", kind:"table", w:220, h:220, label:"Baile", dance:true},
    {id:"t6", name:"Sofá lounge", kind:"furniture", w:190, h:105},
    {id:"t7", name:"Bar de bebidas", kind:"furniture", w:210, h:100},
    {id:"t8", name:"Mesa coctelera", kind:"table", w:90, h:110, label:"Cóctel"},
    {id:"t9", name:"Mesa cuadrada", kind:"table", w:140, h:140},
    {id:"t10", name:"Mesa ovalada", kind:"table", w:210, h:120},
    {id:"t11", name:"Mesa para DJ", kind:"furniture", w:200, h:105},
    {id:"t12", name:"Mesa buffet", kind:"furniture", w:220, h:100},
    {id:"t13", name:"Mesa de regalos", kind:"furniture", w:160, h:90},
    {id:"t14", name:"Banco de ceremonia", kind:"furniture", w:170, h:76}
  ],
  "Decoración": [
    {id:"d1", name:"Arco floral", emoji:"💐", size:90},
    {id:"d2", name:"Flores", emoji:"🌸", size:40},
    {id:"d3", name:"Velas", emoji:"🕯️", size:36},
    {id:"d4", name:"Luces", emoji:"✨", size:60},
    {id:"d5", name:"Globos", emoji:"🎈", size:50},
    {id:"d6", name:"Alfombra", emoji:"🟥", size:60},
    {id:"d7", name:"Farol", size:54},
    {id:"d8", name:"Candelabro", emoji:"🕎", size:50},
    {id:"d9", name:"Jarrón floral", size:66},
    {id:"d10", name:"Letrero de bienvenida", kind:"furniture", w:130, h:78},
    {id:"d11", name:"Centro de mesa", size:52},
    {id:"d12", name:"Camino floral", kind:"furniture", w:190, h:58},
    {id:"d13", name:"Arco circular", size:90},
    {id:"d14", name:"Photocall floral", kind:"furniture", w:160, h:100},
    {id:"d15", name:"Plano de mesas", kind:"furniture", w:120, h:88},
    {id:"d16", name:"Columna floral", size:66},
    {id:"d17", name:"Libro de firmas", size:56},
    {id:"d18", name:"Letrero de ceremonia", kind:"furniture", w:130, h:78},
    {id:"d19", name:"Pétalos", size:48},
    {id:"d20", name:"Marco de fotos", size:70},
    {id:"d21", name:"Fuente de chispas", size:56}
  ],
  "Pasteles": [
    {id:"p1", name:"Clásico 3 pisos", emoji:"🎂", size:70},
    {id:"p2", name:"Naked cake", emoji:"🍰", size:60},
    {id:"p3", name:"Cupcakes", emoji:"🧁", size:50},
    {id:"p4", name:"Mesa de dulces", emoji:"🍬", size:60},
    {id:"p5", name:"Champagne", emoji:"🥂", size:46},
    {id:"p6", name:"Donas y postres", size:64}
  ],
  "Personas": [
    {id:"g1", name:"Novia", emoji:"👰", person:true, size:50},
    {id:"g2", name:"Novio", emoji:"🤵", person:true, size:50},
    {id:"g3", name:"Invitado", emoji:"🧑", person:true, guest:true, size:40},
    {id:"g4", name:"Invitada", emoji:"👩", person:true, guest:true, size:40},
    {id:"g5", name:"Niño/a", emoji:"🧒", person:true, guest:true, size:34},
    {id:"g6", name:"DJ / Músico", emoji:"🎧", person:true, size:44},
    {id:"g7", name:"Oficiante", emoji:"🧑‍⚖️", person:true, size:44}
  ],
  "Complementos": [
    {id:"u1", name:"Bocina", size:72},
    {id:"u2", name:"Señal de baños", kind:"furniture", w:100, h:72},
    {id:"u3", name:"Cabina de fotos", kind:"furniture", w:120, h:100},
    {id:"u4", name:"Estación de café", kind:"furniture", w:175, h:90}
  ]
};

const stage = document.getElementById("stage");
const stageSizer = document.getElementById("stageSizer");
const stageWrap = document.getElementById("stageWrap");
const tools = document.getElementById("tools");
const initialState = () => ({venue:"v1", items:[], c1:"#f4e1e1", c2:"#b76e79"});
let state = initialState();
let selected = null;
let uid = 0;
let tab = Object.keys(CATALOG)[0];
let toastTimer;
let zoomLevel = 1;
let panPointerId = null;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function renderTabs() {
  const container = document.getElementById("tabs");
  container.replaceChildren();
  Object.keys(CATALOG).forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.setAttribute("aria-pressed", String(category === tab));
    if (category === tab) button.className = "on";
    button.addEventListener("click", () => {
      tab = category;
      renderTabs();
      renderGrid();
    });
    container.appendChild(button);
  });
}

function renderGrid() {
  const grid = document.getElementById("grid");
  grid.replaceChildren();
  document.getElementById("catalogTitle").textContent = tab;
  document.getElementById("catalogHint").textContent = tab === "Lugares" ? "Toca para elegir un lugar" : "Toca para añadir al plano";
  CATALOG[tab].forEach(product => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.setAttribute("aria-label", `${product.venue ? "Elegir" : "Agregar"} ${product.name}`);
    const thumb = document.createElement("span");
    thumb.className = "thumb";
    if (product.venue) {
      applyFloor(thumb, product);
    } else {
      thumb.appendChild(buildIllustration(product));
    }
    const name = document.createElement("span");
    name.className = "card-name";
    name.textContent = product.name;
    card.append(thumb, name);
    card.addEventListener("click", () => product.venue ? setVenue(product) : addItem(product));
    grid.appendChild(card);
  });
}

function setVenue(product, silent=false) {
  state.venue = product.id;
  applyFloor(stage, product);
  document.getElementById("venueLabel").textContent = product.title;
  if (!silent) markUnsaved();
}

function applyFloor(element, product) {
  element.style.backgroundColor = product.floor;
  element.style.backgroundImage = product.texture;
  element.style.backgroundSize = product.textureSize;
  element.style.backgroundPosition = "center";
  element.style.backgroundRepeat = "repeat";
}

function findProduct(id) {
  for (const products of Object.values(CATALOG)) {
    const product = products.find(candidate => candidate.id === id);
    if (product) return product;
  }
  return null;
}

function flower(x, y, scale=1, color="#e8d9bc") {
  const petals = Array.from({length:8}, (_, index) =>
    `<ellipse cx="${x}" cy="${y-5*scale}" rx="${2.8*scale}" ry="${5*scale}" fill="${color}" transform="rotate(${index*45} ${x} ${y})"/>`
  ).join("");
  return `<g>${petals}<circle cx="${x}" cy="${y}" r="${2.4*scale}" fill="#b68e59"/></g>`;
}

function illustrationParts(product) {
  const id = product.id;
  if (id === "t1") {
    const chairs = Array.from({length:8}, (_, index) =>
      `<g transform="rotate(${index*45} 60 60)"><rect x="51" y="5" width="18" height="16" rx="5" fill="#806b54" stroke="#fff9" stroke-width="2"/><rect x="54" y="7" width="12" height="10" rx="4" fill="#d9ceb7"/></g>`
    ).join("");
    return {viewBox:"0 0 120 120", markup:`${chairs}<circle cx="60" cy="60" r="37" fill="#53473533"/><circle cx="60" cy="58" r="36" fill="var(--c1)" stroke="var(--c2)" stroke-width="2"/><circle cx="60" cy="58" r="30" fill="none" stroke="#ffffffb8"/><path d="M37 58h46M60 35v46" stroke="#ffffff80" stroke-width="1"/><g>${flower(60,58,.8,"#d4b28e")}${flower(52,54,.48,"#ebd9ce")}${flower(68,62,.48,"#d8c6a9")}</g><text x="60" y="95" text-anchor="middle" fill="#665b48" font-size="12" font-family="sans-serif">MESA</text>`};
  }
  if (id === "t2" || id === "t4") {
    const width = product.w;
    const height = product.h;
    const tableX = 17;
    const tableY = Math.round(height * .27);
    const tableWidth = width - 34;
    const tableHeight = Math.round(height * .46);
    const seatCount = Math.max(4, Math.floor(tableWidth / 37));
    const chairs = Array.from({length:seatCount}, (_, index) => {
      const x = tableX + (tableWidth / seatCount) * index + 5;
      return `<rect x="${x}" y="2" width="17" height="15" rx="5" fill="#806b54" stroke="#fff9" stroke-width="2"/><rect x="${x+3}" y="4" width="11" height="9" rx="3" fill="#d9ceb7"/><rect x="${x}" y="${height-17}" width="17" height="15" rx="5" fill="#806b54" stroke="#fff9" stroke-width="2"/><rect x="${x+3}" y="${height-15}" width="11" height="9" rx="3" fill="#d9ceb7"/>`;
    }).join("");
    const center = width / 2;
    const label = id === "t4" ? "NOVIOS" : "MESA IMPERIAL";
    return {viewBox:`0 0 ${width} ${height}`, markup:`${chairs}<rect x="${tableX}" y="${tableY+3}" width="${tableWidth}" height="${tableHeight}" rx="7" fill="#4d3e2d33"/><rect class="tabletop" x="${tableX}" y="${tableY}" width="${tableWidth}" height="${tableHeight}" rx="7" fill="var(--item-color, var(--c1))" stroke="var(--c2)" stroke-width="2"/><path d="M${tableX+9} ${tableY+8}h${tableWidth-18}v${tableHeight-16}h-${tableWidth-18}z" fill="none" stroke="#ffffffb8"/><path d="M${tableX+10} ${tableY+tableHeight/2}h${tableWidth-20}" stroke="#ffffff80"/>${flower(center,tableY+tableHeight/2,.7,"#d5b894")}<text x="${center}" y="${tableY+tableHeight-7}" text-anchor="middle" fill="#665b48" font-size="14" font-family="sans-serif" letter-spacing="1">${label}</text>`};
  }
  if (id === "t3") {
    return {viewBox:"0 0 48 48", markup:`<rect x="8" y="7" width="32" height="34" rx="11" fill="#755e48" stroke="#f6f1e7" stroke-width="3"/><rect class="chair-seat" x="12" y="10" width="24" height="23" rx="8" fill="#d8cbb1"/><path d="M15 36h18" stroke="#755e48" stroke-width="3" stroke-linecap="round"/>`};
  }
  if (id === "t6") {
    return {viewBox:"0 0 190 105", markup:`<rect x="8" y="10" width="174" height="84" rx="22" fill="#473a2b35"/><rect x="8" y="7" width="174" height="82" rx="22" fill="#8a6852" stroke="#fff9" stroke-width="3"/><rect class="sofa-seat" x="22" y="18" width="146" height="56" rx="15" fill="var(--item-color, #d6bd9c)" stroke="#fff9" stroke-width="2"/><path d="M27 81h136" stroke="#e8dccb" stroke-width="5" stroke-linecap="round"/>`};
  }
  if (id === "t7") {
    return {viewBox:"0 0 210 100", markup:`<rect x="10" y="13" width="190" height="77" rx="12" fill="#493b2d35"/><rect x="10" y="8" width="190" height="74" rx="12" fill="#8a6852" stroke="#fff9" stroke-width="3"/><rect class="bar-top" x="19" y="15" width="172" height="48" rx="7" fill="var(--item-color, #d6bd9c)" stroke="#fff9" stroke-width="2"/><path d="M27 70h156" stroke="#594432" stroke-width="4"/><circle cx="55" cy="37" r="10" fill="#fffdf4"/><circle cx="105" cy="37" r="10" fill="#e1c489"/><circle cx="155" cy="37" r="10" fill="#c88879"/>`};
  }
  if (id === "t5") {
    const tiles = Array.from({length:25}, (_, index) => {
      const x = 20 + (index % 5) * 36;
      const y = 20 + Math.floor(index / 5) * 36;
      return `<rect x="${x}" y="${y}" width="36" height="36" fill="${(index + Math.floor(index/5))%2 ? "#eee7d7" : "#c9bea6"}"/>`;
    }).join("");
    return {viewBox:"0 0 220 220", markup:`<rect x="8" y="8" width="204" height="204" rx="13" fill="#4d3e2d33"/><rect class="dance-floor" x="10" y="10" width="200" height="200" rx="12" fill="var(--item-color, #f3eddf)" stroke="#fff" stroke-width="3"/>${tiles}<rect x="20" y="20" width="180" height="180" rx="2" fill="none" stroke="#8a7658" stroke-width="2"/>`};
  }
  if (id === "t8") {
    return {viewBox:"0 0 90 110", markup:`<ellipse cx="45" cy="56" rx="39" ry="47" fill="#493b2d33"/><ellipse cx="45" cy="51" rx="36" ry="43" fill="#8a6852" stroke="#fff9" stroke-width="3"/><ellipse cx="45" cy="48" rx="27" ry="33" fill="var(--item-color, #d6bd9c)" stroke="#fff9" stroke-width="2"/><circle cx="45" cy="48" r="9" fill="#e7d6bf" stroke="#ae9571" stroke-width="2"/>${flower(45,48,.48,"#d09d91")}`};
  }
  if (id === "t9") {
    const chairs = [[58,4],[58,118],[4,58],[118,58]].map(([x,y]) =>
      `<rect x="${x}" y="${y}" width="20" height="18" rx="6" fill="#806b54" stroke="#fff9" stroke-width="2"/>`
    ).join("");
    return {viewBox:"0 0 140 140", markup:`${chairs}<rect x="25" y="25" width="90" height="90" rx="8" fill="#493b2d33"/><rect class="square-tabletop" x="25" y="22" width="90" height="90" rx="8" fill="var(--item-color, var(--c1))" stroke="var(--c2)" stroke-width="3"/><rect x="34" y="31" width="72" height="72" rx="5" fill="none" stroke="#fff9" stroke-width="2"/>${flower(70,67,.8,"#dfb8ad")}`};
  }
  if (id === "t10") {
    const chairs = [[24,3],[83,3],[24,100],[83,100]].map(([x,y]) =>
      `<rect x="${x}" y="${y}" width="20" height="17" rx="6" fill="#806b54" stroke="#fff9" stroke-width="2"/>`
    ).join("");
    return {viewBox:"0 0 210 120", markup:`${chairs}<ellipse cx="105" cy="60" rx="92" ry="42" fill="#493b2d33"/><ellipse class="oval-tabletop" cx="105" cy="56" rx="90" ry="41" fill="var(--item-color, var(--c1))" stroke="var(--c2)" stroke-width="3"/><ellipse cx="105" cy="56" rx="78" ry="32" fill="none" stroke="#fff9" stroke-width="2"/>${flower(105,56,.75,"#dfb8ad")}`};
  }
  if (id === "t11") {
    return {viewBox:"0 0 200 105", markup:`<rect x="8" y="13" width="184" height="82" rx="12" fill="#493b2d44"/><rect x="8" y="8" width="184" height="82" rx="12" fill="#70553f" stroke="#fff9" stroke-width="3"/><rect class="dj-console" x="17" y="15" width="166" height="61" rx="7" fill="var(--item-color, #3f4545)" stroke="#e8dccb" stroke-width="2"/><circle cx="50" cy="44" r="17" fill="#252c2c" stroke="#bca87c" stroke-width="3"/><circle cx="50" cy="44" r="5" fill="#bca87c"/><circle cx="150" cy="44" r="17" fill="#252c2c" stroke="#bca87c" stroke-width="3"/><circle cx="150" cy="44" r="5" fill="#bca87c"/><path d="M78 26h44M78 35h44M78 44h44M78 53h44" stroke="#d8c9a7" stroke-width="3" stroke-linecap="round"/><circle cx="84" cy="67" r="3" fill="#d77d6d"/><circle cx="96" cy="67" r="3" fill="#9db18d"/><circle cx="108" cy="67" r="3" fill="#e2c47d"/><text x="100" y="88" text-anchor="middle" fill="#fff9ee" font-size="10" font-family="sans-serif" letter-spacing="2">DJ</text>`};
  }
  if (id === "t12") {
    return {viewBox:"0 0 220 100", markup:`<rect x="8" y="13" width="204" height="78" rx="12" fill="#493b2d33"/><rect x="8" y="8" width="204" height="76" rx="11" fill="#806b54" stroke="#fff9" stroke-width="3"/><rect class="buffet-top" x="17" y="15" width="186" height="55" rx="8" fill="var(--item-color, #d6bd9c)" stroke="#fff" stroke-width="2"/><rect x="27" y="24" width="48" height="36" rx="7" fill="#f3ead8" stroke="#b69e78" stroke-width="2"/><rect x="86" y="24" width="48" height="36" rx="7" fill="#efe4d2" stroke="#b69e78" stroke-width="2"/><rect x="145" y="24" width="48" height="36" rx="7" fill="#f3ead8" stroke="#b69e78" stroke-width="2"/><circle cx="51" cy="42" r="10" fill="#c8876e"/><circle cx="110" cy="42" r="10" fill="#9aab7f"/><circle cx="169" cy="42" r="10" fill="#d3b46e"/><text x="110" y="81" text-anchor="middle" fill="#fff9ee" font-size="9" font-family="sans-serif" letter-spacing="1.5">BUFFET</text>`};
  }
  if (id === "t13") {
    return {viewBox:"0 0 160 90", markup:`<rect x="8" y="12" width="144" height="66" rx="11" fill="#493b2d33"/><rect x="8" y="8" width="144" height="65" rx="10" fill="#806b54" stroke="#fff9" stroke-width="3"/><rect class="gift-tabletop" x="15" y="14" width="130" height="45" rx="7" fill="var(--item-color, #d6bd9c)" stroke="#fff" stroke-width="2"/><rect x="28" y="23" width="31" height="25" rx="3" fill="#d59d91"/><path d="M43 23v25M28 34h31M43 23q-12-13-13 0 5 5 13 0 13-13 14 0-5 5-14 0" fill="none" stroke="#f8e9d8" stroke-width="2"/><rect x="72" y="25" width="25" height="23" rx="3" fill="#a5b28d"/><path d="M84 25v23M72 36h25" stroke="#f8e9d8" stroke-width="2"/><text x="80" y="71" text-anchor="middle" fill="#fff9ee" font-size="8" font-family="sans-serif" letter-spacing="1">REGALOS</text>`};
  }
  if (id === "t14") {
    return {viewBox:"0 0 170 76", markup:`<rect x="12" y="13" width="146" height="52" rx="19" fill="#493b2d33"/><rect class="bench-seat" x="10" y="9" width="150" height="52" rx="18" fill="var(--item-color, #b99576)" stroke="#fff9" stroke-width="3"/><path d="M24 18h122M24 52h122" stroke="#fff8e8" stroke-width="3" stroke-linecap="round"/><path d="M35 14v42M85 14v42M135 14v42" stroke="#765c43" stroke-width="2" opacity=".65"/>`};
  }
  if (id === "d1" || id === "d2") {
    const positions = id === "d1"
      ? [[20,52],[38,34],[58,25],[78,34],[96,52],[30,67],[86,67]]
      : [[50,28],[35,43],[64,43],[43,61],[58,62]];
    return {viewBox:"0 0 120 100", markup:`<path d="M${positions.map(([x,y])=>`${x},${y}`).join(" L")}" fill="none" stroke="#5d7651" stroke-width="5" stroke-linecap="round"/>${positions.map(([x,y],index)=>flower(x,y,index===0&&id==="d2"?1:.82,index%2?"#f7efe0":"#dfb8ad")).join("")}`};
  }
  if (id === "d3") {
    return {viewBox:"0 0 80 80", markup:`<circle cx="40" cy="40" r="33" fill="#e2d7c3" stroke="#fff" stroke-width="3"/><circle class="candle" cx="25" cy="30" r="10" fill="var(--item-color, #fffaf0)" stroke="#c9b991" stroke-width="2"/><circle class="candle" cx="52" cy="28" r="10" fill="var(--item-color, #fffaf0)" stroke="#c9b991" stroke-width="2"/><circle class="candle" cx="40" cy="52" r="10" fill="var(--item-color, #fffaf0)" stroke="#c9b991" stroke-width="2"/><path d="M25 25v6M52 23v6M40 47v6" stroke="#e7a95d" stroke-width="3" stroke-linecap="round"/>`};
  }
  if (id === "d4") {
    return {viewBox:"0 0 100 70", markup:`<path d="M8 50Q28 4 50 34T92 15" fill="none" stroke="#536d4c" stroke-width="3" stroke-linecap="round"/>${[[12,42],[25,24],[39,24],[52,37],[66,37],[81,29],[91,16]].map(([x,y],index)=>`<circle class="light-bulb" cx="${x}" cy="${y}" r="${index%2?5:4}" fill="var(--item-color, #f5d985)" stroke="#fff7df" stroke-width="2"/>`).join("")}`};
  }
  if (id === "d5") {
    return {viewBox:"0 0 80 80", markup:`<path d="M39 45q-9 12-5 24M42 45q12 11 8 24M36 45q-18 7-16 21" fill="none" stroke="#97816e" stroke-width="1.5"/><circle class="balloon" cx="25" cy="30" r="15" fill="#d99c96" stroke="#fff7ed" stroke-width="2"/><circle class="balloon" cx="51" cy="27" r="15" fill="#b7c2a0" stroke="#fff7ed" stroke-width="2"/><circle class="balloon" cx="39" cy="48" r="15" fill="#e8cfaa" stroke="#fff7ed" stroke-width="2"/><circle cx="25" cy="30" r="5" fill="#fff5" /><circle cx="51" cy="27" r="5" fill="#fff5" />`};
  }
  if (id === "d6") {
    return {viewBox:"0 0 90 90", markup:`<rect x="7" y="7" width="76" height="76" rx="3" fill="#6d3340" stroke="#fff" stroke-width="4"/><rect class="rug" x="14" y="14" width="62" height="62" fill="var(--item-color, #9d6659)" stroke="#d4b58a" stroke-width="2"/><path d="M20 20h50v50H20zM20 20l50 50M70 20L20 70" fill="none" stroke="#e5cda4" stroke-width="2"/>`};
  }
  if (id === "d7") {
    return {viewBox:"0 0 80 80", markup:`<circle cx="40" cy="40" r="35" fill="#51483833"/><path d="M27 61h26l-4-9H31z" fill="#6c5740"/><path class="lantern-glass" d="M30 50h20l-3-21H33z" fill="var(--item-color, #d9b879)" stroke="#fff8e8" stroke-width="2"/><path d="M29 28h22L40 10z" fill="#765e41" stroke="#fff8e8" stroke-width="2"/><circle cx="40" cy="39" r="6" fill="#fff2c9"/><path d="M40 8v-4" stroke="#765e41" stroke-width="3" stroke-linecap="round"/>`};
  }
  if (id === "d8") {
    return {viewBox:"0 0 80 80", markup:`<circle class="chandelier" cx="40" cy="40" r="31" fill="var(--item-color, #d8c9a7)" stroke="#fff" stroke-width="3"/>${Array.from({length:8},(_,i)=>`<circle cx="40" cy="14" r="7" fill="#e9dfc9" stroke="#9c896a" stroke-width="1" transform="rotate(${i*45} 40 40)"/>`).join("")}<circle cx="40" cy="40" r="11" fill="#b79d72" stroke="#fff2d6" stroke-width="2"/>`};
  }
  if (id === "d9" || id === "d11" || id === "d13") {
    const scale = id === "d9" ? 1 : id === "d13" ? 1.15 : .78;
    return {viewBox:"0 0 100 100", markup:`<ellipse cx="50" cy="86" rx="27" ry="8" fill="#4d3e2d22"/><path class="vase" d="M32 63h36l-5 20H37z" fill="var(--item-color, #c99e80)" stroke="#fff9" stroke-width="2"/><path d="M37 62V43M50 61V35M63 62V43M40 48l-9-9M60 43l9-10" fill="none" stroke="#5d7651" stroke-width="3" stroke-linecap="round"/>${flower(31,37,scale,"#dfb8ad")}${flower(50,32,scale,"#f7efe0")}${flower(69,29,scale,"#d8c6a9")}`};
  }
  if (id === "d10") {
    return {viewBox:"0 0 130 78", markup:`<path d="M16 68h98" stroke="#7b654a" stroke-width="4" stroke-linecap="round"/><path d="M27 62V20M103 62V20" stroke="#806b54" stroke-width="4"/><rect class="sign-board" x="14" y="8" width="102" height="43" rx="5" fill="var(--item-color, #eadbc1)" stroke="#fff" stroke-width="3"/><rect x="20" y="14" width="90" height="31" rx="3" fill="none" stroke="#aa8d69" stroke-width="1.5"/><text x="65" y="28" text-anchor="middle" fill="#655545" font-size="8" font-family="serif">BIENVENIDOS</text><text x="65" y="38" text-anchor="middle" fill="#655545" font-size="6" font-family="serif">A NUESTRA BODA</text>`};
  }
  if (id === "d12") {
    return {viewBox:"0 0 190 58", markup:`<rect class="floral-runner" x="4" y="5" width="182" height="48" rx="8" fill="var(--item-color, #e8ddd0)" stroke="#fff" stroke-width="3"/><path d="M12 12h166v34H12z" fill="none" stroke="#fff9" stroke-width="2"/>${[22,48,74,100,126,152,174].map((x,index)=>flower(x,index%2?26:35,.4,index%2?"#d8b8ad":"#d8c6a9")).join("")}`};
  }
  if (id === "d14") {
    return {viewBox:"0 0 160 100", markup:`<rect x="8" y="10" width="144" height="78" rx="8" fill="#493b2d33"/><rect class="photocall-backdrop" x="10" y="8" width="140" height="76" rx="8" fill="var(--item-color, #d8c9b5)" stroke="#fff" stroke-width="3"/><rect x="20" y="17" width="120" height="58" rx="5" fill="none" stroke="#fff9" stroke-width="2"/>${[25,46,68,91,113,135].map((x,index)=>flower(x,index%2?20:70,.55,index%2?"#dfb8ad":"#f4ecdf")).join("")}<text x="80" y="52" text-anchor="middle" fill="#665545" font-size="10" font-family="serif" letter-spacing="2">FOTOS</text>`};
  }
  if (id === "d15") {
    return {viewBox:"0 0 120 88", markup:`<path d="M25 79h70M35 74V18M85 74V18" stroke="#806b54" stroke-width="4" stroke-linecap="round"/><rect class="seating-chart" x="18" y="8" width="84" height="54" rx="5" fill="var(--item-color, #efe2ce)" stroke="#fff" stroke-width="3"/><rect x="25" y="15" width="70" height="40" rx="3" fill="none" stroke="#b79a74" stroke-width="1.5"/><text x="60" y="27" text-anchor="middle" fill="#655545" font-size="7" font-family="serif">ASIENTOS</text><path d="M35 34h12m8 0h12m8 0h12M35 41h12m8 0h12m8 0h12M35 48h12m8 0h12m8 0h12" stroke="#aa8d69" stroke-width="2"/>`};
  }
  if (id === "d16") {
    return {viewBox:"0 0 80 80", markup:`<ellipse cx="40" cy="69" rx="24" ry="6" fill="#493b2d33"/><path d="M29 67h22L47 48H33z" fill="#b89a77" stroke="#fff" stroke-width="2"/><path d="M40 52V32M40 42L25 29M40 39L55 26M40 34V19" fill="none" stroke="#5d7651" stroke-width="3" stroke-linecap="round"/>${flower(25,27,.8,"#dfb8ad")}${flower(55,24,.8,"#f7efe0")}${flower(40,18,.8,"#d8c6a9")}${flower(40,37,.55,"#e8c1b6")}`};
  }
  if (id === "d17") {
    return {viewBox:"0 0 80 80", markup:`<path class="guestbook-cover" d="M12 20q16-9 28 1v42q-12-10-28-1z" fill="var(--item-color, #d6b49b)" stroke="#fff" stroke-width="3"/><path class="guestbook-cover" d="M68 20q-16-9-28 1v42q12-10 28-1z" fill="var(--item-color, #d6b49b)" stroke="#fff" stroke-width="3"/><path d="M40 21v42M19 30q9-3 15 1M19 38q9-3 15 1M61 30q-9-3-15 1M61 38q-9-3-15 1" fill="none" stroke="#fff9" stroke-width="2"/><path d="M32 13h16" stroke="#bd9b72" stroke-width="3" stroke-linecap="round"/>`};
  }
  if (id === "d18") {
    return {viewBox:"0 0 130 78", markup:`<path d="M15 68h100M25 62V20M105 62V20" stroke="#806b54" stroke-width="4"/><rect class="ceremony-sign" x="12" y="8" width="106" height="48" rx="6" fill="var(--item-color, #efe2ce)" stroke="#fff" stroke-width="3"/><rect x="19" y="15" width="92" height="34" rx="3" fill="none" stroke="#b79a74" stroke-width="1.5"/><text x="65" y="30" text-anchor="middle" fill="#655545" font-size="8" font-family="serif">CEREMONIA</text><text x="65" y="41" text-anchor="middle" fill="#655545" font-size="6" font-family="serif">BIENVENIDOS</text>`};
  }
  if (id === "d19") {
    return {viewBox:"0 0 80 80", markup:`<circle cx="40" cy="40" r="35" fill="#fffdf4" stroke="#e6dccb" stroke-width="2"/>${[[23,23],[42,18],[57,27],[33,39],[51,43],[20,54],[41,61],[60,59],[29,68]].map(([x,y],index)=>`<ellipse class="petal" cx="${x}" cy="${y}" rx="7" ry="3" transform="rotate(${index*29} ${x} ${y})" fill="var(--item-color, ${index%2?"#d6a5a1":"#efe0d7"})"/>`).join("")}`};
  }
  if (id === "d20") {
    return {viewBox:"0 0 80 80", markup:`<rect x="9" y="11" width="62" height="58" rx="4" fill="#493b2d33"/><rect class="photo-frame" x="8" y="8" width="64" height="58" rx="4" fill="var(--item-color, #c8a77f)" stroke="#fff" stroke-width="3"/><rect x="15" y="15" width="50" height="44" rx="2" fill="#eef0e5" stroke="#f8f2e7" stroke-width="3"/><circle cx="40" cy="30" r="8" fill="#c98f7d"/><path d="M25 53q3-15 15-15t15 15" fill="#8c9b78"/>`};
  }
  if (id === "d21") {
    return {viewBox:"0 0 80 80", markup:`<ellipse cx="40" cy="69" rx="22" ry="6" fill="#493b2d33"/><path d="M27 67h26l-5-25H32z" fill="#8c7358" stroke="#fff" stroke-width="2"/><ellipse class="spark-base" cx="40" cy="61" rx="14" ry="5" fill="var(--item-color, #8c7358)"/><path d="M40 42V20M34 41L20 27M46 41l14-17M32 38l-8-4M48 38l8-5M40 32l-2-15M35 30l-7-8M45 30l8-8" fill="none" stroke="#efc66c" stroke-width="3" stroke-linecap="round"/><circle cx="21" cy="25" r="2" fill="#fff1bc"/><circle cx="60" cy="21" r="2" fill="#fff1bc"/><circle cx="39" cy="13" r="2" fill="#fff1bc"/>`};
  }
  if (id === "u1") {
    return {viewBox:"0 0 72 72", markup:`<rect x="8" y="8" width="56" height="56" rx="9" fill="#493b2d33"/><rect class="speaker-body" x="9" y="7" width="54" height="56" rx="8" fill="var(--item-color, #454b4b)" stroke="#fff" stroke-width="3"/><circle cx="36" cy="25" r="11" fill="#282d2d" stroke="#d6c6a4" stroke-width="2"/><circle cx="36" cy="25" r="4" fill="#a9b29b"/><circle cx="36" cy="47" r="8" fill="#282d2d" stroke="#d6c6a4" stroke-width="2"/><circle cx="36" cy="47" r="3" fill="#a9b29b"/>`};
  }
  if (id === "u2") {
    return {viewBox:"0 0 100 72", markup:`<path d="M13 67h74M23 63V18M77 63V18" stroke="#806b54" stroke-width="4"/><rect class="restroom-sign" x="11" y="6" width="78" height="48" rx="6" fill="var(--item-color, #d8c9b5)" stroke="#fff" stroke-width="3"/><circle cx="35" cy="23" r="5" fill="#665545"/><path d="M35 29v15m-7-8h14M65 23a5 5 0 1 0 0 .1M65 29l-7 14m7-14 7 14m-7-8h9" fill="none" stroke="#665545" stroke-width="3" stroke-linecap="round"/><path d="M47 29h6m-6 7h6m-6 7h6" stroke="#a78d6a" stroke-width="2"/>`};
  }
  if (id === "u3") {
    return {viewBox:"0 0 120 100", markup:`<rect x="8" y="11" width="104" height="78" rx="10" fill="#493b2d33"/><rect class="photo-booth" x="9" y="7" width="102" height="80" rx="9" fill="var(--item-color, #d8c9b5)" stroke="#fff" stroke-width="3"/><path d="M18 18h84v58H18z" fill="none" stroke="#fff9" stroke-width="2"/><circle cx="60" cy="44" r="18" fill="#eee7d9" stroke="#b69e78" stroke-width="3"/><circle cx="60" cy="44" r="11" fill="#778b7b" stroke="#fff" stroke-width="2"/><circle cx="84" cy="21" r="4" fill="#e4bd70"/><text x="60" y="77" text-anchor="middle" fill="#665545" font-size="8" font-family="sans-serif" letter-spacing="1">FOTOS</text>`};
  }
  if (id === "u4") {
    return {viewBox:"0 0 175 90", markup:`<rect x="8" y="12" width="159" height="66" rx="11" fill="#493b2d33"/><rect x="8" y="8" width="159" height="65" rx="10" fill="#806b54" stroke="#fff9" stroke-width="3"/><rect class="coffee-counter" x="16" y="14" width="143" height="45" rx="7" fill="var(--item-color, #d6bd9c)" stroke="#fff" stroke-width="2"/><rect x="24" y="22" width="30" height="28" rx="5" fill="#4a4840"/><path d="M31 22v-5h16v5M54 31h9v17H54" fill="none" stroke="#efe2ce" stroke-width="3"/><circle cx="86" cy="36" r="11" fill="#f4e3c6"/><path d="M104 27h39v19h-39z" fill="#d0a470" stroke="#fff2" stroke-width="2"/><text x="87" y="70" text-anchor="middle" fill="#fff9ee" font-size="8" font-family="sans-serif" letter-spacing="1.5">CAFÉ</text>`};
  }
  if (["p1","p2","p3"].includes(id)) {
    const count = id === "p3" ? 7 : 1;
    const treats = Array.from({length:count}, (_, index) => {
      const x = count === 1 ? 50 : 22 + (index % 3) * 28;
      const y = count === 1 ? 50 : 23 + Math.floor(index / 3) * 27;
      const radius = id === "p1" ? 27 : 15;
      return `<circle class="dessert-tier" cx="${x}" cy="${y}" r="${radius}" fill="${id==="p1"?"#fffaf0":id==="p2"?"#ddc39c":"#e7d6bf"}" stroke="#bda989" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${radius*.7}" fill="none" stroke="#ead7b3" stroke-width="2"/>${flower(x,y,radius*.012,"#d9b4a2")}`;
    }).join("");
    return {viewBox:"0 0 100 100", markup:`<circle cx="50" cy="50" r="46" fill="#fffdf5" stroke="#c7b89e" stroke-width="3"/>${treats}`};
  }
  if (id === "p4") {
    return {viewBox:"0 0 110 75", markup:`<rect x="8" y="9" width="94" height="57" rx="10" fill="#eee3d1" stroke="#fff" stroke-width="3"/><rect x="17" y="18" width="76" height="39" rx="7" fill="#fffaf0" stroke="#c9b99d" stroke-width="2"/>${[[29,29],[48,29],[67,29],[84,29],[38,46],[58,46],[78,46]].map(([x,y],index)=>`<circle cx="${x}" cy="${y}" r="6" fill="${["#d69c8d","#d6bd8b","#9fae8a"][index%3]}" stroke="#fff" stroke-width="1.5"/>`).join("")}`};
  }
  if (id === "p5") {
    return {viewBox:"0 0 80 80", markup:`<circle cx="40" cy="40" r="36" fill="#f1e8d8" stroke="#fff" stroke-width="3"/><path d="M22 18l7 31q2 8 10 8t10-8l7-31M25 25h27M40 57v9M31 67h18" fill="none" stroke="#b29a70" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 38h12" stroke="#e3c781" stroke-width="4" stroke-linecap="round"/>`};
  }
  if (id === "p6") {
    return {viewBox:"0 0 90 90", markup:`<circle cx="45" cy="45" r="41" fill="#fffdf5" stroke="#c7b89e" stroke-width="3"/>${[[27,30],[48,25],[65,34],[34,52],[56,52],[25,68],[48,72],[68,68]].map(([x,y],index)=>`<circle class="dessert-tier" cx="${x}" cy="${y}" r="8" fill="var(--item-color, ${index%2?"#d9b4a2":"#d9c69e"})" stroke="#fff" stroke-width="2"/><circle cx="${x}" cy="${y}" r="3" fill="#fff8"/>`).join("")}`};
  }
  const head = id === "g1"
    ? `<circle cx="32" cy="15" r="13" fill="#f3ead8" stroke="#fff" stroke-width="2"/>`
    : `<circle cx="32" cy="14" r="10" fill="${id==="g2"?"#c18c6c":"#bc886b"}" stroke="#fff" stroke-width="2"/>`;
  let outfit = `<path class="person-clothes" d="M22 27Q32 22 42 27L51 53Q32 62 13 53Z" fill="${id==="g2"?"#45504b":id==="g4"?"#b98488":"#7f9272"}" stroke="#fff" stroke-width="2"/>`;
  if (id === "g1") outfit = `<path class="person-clothes" d="M21 27Q32 22 43 27L52 55Q32 63 12 55Z" fill="#fffaf0" stroke="#d6c8ae" stroke-width="2"/><path d="M24 33l8 3 8-3M20 49h24" stroke="#eadfc9" stroke-width="2"/>`;
  if (id === "g2") outfit += `<path d="M32 29v25M25 31l7 7 7-7" fill="none" stroke="#fff" stroke-width="3"/>`;
  if (id === "g5") outfit = `<path class="person-clothes" d="M24 26Q32 23 40 26L45 48Q32 54 19 48Z" fill="#83a6a2" stroke="#fff" stroke-width="2"/>`;
  if (id === "g6") outfit += `<path d="M20 15a12 12 0 0 1 24 0" fill="none" stroke="#333" stroke-width="4"/><rect x="17" y="13" width="5" height="12" rx="2" fill="#333"/><rect x="42" y="13" width="5" height="12" rx="2" fill="#333"/>`;
  if (id === "g7") outfit = `<path class="person-clothes" d="M20 27Q32 22 44 27L51 55Q32 62 13 55Z" fill="#695b75" stroke="#fff" stroke-width="2"/><path d="M27 29h10v20H27z" fill="#f4eee4"/>`;
  return {viewBox:"0 0 64 64", markup:`<circle cx="32" cy="33" r="29" fill="#fffdf1" stroke="#d8cfbb" stroke-width="2"/>${head}${outfit}`};
}

function buildIllustration(product) {
  const illustration = illustrationParts(product);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", illustration.viewBox);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.innerHTML = illustration.markup;
  const colorable = {
    t1:["circle:nth-of-type(2)"],
    t2:[".tabletop"], t4:[".tabletop"], t3:[".chair-seat"], t5:[".dance-floor"],
    t6:[".sofa-seat"], t7:[".bar-top"], t8:["ellipse:nth-of-type(2)"],
    t9:[".square-tabletop"], t10:[".oval-tabletop"], t11:[".dj-console"], t12:[".buffet-top"],
    t13:[".gift-tabletop"], t14:[".bench-seat"],
    d1:["ellipse"], d2:["ellipse"], d3:[".candle"], d4:[".light-bulb"], d5:[".balloon"],
    d6:[".rug"], d7:[".lantern-glass"], d8:[".chandelier"], d9:[".vase"], d10:[".sign-board"],
    d11:[".vase"], d12:[".floral-runner"], d13:["ellipse"], d14:[".photocall-backdrop"],
    d15:[".seating-chart"], d16:["path:first-of-type"], d17:[".guestbook-cover"],
    d18:[".ceremony-sign"], d19:[".petal"], d20:[".photo-frame"], d21:[".spark-base"],
    u1:[".speaker-body"], u2:[".restroom-sign"], u3:[".photo-booth"], u4:[".coffee-counter"],
    p1:[".dessert-tier"], p2:[".dessert-tier"], p3:[".dessert-tier"], p4:["circle"], p6:[".dessert-tier"],
    g1:[".person-clothes"], g2:[".person-clothes"], g3:[".person-clothes"], g4:[".person-clothes"],
    g5:[".person-clothes"], g6:[".person-clothes"], g7:[".person-clothes"]
  }[product.id] || [];
  colorable.forEach(selector => svg.querySelectorAll(selector).forEach(shape => {
    const fill = shape.getAttribute("fill");
    if (fill && !fill.includes("--item-color")) {
      shape.setAttribute("fill", `var(--item-color, ${fill})`);
    }
  }));
  return svg;
}

function addItem(product, data) {
  const item = data || {
    uid:++uid, pid:product.id,
    x:Math.round((stage.clientWidth - (product.w || product.size || 50)) / 2),
    y:Math.round((stage.clientHeight - (product.h || product.size || 50)) / 2),
    rot:0, scale:1, name:""
  };
  if (!data && product.guest) item.name = window.prompt("Nombre del invitado (opcional):", "") || "";
  if (data) uid = Math.max(uid, Number(item.uid) || 0);
  else state.items.push(item);

  const element = document.createElement("div");
  element.className = "item";
  element.dataset.uid = item.uid;
  const definition = findProduct(item.pid);
  if (!definition) return;
  if (definition.kind === "table" || definition.kind === "furniture") {
    element.classList.add(definition.kind);
    if (definition.rect) element.classList.add("rectangular");
    element.style.width = `${definition.w}px`;
    element.style.height = `${definition.h}px`;
  } else {
    const size = definition.size || 50;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    if (definition.person) element.classList.add("person");
  }
  const illustration = buildIllustration(definition);
  if (item.color) illustration.style.setProperty("--item-color", item.color);
  element.appendChild(illustration);
  if (item.name) {
    const label = document.createElement("small");
    label.textContent = item.name;
    element.appendChild(label);
  }
  place(element, item);
  attachDrag(element, item);
  stage.appendChild(element);
  if (!data) select(item, element);
  updateCount();
  updateHint();
  markUnsaved();
}

function place(element, item) {
  element.style.left = `${item.x}px`;
  element.style.top = `${item.y}px`;
  element.style.transform = `rotate(${item.rot}deg) scale(${item.scale})`;
}

function attachDrag(element, item) {
  element.addEventListener("pointerdown", event => {
    event.preventDefault();
    select(item, element);
    const pointer = stagePoint(event.clientX, event.clientY);
    const pointerX = pointer.x;
    const pointerY = pointer.y;
    const offsetX = pointerX - item.x;
    const offsetY = pointerY - item.y;
    element.setPointerCapture(event.pointerId);
    const move = moveEvent => {
      const currentPointer = stagePoint(moveEvent.clientX, moveEvent.clientY);
      const x = currentPointer.x - offsetX;
      const y = currentPointer.y - offsetY;
      item.x = Math.max(0, Math.min(stage.clientWidth - element.offsetWidth, x));
      item.y = Math.max(0, Math.min(stage.clientHeight - element.offsetHeight, y));
      place(element, item);
      positionTools();
      markUnsaved();
    };
    const finish = () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerup", finish);
      element.removeEventListener("pointercancel", finish);
    };
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerup", finish);
    element.addEventListener("pointercancel", finish);
  });
}

function stagePoint(clientX, clientY) {
  const rect = stage.getBoundingClientRect();
  const scale = Number(stage.dataset.scale) || 1;
  return {
    x:(clientX - rect.left) / scale - stage.clientLeft,
    y:(clientY - rect.top) / scale - stage.clientTop
  };
}

function select(item, element) {
  document.querySelectorAll(".item.sel").forEach(node => node.classList.remove("sel"));
  selected = {item, element};
  element.classList.add("sel");
  tools.style.display = "flex";
  document.getElementById("selectedItemLabel").textContent = findProduct(item.pid)?.name || "Editar objeto";
  document.getElementById("itemColor").value = item.color || state.c1;
  positionTools();
}

function positionTools() {
  if (!selected || tools.style.display === "none") return;
  const bounds = selected.element.getBoundingClientRect();
  const margin = 10;
  const left = Math.min(
    Math.max(margin, bounds.left + bounds.width / 2 - tools.offsetWidth / 2),
    window.innerWidth - tools.offsetWidth - margin
  );
  const below = bounds.bottom + 10;
  const top = below + tools.offsetHeight <= window.innerHeight - margin
    ? below
    : Math.max(margin, bounds.top - tools.offsetHeight - 10);
  tools.style.left = `${left}px`;
  tools.style.top = `${top}px`;
}

function clearSelection() {
  document.querySelectorAll(".item.sel").forEach(element => element.classList.remove("sel"));
  selected = null;
  tools.style.display = "none";
}

window.addEventListener("resize", positionTools);
window.addEventListener("scroll", positionTools, true);

function makeLayoutItem(pid, centerX, centerY, options={}) {
  const product = findProduct(pid);
  const width = product.w || product.size || 50;
  const height = product.h || product.size || 50;
  return {
    uid:++uid,
    pid,
    x:Math.round(stage.clientWidth * centerX - width / 2),
    y:Math.round(stage.clientHeight * centerY - height / 2),
    rot:options.rot || 0,
    scale:options.scale || 1,
    name:options.name || ""
  };
}

function createSuggestion(name) {
  const items = [];
  const add = (pid, x, y, options) => items.push(makeLayoutItem(pid, x, y, options));
  if (name === "ceremony") {
    add("d12", .5, .47, {rot:90, scale:2.7});
    add("d1", .5, .12, {scale:.8});
    add("g1", .46, .22);
    add("g2", .54, .22);
    add("g7", .5, .31);
    [.4,.54,.68].forEach(y => {
      [.23,.34,.66,.77].forEach((x,index) => add(index % 2 ? "g3" : "g4", x, y));
    });
    add("d9", .2, .14);
    add("d9", .8, .14);
    return {venue:"v1", items, title:"Ceremonia íntima"};
  }
  if (name === "dinner") {
    add("t4", .5, .19);
    add("t2", .25, .48);
    add("t2", .75, .48);
    [.17,.31,.63,.77].forEach(x => add("t3", x, .69, {rot:90}));
    add("d12", .5, .39, {scale:.78});
    add("d10", .5, .83);
    add("d4", .19, .13);
    add("d4", .81, .13, {rot:25});
    add("p4", .5, .76);
    add("p5", .83, .78);
    ["g1","g2","g7","g3","g4","g3","g4","g3"].forEach((pid,index) =>
      add(pid, .2 + (index % 4) * .2, index < 4 ? .33 : .59)
    );
    return {venue:"v4", items, title:"Cena elegante"};
  }
  add("t5", .5, .51);
  [[.22,.25],[.5,.22],[.78,.25],[.22,.72],[.5,.77],[.78,.72]].forEach(([x,y]) => {
    add("t1", x, y);
    add("d11", x, y, {scale:.75});
  });
  add("t7", .5, .91, {scale:.78});
  add("t6", .13, .49, {rot:90, scale:.8});
  add("t6", .87, .49, {rot:90, scale:.8});
  add("d1", .5, .08);
  add("d4", .16, .12);
  add("d4", .84, .12, {rot:180});
  add("p4", .15, .87);
  add("t11", .5, .39);
  add("u1", .35, .39, {scale:.7});
  add("u1", .65, .39, {scale:.7});
  return {venue:"v1", items, title:"Recepción en jardín"};
}

const suggestionsDialog = document.getElementById("suggestionsDialog");
document.getElementById("btnSuggestions").addEventListener("click", () => suggestionsDialog.showModal());
document.getElementById("closeSuggestions").addEventListener("click", () => suggestionsDialog.close());
suggestionsDialog.querySelectorAll("[data-suggestion]").forEach(button => {
  button.addEventListener("click", () => {
    const suggestion = createSuggestion(button.dataset.suggestion);
    state.venue = suggestion.venue;
    state.items = suggestion.items;
    rebuild();
    markUnsaved();
    suggestionsDialog.close();
    showToast(`Idea aplicada: ${suggestion.title}. Ahora puedes mover y editar los objetos.`);
  });
});

document.getElementById("itemColor").addEventListener("input", event => {
  if (!selected) return;
  selected.item.color = event.target.value;
  selected.element.querySelector("svg")?.style.setProperty("--item-color", event.target.value);
  markUnsaved();
});

stageWrap.addEventListener("pointerdown", event => {
  if (event.isPrimary === false || event.button !== 0 || event.target.closest(".item")) return;
  event.preventDefault();
  panPointerId = event.pointerId;
  const startX = event.clientX;
  const startY = event.clientY;
  const startScrollLeft = stageWrap.scrollLeft;
  const startScrollTop = stageWrap.scrollTop;
  let didPan = false;
  stageWrap.classList.add("is-panning");
  stageWrap.setPointerCapture(event.pointerId);

  const move = moveEvent => {
    if (moveEvent.pointerId !== panPointerId) return;
    const deltaX = moveEvent.clientX - startX;
    const deltaY = moveEvent.clientY - startY;
    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) didPan = true;
    if (!didPan) return;
    stageWrap.scrollLeft = startScrollLeft - deltaX;
    stageWrap.scrollTop = startScrollTop - deltaY;
    positionTools();
  };
  const finish = finishEvent => {
    if (finishEvent.pointerId !== panPointerId) return;
    stageWrap.removeEventListener("pointermove", move);
    stageWrap.removeEventListener("pointerup", finish);
    stageWrap.removeEventListener("pointercancel", finish);
    stageWrap.classList.remove("is-panning");
    panPointerId = null;
    if (!didPan && finishEvent.type === "pointerup") clearSelection();
  };
  stageWrap.addEventListener("pointermove", move);
  stageWrap.addEventListener("pointerup", finish);
  stageWrap.addEventListener("pointercancel", finish);
});

tools.addEventListener("click", event => {
  const action = event.target.closest("button")?.dataset.a;
  if (!action || !selected) return;
  const {item, element} = selected;
  if (action === "rot+") item.rot += 15;
  if (action === "rot-") item.rot -= 15;
  if (action === "big") item.scale = Math.min(4, item.scale + .15);
  if (action === "small") item.scale = Math.max(.3, item.scale - .15);
  if (action === "front") stage.appendChild(element);
  if (action === "dup") {
    const copy = {...item, uid:++uid, x:Math.min(stage.clientWidth - 35, item.x + 25), y:Math.min(stage.clientHeight - 35, item.y + 25)};
    state.items.push(copy);
    addItem(null, copy);
    const copyElement = stage.querySelector(`[data-uid="${copy.uid}"]`);
    if (copyElement) select(copy, copyElement);
    return;
  }
  if (action === "del") {
    state.items = state.items.filter(candidate => candidate !== item);
    element.remove();
    clearSelection();
    updateCount();
    updateHint();
    markUnsaved();
    return;
  }
  place(element, item);
  markUnsaved();
});

document.addEventListener("keydown", event => {
  const active = document.activeElement;
  const isEditing = active && ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName);
  if ((event.key === "Delete" || event.key === "Backspace") && selected && !isEditing) {
    event.preventDefault();
    tools.querySelector('[data-a="del"]').click();
  }
});

function updateCount() {
  const count = state.items.filter(item => findProduct(item.pid)?.person).length;
  document.getElementById("count").innerHTML = `<span aria-hidden="true">♧</span> ${count} ${count === 1 ? "persona" : "personas"}`;
}

function updateHint() {
  document.getElementById("stageHint").hidden = state.items.length > 0;
}

function fitStage() {
  const styles = getComputedStyle(stageWrap);
  const horizontalPadding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  const verticalPadding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
  const availableWidth = stageWrap.clientWidth - horizontalPadding;
  const availableHeight = stageWrap.clientHeight - verticalPadding;
  const fitScale = Math.min(1, availableWidth / stage.offsetWidth);
  const scale = Math.max(.25, fitScale * zoomLevel);
  stage.dataset.scale = String(scale);
  stage.style.setProperty("--detail-scale", String(Math.min(1.6, 1 / scale)));
  stage.style.transform = `scale(${scale})`;
  stageSizer.style.width = `${stage.offsetWidth * scale}px`;
  stageSizer.style.height = `${stage.offsetHeight * scale}px`;
  stageWrap.style.justifyContent = stageSizer.offsetWidth > availableWidth ? "flex-start" : "";
  stageWrap.style.alignItems = stageSizer.offsetHeight > availableHeight ? "flex-start" : "";
  document.getElementById("zoomReset").textContent = `${Math.round(zoomLevel * 100)}%`;
  document.getElementById("zoomOut").disabled = zoomLevel <= .6;
  document.getElementById("zoomIn").disabled = zoomLevel >= 1.8;
  positionTools();
}

document.getElementById("zoomOut").addEventListener("click", () => {
  zoomLevel = Math.max(.6, Math.round((zoomLevel - .1) * 10) / 10);
  fitStage();
});
document.getElementById("zoomIn").addEventListener("click", () => {
  zoomLevel = Math.min(1.8, Math.round((zoomLevel + .1) * 10) / 10);
  fitStage();
});
document.getElementById("zoomReset").addEventListener("click", () => {
  zoomLevel = 1;
  fitStage();
});

function applyColors() {
  document.documentElement.style.setProperty("--c1", state.c1);
  document.documentElement.style.setProperty("--c2", state.c2);
}

function markUnsaved() {
  const status = document.getElementById("saveStatus");
  if (status) status.textContent = "Cambios sin guardar";
}

function rebuild() {
  stage.querySelectorAll(".item").forEach(element => element.remove());
  const venue = findProduct(state.venue);
  setVenue(venue || CATALOG.Lugares[0], true);
  state.items.forEach(item => addItem(null, item));
  document.getElementById("c1").value = state.c1;
  document.getElementById("c2").value = state.c2;
  applyColors();
  clearSelection();
  updateCount();
  updateHint();
}

document.getElementById("btnSave").addEventListener("click", () => {
  try {
    localStorage.setItem("boda", JSON.stringify(state));
    document.getElementById("saveStatus").textContent = "Todos los cambios guardados";
    showToast("Tu diseño quedó guardado en este navegador.");
  } catch (error) {
    console.error("No se pudo guardar el diseño.", error);
    showToast("No se pudo guardar. Revisa el almacenamiento del navegador.");
  }
});

document.getElementById("btnClear").addEventListener("click", () => {
  if (!window.confirm("¿Empezar de nuevo? Se quitarán los elementos del diseño actual.")) return;
  state = initialState();
  rebuild();
  markUnsaved();
  showToast("Diseño limpio. ¡Empecemos de nuevo!");
});

document.getElementById("btnJson").addEventListener("click", () => {
  const url = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], {type:"application/json"}));
  const link = document.createElement("a");
  link.href = url;
  link.download = "mi-diseno-de-boda.json";
  link.click();
  URL.revokeObjectURL(url);
});

document.getElementById("btnPng").addEventListener("click", async event => {
  if (typeof window.html2canvas !== "function") {
    showToast("No se pudo cargar la herramienta de imagen. Revisa tu conexión e inténtalo otra vez.");
    return;
  }
  const button = event.currentTarget;
  const wasSelected = selected;
  button.disabled = true;
  if (selected) selected.element.classList.remove("sel");
  try {
    const canvas = await window.html2canvas(stage, {useCORS:true, scale:1.5, backgroundColor:"#e9e5db"});
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "mi-diseno-de-boda.png";
    link.click();
    showToast("Imagen descargada. ¡Ya puedes compartirla!");
  } catch (error) {
    console.error("No se pudo exportar la imagen.", error);
    showToast("No se pudo crear la imagen. Revisa tu conexión e inténtalo otra vez.");
  } finally {
    button.disabled = false;
    if (wasSelected) wasSelected.element.classList.add("sel");
  }
});

["c1", "c2"].forEach(id => {
  document.getElementById(id).addEventListener("input", event => {
    state[id] = event.target.value;
    applyColors();
    if (selected && !selected.item.color) document.getElementById("itemColor").value = state.c1;
    markUnsaved();
  });
});

const helpDialog = document.getElementById("helpDialog");
document.getElementById("btnHelp").addEventListener("click", () => helpDialog.showModal());
document.getElementById("closeHelp").addEventListener("click", () => helpDialog.close());
document.getElementById("doneHelp").addEventListener("click", () => helpDialog.close());

renderTabs();
renderGrid();
fitStage();
new ResizeObserver(fitStage).observe(document.getElementById("stageWrap"));
try {
  const saved = localStorage.getItem("boda");
  if (saved) {
    const parsed = JSON.parse(saved);
    if (!parsed || !Array.isArray(parsed.items)) throw new Error("El formato del diseño guardado no es válido.");
    state = {
      ...initialState(),
      ...parsed,
      items:parsed.items.filter(item => item && findProduct(item.pid) && Number.isFinite(item.x) && Number.isFinite(item.y))
    };
    rebuild();
    document.getElementById("saveStatus").textContent = "Todos los cambios guardados";
  } else {
    rebuild();
  }
} catch (error) {
  console.error("No se pudo recuperar el diseño guardado.", error);
  state = initialState();
  rebuild();
  showToast("No se pudo abrir el diseño anterior. Iniciamos uno nuevo.");
}
