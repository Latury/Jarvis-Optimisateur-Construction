// ======= MENUS DEROULANTS & INIT =======
document.addEventListener("DOMContentLoaded", function () {
  // Ouvre automatique le chargeur de données au démarrage
  ouvrirModal("modal-chargeur");

  // Menus déroulants ouverts au clic
  document.querySelectorAll(".menu-dropdown").forEach((menu) => {
    const btn = menu.querySelector("button.btn-header");
    if (btn) {
      btn.onclick = (e) => {
        e.stopPropagation();
        document.querySelectorAll(".menu-dropdown").forEach((m) => {
          if (m !== menu) m.classList.remove("ouvert");
        });
        menu.classList.toggle("ouvert");
      };
    }
  });
  document.body.addEventListener("click", () => {
    document
      .querySelectorAll(".menu-dropdown")
      .forEach((m) => m.classList.remove("ouvert"));
  });

  // Autres initialisations
  if (typeof initialiserModals === "function") {
    initialiserModals();
  }
  if (typeof initialiserHeaderLiens === "function") {
    initialiserHeaderLiens();
  }
  if (typeof initialiserConsoleToolbar === "function") {
    initialiserConsoleToolbar();
  }
  if (typeof lancerLogPulse === "function") {
    lancerLogPulse();
  }
});

const MARKDOWN_PATHS = {
  changelog: "CHANGELOG.md",
  patchnotes: "PATCHNOTES.md",
  roadmap: "FEUILLE_DE_ROUTE.md",
};

let jarvisConsoleBuffer = [];
let consoleFilterText = "";
let logPage = 1;
let logPerPage = 35;

(function patchConsole() {
  const oldLog = console.log,
    oldErr = console.error,
    oldWarn = console.warn,
    oldDebug = console.debug;
  function pushLog(type, args) {
    const str = args
      .map((a) =>
        typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)
      )
      .join(" ");
    const line = { type, msg: str, ts: new Date() };
    jarvisConsoleBuffer.push(line);
    if (jarvisConsoleBuffer.length > 10000) jarvisConsoleBuffer.shift();
    rafUpdateConsole();
    logPulse();
  }
  console.log = (...args) => {
    pushLog("info", args);
    oldLog(...args);
  };
  console.warn = (...args) => {
    pushLog("warn", args);
    oldWarn(...args);
  };
  console.error = (...args) => {
    pushLog("error", args);
    oldErr(...args);
  };
  console.debug = (...args) => {
    pushLog("debug", args);
    oldDebug(...args);
  };
})();

function rafUpdateConsole() {
  if (!rafUpdateConsole._pending) {
    rafUpdateConsole._pending = true;
    requestAnimationFrame(() => {
      rafUpdateConsole._pending = false;
      const area = document.getElementById("contenu-console");
      if (area) {
        let logs = jarvisConsoleBuffer;
        if (consoleFilterText) {
          logs = logs.filter((l) =>
            l.msg.toLowerCase().includes(consoleFilterText.toLowerCase())
          );
        }
        // PAGINATION
        const totalPages = Math.max(1, Math.ceil(logs.length / logPerPage));
        if (logPage > totalPages) logPage = totalPages;
        const start = (logPage - 1) * logPerPage;
        const pageLogs = logs.slice(start, start + logPerPage);
        area.innerHTML =
          pageLogs.length === 0
            ? '<span class="log-vide">Aucun log à afficher</span>'
            : pageLogs
                .map(
                  ({ type, msg, ts }) =>
                    `<span class="log-${type}">[${ts.toLocaleDateString()} ${ts.toLocaleTimeString()}] ${msg}</span>`
                )
                .join("\n");
        area.scrollTop = area.scrollHeight;
        // Infos pagination
        const infosPag = document.getElementById("console-pagination-infos");
        if (infosPag) infosPag.textContent = `${logPage} / ${totalPages}`;
      }
    });
  }
}

