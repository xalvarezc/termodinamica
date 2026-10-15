(function () {
  var EDITABLE_SELECTOR = ".card, .trib-tag, .idx-card";
  var pageKey = location.pathname;
  var editsKey = "fluxEdits::" + pageKey;
  var originalsKey = "fluxOriginals::" + pageKey;

  var editModeActive = false;
  var currentBoxId = null;

  function safeParse(json) {
    try {
      return JSON.parse(json) || {};
    } catch (e) {
      return {};
    }
  }

  function loadEdits() {
    return safeParse(localStorage.getItem(editsKey));
  }
  function saveEdits(obj) {
    try {
      localStorage.setItem(editsKey, JSON.stringify(obj));
    } catch (e) {
      /* storage unavailable — edits still work for this session, just won't persist */
    }
  }
  function loadOriginals() {
    return safeParse(localStorage.getItem(originalsKey));
  }
  function saveOriginals(obj) {
    try {
      localStorage.setItem(originalsKey, JSON.stringify(obj));
    } catch (e) {}
  }

  function assignBoxIds() {
    var boxes = document.querySelectorAll(EDITABLE_SELECTOR);
    for (var i = 0; i < boxes.length; i++) {
      if (!boxes[i].hasAttribute("data-box-id")) {
        boxes[i].setAttribute("data-box-id", "box-" + i);
      }
    }
    return boxes;
  }

  function applyStoredEdits(boxes) {
    var edits = loadEdits();
    for (var i = 0; i < boxes.length; i++) {
      var id = boxes[i].getAttribute("data-box-id");
      if (Object.prototype.hasOwnProperty.call(edits, id)) {
        boxes[i].innerHTML = edits[id];
      }
    }
  }

  function ensureToggleButton() {
    var btn = document.getElementById("edit-toggle-btn");
    if (btn) return btn;
    btn = document.createElement("button");
    btn.id = "edit-toggle-btn";
    btn.className = "edit-toggle";
    btn.type = "button";
    btn.textContent = "✎ Edita";
    document.body.appendChild(btn);
    return btn;
  }

  function ensurePanel() {
    var panel = document.getElementById("editor-panel");
    if (panel) return panel;
    panel = document.createElement("div");
    panel.id = "editor-panel";
    panel.innerHTML =
      '<button type="button" class="ed-close" id="ed-close-btn" aria-label="Tanca">&times;</button>' +
      "<h3>Edita aquest quadre</h3>" +
      '<p class="ed-hint">Pots editar l’HTML del quadre directament. Els canvis es desen només en aquest navegador.</p>' +
      '<textarea id="ed-textarea" spellcheck="false"></textarea>' +
      '<div class="ed-row">' +
      '<button type="button" class="primary" id="ed-save-btn">Desa els canvis</button>' +
      '<button type="button" id="ed-cancel-btn">Cancel·la</button>' +
      '<button type="button" class="danger" id="ed-restore-btn">Restaura l’original</button>' +
      "</div>" +
      '<div class="ed-footer">' +
      '<div class="ed-row">' +
      '<button type="button" id="ed-download-btn">⬇ Baixa aquesta pàgina (.html)</button>' +
      "</div>" +
      '<div class="ed-row">' +
      '<button type="button" class="danger" id="ed-clear-all-btn">Esborra tots els canvis d’aquesta pàgina</button>' +
      "</div>" +
      "</div>";
    document.body.appendChild(panel);
    return panel;
  }

  function openPanelFor(box) {
    var panel = document.getElementById("editor-panel");
    var textarea = document.getElementById("ed-textarea");
    currentBoxId = box.getAttribute("data-box-id");
    textarea.value = box.innerHTML.trim();
    panel.classList.add("open");
    textarea.focus();
  }

  function closePanel() {
    var panel = document.getElementById("editor-panel");
    panel.classList.remove("open");
    currentBoxId = null;
  }

  function currentBox() {
    if (!currentBoxId) return null;
    return document.querySelector('[data-box-id="' + currentBoxId + '"]');
  }

  function saveCurrent() {
    var box = currentBox();
    if (!box) return;
    var textarea = document.getElementById("ed-textarea");

    var originals = loadOriginals();
    if (!Object.prototype.hasOwnProperty.call(originals, currentBoxId)) {
      originals[currentBoxId] = box.innerHTML;
      saveOriginals(originals);
    }

    box.innerHTML = textarea.value;

    var edits = loadEdits();
    edits[currentBoxId] = textarea.value;
    saveEdits(edits);

    closePanel();
  }

  function restoreCurrent() {
    var box = currentBox();
    if (!box) return;
    var originals = loadOriginals();
    if (Object.prototype.hasOwnProperty.call(originals, currentBoxId)) {
      box.innerHTML = originals[currentBoxId];
      document.getElementById("ed-textarea").value = box.innerHTML.trim();
    }
    var edits = loadEdits();
    delete edits[currentBoxId];
    saveEdits(edits);
  }

  function clearAllForPage() {
    if (!window.confirm("Esborrar tots els canvis desats d’aquesta pàgina en aquest navegador?")) return;
    localStorage.removeItem(editsKey);
    location.reload();
  }

  function downloadPage() {
    var clone = document.documentElement.cloneNode(true);
    var toRemove = clone.querySelectorAll("#editor-panel, #edit-toggle-btn");
    for (var i = 0; i < toRemove.length; i++) toRemove[i].parentNode.removeChild(toRemove[i]);
    clone.classList.remove("edit-mode");

    var html = "<!doctype html>\n" + clone.outerHTML;
    var blob = new Blob([html], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var name = pageKey.split("/").pop() || "pagina.html";
    var a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 2000);
  }

  function toggleEditMode() {
    editModeActive = !editModeActive;
    document.body.classList.toggle("edit-mode", editModeActive);
    document.getElementById("edit-toggle-btn").classList.toggle("active", editModeActive);
    if (!editModeActive) closePanel();
  }

  function init() {
    var boxes = assignBoxIds();
    applyStoredEdits(boxes);

    ensureToggleButton();
    ensurePanel();

    document.getElementById("edit-toggle-btn").addEventListener("click", toggleEditMode);
    document.getElementById("ed-close-btn").addEventListener("click", closePanel);
    document.getElementById("ed-cancel-btn").addEventListener("click", closePanel);
    document.getElementById("ed-save-btn").addEventListener("click", saveCurrent);
    document.getElementById("ed-restore-btn").addEventListener("click", restoreCurrent);
    document.getElementById("ed-download-btn").addEventListener("click", downloadPage);
    document.getElementById("ed-clear-all-btn").addEventListener("click", clearAllForPage);

    document.addEventListener("click", function (e) {
      if (!editModeActive) return;
      var box = e.target.closest(EDITABLE_SELECTOR);
      if (!box) return;
      if (box.closest("#editor-panel")) return;
      e.preventDefault();
      e.stopPropagation();
      openPanelFor(box);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closePanel();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
