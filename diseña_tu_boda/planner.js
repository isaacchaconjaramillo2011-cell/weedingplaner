const PROJECTS_KEY = "boda_projects";
const PIN_KEY = "boda_admin_pin";
const ADMIN_FLAG = "boda_admin_on";
const GROUPS = ["Familia de la novia", "Familia del novio", "Amigos", "Trabajo", "Otros"];
const RSVP = ["Pendiente", "Confirmado", "No asiste"];
const MENU_TYPES = ["Entrada", "Plato fuerte", "Postre", "Bebida", "Otro"];

const VENUE_IDEAS = [
  {venue:"v1", icon:"🌿", name:"Jardín o finca campestre", capacity:"50 – 300 invitados", budget:"Medio", tip:"Ideal para ceremonia y recepción en un mismo lugar. Ten un plan B con carpa por si llueve.", search:"fincas para bodas"},
  {venue:"v2", icon:"🏖️", name:"Playa o club de playa", capacity:"20 – 150 invitados", budget:"Medio – alto", tip:"Revisa horarios de marea y permisos municipales. El atardecer es la mejor hora para la ceremonia.", search:"bodas en la playa"},
  {venue:"v3", icon:"🏡", name:"Hacienda histórica", capacity:"80 – 400 invitados", budget:"Alto", tip:"Suelen incluir alojamiento y capilla. Pregunta si permiten catering externo.", search:"haciendas para bodas"},
  {venue:"v4", icon:"🏛️", name:"Salón de eventos", capacity:"50 – 500 invitados", budget:"Medio", tip:"Opción más predecible: climatizado, con parqueadero y servicios incluidos.", search:"salones de eventos para bodas"},
  {venue:"v5", icon:"🌇", name:"Terraza o rooftop", capacity:"30 – 120 invitados", budget:"Medio – alto", tip:"Perfecta para cócteles con vista. Confirma límites de ruido y horario.", search:"terrazas para bodas"},
  {venue:"v6", icon:"⛪", name:"Iglesia o capilla", capacity:"50 – 300 invitados", budget:"Bajo – medio", tip:"Reserva la fecha con meses de anticipación y verifica requisitos de la parroquia.", search:"iglesias para bodas"}
];

const $ = id => document.getElementById(id);
const pickVenueById = id => CATALOG.Lugares.find(v => v.id === id);

function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (key === "class") node.className = value;
    else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
    else node[key] = value;
  });
  children.flat().forEach(child => node.append(child));
  return node;
}

function option(list, current) {
  return list.map(value => el("option", {value, textContent:value, selected:value === current}));
}

function touch() {
  markUnsaved();
}

function isAdmin() {
  return sessionStorage.getItem(ADMIN_FLAG) === "1";
}

async function hashPin(pin) {
  if (window.crypto && crypto.subtle) {
    const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("boda:" + pin));
    return Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2, "0")).join("");
  }
  return "b64:" + btoa(unescape(encodeURIComponent(pin)));
}

function dialogShell(dialog, eyebrow, title) {
  dialog.replaceChildren(
    el("button", {class:"dialog-close", type:"button", ariaLabel:"Cerrar", textContent:"×", onclick:() => dialog.close()}),
    el("span", {class:"eyebrow", textContent:eyebrow}),
    el("h2", {textContent:title})
  );
}

function loadProjects() {
  try {
    const data = JSON.parse(localStorage.getItem(PROJECTS_KEY) || "{}");
    return data && typeof data === "object" ? data : {};
  } catch {
    return {};
  }
}

function storeProjects(projects) {
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    return true;
  } catch (error) {
    console.error("No se pudieron guardar los proyectos.", error);
    showToast("No se pudo guardar. Revisa el almacenamiento del navegador.");
    return false;
  }
}

function refreshName() {
  $("projectName").textContent = state.name || "Nuestra celebración";
}

const baseRebuild = rebuild;
rebuild = function () {
  if (!Array.isArray(state.guests)) state.guests = [];
  if (!Array.isArray(state.menu)) state.menu = [];
  baseRebuild();
  refreshName();
};
rebuild();

function updateAdminButton() {
  $("btnAdmin").textContent = isAdmin() ? "🔓 Modo administrador" : "🔒 Administrador";
  document.body.classList.toggle("is-admin", isAdmin());
}