// ANIMATION icone live log (pulse)
let logPulseTimeout;
function logPulse() {
  const icone = document.getElementById("console-live-ico");
  if (icone) {
    icone.classList.add("log-live-anim");
    clearTimeout(logPulseTimeout);
    logPulseTimeout = setTimeout(
      () => icone.classList.remove("log-live-anim"),
      350
    );
  }
}
function lancerLogPulse() {
  // Ajoute l’icône si absente
  if (!document.getElementById("console-live-ico")) {
    const h2 = document.querySelector("#modal-console h2");
    if (h2) {
      const ico = document.createElement("span");
      ico.id = "console-live-ico";
      ico.title = "Logs en temps réel";
      ico.style.marginLeft = "8px";
      ico.innerText = "●";
      h2.appendChild(ico);
    }
  }
}

// MODALS...
function initialiserModals() {
  const modalsId = [
    "modal-chargeur",
    "modal-apropos",
    "modal-changelog",
    "modal-patchnotes",
    "modal-roadmap",
    "modal-console",
  ];
  for (const id of modalsId) {
    const modal = document.getElementById(id);
    const fermeBtn = modal && modal.querySelector(".modal-fermer");
    if (fermeBtn) fermeBtn.onclick = () => fermerModal(id);
    window.addEventListener("click", (e) => {
      if (e.target === modal) fermerModal(id);
    });
  }
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") modalsId.forEach((id) => fermerModal(id));
  });
}
function ouvrirModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add("actif");
}
function fermerModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove("actif");
}

// HEADER, BOUTONS, POPUPS
function initialiserHeaderLiens() {
  const byId = (id) => document.getElementById(id);
  if (byId("btn-menu-chargeur"))
    byId("btn-menu-chargeur").onclick = () => ouvrirModal("modal-chargeur");
  if (byId("btn-console"))
    byId("btn-console").onclick = () => {
      ouvrirModal("modal-console");
      rafUpdateConsole();
    };
  if (byId("btn-apropos"))
    byId("btn-apropos").onclick = () => ouvrirModal("modal-apropos");
  setupDocBtn(
    "btn-aide-changelog",
    "modal-changelog",
    MARKDOWN_PATHS.changelog,
    "contenu-changelog"
  );
  setupDocBtn(
    "btn-aide-patchnotes",
    "modal-patchnotes",
    MARKDOWN_PATHS.patchnotes,
    "contenu-patchnotes"
  );
  setupDocBtn(
    "btn-aide-roadmap",
    "modal-roadmap",
    MARKDOWN_PATHS.roadmap,
    "contenu-roadmap"
  );
  if (byId("btn-aide-wiki"))
    byId("btn-aide-wiki").onclick = () =>
      window.open("https://idleon.wiki/wiki/Construction", "_blank");
  if (byId("btn-aide-github"))
    byId("btn-aide-github").onclick = () =>
      window.open(
        "https://github.com/Latury/Jarvis-Optimisateur-Construction",
        "_blank"
      );
  if (byId("btn-theme")) byId("btn-theme").onclick = basculerTheme;
}

function setupDocBtn(btnId, modalId, mdPath, contId) {
  const btn = document.getElementById(btnId);
  if (!btn) {
    console.warn(`[setupDocBtn] Bouton ${btnId} non trouvé !`);
    return;
  }
  btn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`[setupDocBtn] Ouverture de ${modalId} avec ${mdPath}`);
    ouvrirModal(modalId);

    const contenuElem = document.getElementById(contId);
    if (!contenuElem) {
      console.error(
        `[setupDocBtn] Élément ${contId} introuvable dans le DOM !`
      );
      return;
    }

    contenuElem.innerHTML =
      '<p style="text-align:center;color:#999;">⏳ Chargement...</p>';

    fetch(mdPath)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((md) => {
        console.log(`[setupDocBtn] Markdown reçu (${md.length} caractères)`);
        try {
          setMarkdownHtml(md, contId);
          console.log(`[setupDocBtn] ✅ Affichage réussi pour ${contId}`);
        } catch (err) {
          console.error(`[setupDocBtn] Erreur lors du rendu markdown:`, err);
          contenuElem.innerHTML = `<p style="color:#ff6b6b;">❌ Erreur de rendu du contenu.</p>`;
        }
      })
      .catch((err) => {
        console.error(`[setupDocBtn] Erreur chargement ${mdPath}:`, err);
        contenuElem.innerHTML = `<p style="color:#ff6b6b;">❌ Impossible de charger <strong>${mdPath}</strong>.</p><p>Vérifiez que le fichier existe et que vous utilisez un serveur local.</p>`;
      });
  };
  console.log(`[setupDocBtn] ✅ Bouton ${btnId} initialisé`);
}

function setMarkdownHtml(rawMd, elementId) {
  const elem = document.getElementById(elementId);
  if (!elem) {
    throw new Error(`Élément ${elementId} introuvable`);
  }

  if (typeof showdown !== "undefined" && showdown.Converter) {
    const conv = new showdown.Converter();
    elem.innerHTML = conv.makeHtml(rawMd);
  } else {
    console.warn("[setMarkdownHtml] Showdown non chargé, affichage texte brut");
    elem.innerHTML = `<pre style="white-space:pre-wrap;font-size:0.9em;">${rawMd}</pre>`;
  }
}

function initialiserConsoleToolbar() {
  const clearBtn = document.getElementById("btn-console-clear"),
    copyBtn = document.getElementById("btn-console-copy"),
    exportBtn = document.getElementById("btn-console-export"),
    filterInput = document.getElementById("console-filter"),
    prevBtn = document.getElementById("console-page-prev"),
    nextBtn = document.getElementById("console-page-next"),
    infosPag = document.getElementById("console-pagination-infos");
  if (clearBtn)
    clearBtn.onclick = () => {
      jarvisConsoleBuffer = [];
      rafUpdateConsole();
    };
  if (copyBtn)
    copyBtn.onclick = () => {
      let txt = jarvisConsoleBuffer
        .map(
          (l) =>
            `[${l.ts.toLocaleDateString()} ${l.ts.toLocaleTimeString()}] ${
              l.msg
            }`
        )
        .join("\n");
      navigator.clipboard.writeText(txt);
    };
  if (exportBtn)
    exportBtn.onclick = () => {
      let txt = jarvisConsoleBuffer
        .map(
          (l) =>
            `[${l.ts.toLocaleDateString()} ${l.ts.toLocaleTimeString()}] ${
              l.msg
            }`
        )
        .join("\n");
      const blob = new Blob([txt], { type: "text/plain" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "logs_jarvis.txt";
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
  if (filterInput)
    filterInput.addEventListener("input", (e) => {
      consoleFilterText = e.target.value;
      logPage = 1;
      rafUpdateConsole();
    });
  if (prevBtn)
    prevBtn.onclick = () => {
      if (logPage > 1) {
        logPage--;
        rafUpdateConsole();
      }
    };
  if (nextBtn)
    nextBtn.onclick = () => {
      const nTot = consoleFilterText
        ? jarvisConsoleBuffer.filter((l) =>
            l.msg.toLowerCase().includes(consoleFilterText.toLowerCase())
          ).length
        : jarvisConsoleBuffer.length;
      const maxP = Math.max(1, Math.ceil(nTot / logPerPage));
      if (logPage < maxP) {
        logPage++;
        rafUpdateConsole();
      }
    };
}

// Thème
function basculerTheme() {
  const body = document.body;
  const theme = body.getAttribute("data-theme") || "sombre";
  body.setAttribute("data-theme", theme === "sombre" ? "clair" : "sombre");
  console.log(
    `[Jarvis] Thème basculé : ${theme === "sombre" ? "clair" : "sombre"}`
  );
}