/* ---------- Invitados ---------- */
function guestSummary() {
  const total = state.guests.length;
  const count = status => state.guests.filter(g => g.status === status).length;
  return `${total} invitados · ${count("Confirmado")} confirmados · ${count("Pendiente")} pendientes · ${count("No asiste")} no asisten`;
}

function renderGuestList(container, editable, onChange) {
  container.replaceChildren();
  container.append(el("p", {class:"list-summary", textContent:guestSummary()}));
  if (!state.guests.length) container.append(el("p", {class:"empty-note", textContent:"Aún no hay invitados en la lista."}));
  const rows = state.guests.map((guest, index) => {
    if (!editable) {
      return el("div", {class:"row"},
        el("span", {class:"cell grow", textContent:guest.name}),
        el("span", {class:"cell", textContent:guest.group}),
        el("span", {class:"cell", textContent:guest.table ? `Mesa ${guest.table}` : "Sin mesa"}),
        el("span", {class:"badge " + guest.status.replace(/\s/g, "-").toLowerCase(), textContent:guest.status}));
    }
    const name = el("input", {class:"cell grow", value:guest.name, ariaLabel:"Nombre del invitado", maxLength:80,
      oninput:e => { guest.name = e.target.value; touch(); }});
    const group = el("select", {ariaLabel:"Grupo", onchange:e => { guest.group = e.target.value; touch(); }}, option(GROUPS, guest.group));
    const table = el("input", {type:"number", min:"0", max:"999", value:guest.table || "", placeholder:"Mesa", ariaLabel:"Número de mesa",
      oninput:e => { guest.table = Math.max(0, parseInt(e.target.value, 10) || 0); touch(); }});
    const status = el("select", {ariaLabel:"Confirmación", onchange:e => { guest.status = e.target.value; touch(); onChange(); }}, option(RSVP, guest.status));
    const del = el("button", {type:"button", class:"row-del", ariaLabel:"Eliminar invitado", textContent:"⌫",
      onclick:() => { state.guests.splice(index, 1); touch(); onChange(); }});
    return el("div", {class:"row"}, name, group, table, status, del);
  });
  container.append(...rows);
  if (editable) {
    const input = el("input", {class:"grow", placeholder:"Nombre del nuevo invitado", ariaLabel:"Nuevo invitado", maxLength:80});
    const group = el("select", {ariaLabel:"Grupo"}, option(GROUPS, GROUPS[0]));
    const add = () => {
      const name = input.value.trim();
      if (!name) { input.focus(); return; }
      state.guests.push({name, group:group.value, status:"Pendiente", table:0});
      touch();
      onChange();
    };
    input.addEventListener("keydown", e => { if (e.key === "Enter") add(); });
    container.append(el("div", {class:"row add-row"}, input, group, el("button", {type:"button", class:"button button-primary", textContent:"+ Agregar", onclick:add})));
  }
}

function renderMenuList(container, editable, onChange) {
  container.replaceChildren();
  if (!state.menu.length) container.append(el("p", {class:"empty-note", textContent:"Aún no hay platos en el menú."}));
  MENU_TYPES.forEach(type => {
    const dishes = state.menu.map((dish, index) => ({dish, index})).filter(({dish}) => dish.type === type);
    if (!dishes.length) return;
    container.append(el("h4", {class:"list-heading", textContent:type}));
    dishes.forEach(({dish, index}) => {
      if (!editable) {
        container.append(el("div", {class:"row"}, el("span", {class:"cell grow", textContent:dish.name})));
        return;
      }
      container.append(el("div", {class:"row"},
        el("input", {class:"grow", value:dish.name, ariaLabel:"Nombre del plato", maxLength:80, oninput:e => { dish.name = e.target.value; touch(); }}),
        el("select", {ariaLabel:"Tipo", onchange:e => { dish.type = e.target.value; touch(); onChange(); }}, option(MENU_TYPES, dish.type)),
        el("button", {type:"button", class:"row-del", ariaLabel:"Eliminar plato", textContent:"⌫", onclick:() => { state.menu.splice(index, 1); touch(); onChange(); }})));
    });
  });
  if (editable) {
    const input = el("input", {class:"grow", placeholder:"Nuevo plato o bebida", ariaLabel:"Nuevo plato", maxLength:80});
    const type = el("select", {ariaLabel:"Tipo"}, option(MENU_TYPES, MENU_TYPES[1]));
    const add = () => {
      const name = input.value.trim();
      if (!name) { input.focus(); return; }
      state.menu.push({name, type:type.value});
      touch();
      onChange();
    };
    input.addEventListener("keydown", e => { if (e.key === "Enter") add(); });
    container.append(el("div", {class:"row add-row"}, input, type, el("button", {type:"button", class:"button button-primary", textContent:"+ Agregar", onclick:add})));
  }
}

function openGuests() {
  const dialog = $("guestsDialog");
  const draw = () => {
    dialogShell(dialog, "TU LISTA", "Invitados y menú");
    const guests = el("div", {class:"list"});
    const menu = el("div", {class:"list"});
    renderGuestList(guests, false, draw);
    renderMenuList(menu, false, draw);
    dialog.append(el("h3", {class:"section-title", textContent:"Invitados"}), guests, el("h3", {class:"section-title", textContent:"Menú"}), menu);
    if (!isAdmin()) {
      dialog.append(el("p", {class:"suggestion-note", textContent:"Solo el administrador puede modificar la lista de invitados y el menú."}),
        el("button", {class:"button button-outline", type:"button", textContent:"🔒 Entrar como administrador", onclick:() => { dialog.close(); openAdmin(); }}));
    } else {
      dialog.append(el("button", {class:"button button-primary", type:"button", textContent:"✎ Editar en modo administrador", onclick:() => { dialog.close(); openAdmin(); }}));
    }
  };
  draw();
  dialog.showModal();
}

/* ---------- Lugares ---------- */
function openVenues() {
  const dialog = $("venuesDialog");
  dialogShell(dialog, "INSPIRACIÓN", "Lugares para tu boda");
  dialog.append(el("p", {class:"suggestions-intro", textContent:"Ideas de tipos de lugar según el estilo de tu celebración. Puedes probar cada uno en el plano o buscar opciones cerca de ti."}));
  const list = el("div", {class:"venue-list"});
  VENUE_IDEAS.forEach(idea => {
    list.append(el("article", {class:"venue-card"},
      el("div", {class:"venue-icon", textContent:idea.icon}),
      el("div", {class:"venue-body"},
        el("h3", {textContent:idea.name}),
        el("p", {class:"venue-meta", textContent:`Capacidad: ${idea.capacity} · Presupuesto: ${idea.budget}`}),
        el("p", {textContent:idea.tip}),
        el("div", {class:"venue-actions"},
          el("button", {type:"button", class:"button button-outline", textContent:"Probar en el plano", onclick:() => {
            setVenue(pickVenueById(idea.venue));
            markUnsaved();
            dialog.close();
          }}),
          el("a", {class:"button button-quiet", target:"_blank", rel:"noopener noreferrer", textContent:"Buscar en el mapa ↗",
            href:"https://www.google.com/maps/search/" + encodeURIComponent(idea.search)})))));
  });
  dialog.append(list);
  dialog.showModal();
}

/* ---------- Administrador ---------- */
function openAdmin() {
  const dialog = $("adminDialog");
  const savedPin = localStorage.getItem(PIN_KEY);
  if (!isAdmin()) return openAdminLogin(dialog, savedPin);
  const draw = () => {
    dialogShell(dialog, "MODO ADMINISTRADOR", "Panel de administración");

    const projects = loadProjects();
    const nameInput = el("input", {class:"grow", value:state.name || "", placeholder:"Nombre del proyecto", ariaLabel:"Nombre del proyecto", maxLength:60});
    const saveProject = () => {
      const name = nameInput.value.trim();
      if (!name) { showToast("Escribe un nombre para el proyecto."); nameInput.focus(); return; }
      const all = loadProjects();
      if (all[name] && name !== state.name && !confirm(`Ya existe "${name}". ¿Reemplazarlo?`)) return;
      state.name = name;
      all[name] = {...JSON.parse(JSON.stringify(state)), savedAt:new Date().toISOString()};
      if (storeProjects(all)) {
        localStorage.setItem("boda", JSON.stringify(state));
        refreshName();
        $("saveStatus").textContent = "Todos los cambios guardados";
        showToast(`Proyecto "${name}" guardado.`);
        draw();
      }
    };
    const projectRows = Object.entries(projects).map(([name, data]) => el("div", {class:"row"},
      el("span", {class:"cell grow", textContent:name + (name === state.name ? " (actual)" : "")}),
      el("span", {class:"cell muted", textContent:data.savedAt ? new Date(data.savedAt).toLocaleDateString("es") : ""}),
      el("button", {type:"button", class:"button button-outline", textContent:"Abrir", onclick:() => {
        if (!confirm(`¿Abrir "${name}"? Se reemplaza el diseño actual no guardado.`)) return;
        state = {...initialState(), ...JSON.parse(JSON.stringify(data)), name};
        rebuild();
        $("saveStatus").textContent = "Proyecto abierto";
        draw();
      }}),
      el("button", {type:"button", class:"row-del", ariaLabel:"Eliminar proyecto", textContent:"⌫", onclick:() => {
        if (!confirm(`¿Eliminar el proyecto "${name}"?`)) return;
        const all = loadProjects();
        delete all[name];
        storeProjects(all);
        draw();
      }})));
    const newProject = el("button", {type:"button", class:"button button-outline", textContent:"＋ Proyecto nuevo", onclick:() => {
      if (!confirm("¿Crear un proyecto nuevo? Guarda antes el actual si no quieres perderlo.")) return;
      state = initialState();
      state.name = "Proyecto sin nombre";
      rebuild();
      draw();
    }});

    const guests = el("div", {class:"list"});
    const menu = el("div", {class:"list"});
    renderGuestList(guests, true, draw);
    renderMenuList(menu, true, draw);

    dialog.append(
      el("h3", {class:"section-title", textContent:"Proyectos guardados"}),
      el("div", {class:"row add-row"}, nameInput, el("button", {type:"button", class:"button button-primary", textContent:"✓ Guardar proyecto", onclick:saveProject}), newProject),
      el("div", {class:"list"}, projectRows.length ? projectRows : el("p", {class:"empty-note", textContent:"Todavía no has guardado proyectos con nombre."})),
      el("h3", {class:"section-title", textContent:"Lista de invitados"}), guests,
      el("h3", {class:"section-title", textContent:"Menú y comida"}), menu,
      el("div", {class:"row add-row"},
        el("button", {type:"button", class:"button button-outline", textContent:"Cambiar PIN", onclick:() => {
          localStorage.removeItem(PIN_KEY);
          sessionStorage.removeItem(ADMIN_FLAG);
          updateAdminButton();
          openAdmin();
        }}),
        el("button", {type:"button", class:"button button-quiet", textContent:"Salir del modo administrador", onclick:() => {
          sessionStorage.removeItem(ADMIN_FLAG);
          updateAdminButton();
          dialog.close();
          showToast("Saliste del modo administrador.");
        }})));
  };
  draw();
  if (!dialog.open) dialog.showModal();
}

function openAdminLogin(dialog, savedPin) {
  dialogShell(dialog, "ACCESO", savedPin ? "Modo administrador" : "Crea tu PIN de administrador");
  const pin = el("input", {type:"password", inputMode:"numeric", autocomplete:"off", maxLength:12, placeholder:savedPin ? "PIN" : "Mínimo 4 dígitos", ariaLabel:"PIN"});
  const message = el("p", {class:"suggestion-note", textContent:savedPin ? "Ingresa tu PIN para editar invitados, menú y proyectos." : "Este PIN protege la edición en este navegador."});
  const submit = async () => {
    const value = pin.value.trim();
    if (!savedPin) {
      if (!/^\d{4,12}$/.test(value)) { message.textContent = "El PIN debe tener entre 4 y 12 dígitos."; return; }
      localStorage.setItem(PIN_KEY, await hashPin(value));
    } else if (await hashPin(value) !== savedPin) {
      message.textContent = "PIN incorrecto.";
      pin.select();
      return;
    }
    sessionStorage.setItem(ADMIN_FLAG, "1");
    updateAdminButton();
    openAdmin();
  };
  pin.addEventListener("keydown", e => { if (e.key === "Enter") submit(); });
  dialog.append(el("div", {class:"row add-row"}, pin, el("button", {type:"button", class:"button button-primary", textContent:savedPin ? "Entrar" : "Crear PIN", onclick:submit})), message);
  if (!dialog.open) dialog.showModal();
  pin.focus();
}

$("btnGuests").addEventListener("click", openGuests);
$("btnVenues").addEventListener("click", openVenues);
$("btnAdmin").addEventListener("click", openAdmin);
updateAdminButton();
