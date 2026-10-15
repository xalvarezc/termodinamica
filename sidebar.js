(function () {
  var SECTIONS = [
    {
      tema: "Tema 1 · Repàs",
      groups: [
        {
          title: "1.2 · Coeficients termodinàmics",
          items: [
            { href: "flux_reciprocitat.html", tag: "1.2.1", title: "Teorema de reciprocitat" },
            { href: "flux_compatibilitat_alfa_kappa.html", tag: "1.2.1", title: "Compatibilitat α–κ_T" }
          ]
        },
        {
          title: "1.4 · Primer principi",
          items: [
            { href: "flux_joule.html", tag: "1.4", title: "Experiment de Joule" },
            { href: "flux_capacitats_generals.html", tag: "1.4.1", title: "Capacitats calorífiques" },
            { href: "flux_mayer_gas_ideal.html", tag: "1.4.2", title: "Relació de Mayer" }
          ]
        },
        {
          title: "1.5.1 · Màquines tèrmiques",
          items: [
            { href: "flux_equivalencia_kelvin_clausius.html", tag: "1.5.1", title: "Kelvin ⇔ Clausius" }
          ]
        },
        {
          title: "1.5.2 · Teorema de Carnot",
          items: [
            { href: "flux_carnot_teorema.html", tag: "1.5.2a", title: "El teorema de Carnot" },
            { href: "flux_carnot_funcio_f.html", tag: "1.5.2b-c", title: "La funció f(T₁,T₂)" },
            { href: "flux_carnot_gas_ideal.html", tag: "1.5.2d", title: "Escala del gas ideal" },
            { href: "sim_carnot.html", tag: "sim", title: "Cicle de Carnot al PV" }
          ]
        },
        {
          title: "1.5.3 · Teorema de Clausius",
          items: [
            { href: "flux_clausius_teorema.html", tag: "1.5.3a", title: "El teorema de Clausius" },
            { href: "flux_entropia_definicio.html", tag: "1.5.3b-d", title: "Naixement de l'entropia" },
            { href: "flux_direccio_calor.html", tag: "1.5.3e", title: "Direcció del flux de calor" },
            { href: "flux_limits_treball.html", tag: "1.5.3f", title: "Límits reals de treball" },
            { href: "flux_gibbs.html", tag: "1.5.3g", title: "Equació de Gibbs" }
          ]
        },
        {
          title: "1.5.4 · Equacions TdS",
          items: [
            { href: "flux_tds_fluid.html", tag: "1.5.4", title: "Equacions TdS" }
          ]
        }
      ]
    },
    {
      tema: "Tema 2 · Estructura formal",
      groups: [
        {
          title: "2.1 · Equació fonamental",
          items: [
            { href: "flux_equacio_fonamental.html", tag: "2.1", title: "Equació fonamental" }
          ]
        },
        {
          title: "2.2 · Forma d'Euler",
          items: [
            { href: "flux_forma_euler.html", tag: "2.2", title: "Euler i Gibbs–Duhem" }
          ]
        },
        {
          title: "2.3 · Potencials",
          items: [
            { href: "flux_potencials_legendre.html", tag: "2.3a-e", title: "Transformades de Legendre" },
            { href: "flux_legendre_geometria.html", tag: "2.3 geom.", title: "Legendre: la geometria" },
            { href: "sim_legendre.html", tag: "sim", title: "Legendre en moviment" }
          ]
        },
        {
          title: "2.4 · Relacions de Maxwell",
          items: [
            { href: "flux_maxwell.html", tag: "2.4", title: "Relacions de Maxwell" }
          ]
        },
        {
          title: "2.5 · Criteris d'estabilitat",
          items: [
            { href: "flux_estabilitat_desigualtat.html", tag: "2.5a-b", title: "Desigualtat Clausius–Gibbs" },
            { href: "flux_estabilitat_desigualtat_bis.html", tag: "2.5a-b bis", title: "Clausius–Gibbs (via Euler)" },
            { href: "flux_minims_potencials.html", tag: "2.5 · F,H,G", title: "Mínims de F, H i G" },
            { href: "flux_estabilitat_cv_kappa.html", tag: "2.5c-d", title: "Criteris d'estabilitat" }
          ]
        }
      ]
    },
    {
      tema: "Tema 3 · Microcanònica",
      groups: [
        {
          title: "3.1&ndash;3.3 · Conceptes",
          items: [
            { href: "flux_conceptes_microcanonica.html", tag: "3.1-3.3", title: "Conceptes i postulats" },
            { href: "flux_microcanonica_omega.html", tag: "3.3", title: "Comptar microstats: &Omega;, &Gamma;" }
          ]
        },
        {
          title: "3.4 · Connexió amb la termodinàmica",
          items: [
            { href: "flux_formula_boltzmann.html", tag: "3.4", title: "Fórmula de Boltzmann" }
          ]
        },
        {
          title: "3.5&ndash;3.7 · Aplicacions clàssiques",
          items: [
            { href: "flux_stirling.html", tag: "3.5 · eina", title: "Aproximació de Stirling" },
            { href: "flux_gas_ideal_microcanonica.html", tag: "3.5", title: "Gas ideal monoatòmic" },
            { href: "flux_entropia_mescla.html", tag: "3.6", title: "Entropia de mescla" },
            { href: "flux_indistingibilitat_recintes.html", tag: "3.6", title: "Indistingibles entre recintes" },
            { href: "flux_solid_classic.html", tag: "3.7", title: "Sòlid clàssic" }
          ]
        },
        {
          title: "3.8 · Sistemes discrets",
          items: [
            { href: "flux_solid_einstein.html", tag: "3.8.1", title: "Sòlid quàntic d'Einstein" },
            { href: "flux_comptatge_discret.html", tag: "3.8.2a", title: "Comptatge sense degeneració" },
            { href: "flux_comptatge_degenerat.html", tag: "3.8.2b", title: "Comptatge amb degeneració" }
          ]
        },
        {
          title: "3.9 · Entropia estadística",
          items: [
            { href: "flux_lagrange.html", tag: "3.9 · eina", title: "Multiplicadors de Lagrange" },
            { href: "flux_entropia_shannon.html", tag: "3.9", title: "Entropia estadística" }
          ]
        },
        {
          title: "3 · Simulacions",
          items: [
            { href: "sim_microstats_macrostats.html", tag: "sim 3.1", title: "Microstats i macrostats" },
            { href: "sim_mescla.html", tag: "sim 3.6", title: "Treure la paret: mescla" },
            { href: "sim_hiperesfera.html", tag: "sim 3.3", title: "&Omega; i &Gamma;: la hiperesfera" },
            { href: "sim_solids_einstein.html", tag: "sim 3.4", title: "Dos sòlids d'Einstein" }
          ]
        }
      ]
    },
    {
      tema: "Tema 4 · Maxwell-Boltzmann",
      groups: [
        {
          title: "4.1 · Deducció",
          items: [
            { href: "flux_mb_deduccio.html", tag: "4.1a", title: "Deducció de &rho;(<b>p</b>)" },
            { href: "flux_mb_velocitats.html", tag: "4.1b", title: "Distribucions de velocitat" },
            { href: "flux_mb_valors_mitjans.html", tag: "4.1c", title: "Velocitats característiques" }
          ]
        },
        {
          title: "4.2&ndash;4.3 · Aplicacions",
          items: [
            { href: "flux_mb_pressio.html", tag: "4.2", title: "Pressió cinètica" },
            { href: "flux_mb_efusio.html", tag: "4.3", title: "Efusió" }
          ]
        }
      ]
    },
    {
      tema: "Tema 5 · Canònica",
      groups: [
        {
          title: "5.1 · La col&middot;lectivitat canònica",
          items: [
            { href: "flux_canonica_deduccio.html", tag: "5.1a", title: "Distribució canònica" },
            { href: "flux_canonica_fluctuacions.html", tag: "5.1b", title: "Energia i fluctuacions" },
            { href: "flux_canonica_helmholtz.html", tag: "5.1c", title: "F=&minus;k<sub>B</sub>T ln Z" }
          ]
        },
        {
          title: "5.2&ndash;5.5 · Sistemes ideals",
          items: [
            { href: "flux_canonica_ideals.html", tag: "5.2-5.3", title: "Ideals i degeneració" },
            { href: "flux_canonica_gas_ideal.html", tag: "5.4", title: "Gas ideal monoatòmic" },
            { href: "flux_equiparticio.html", tag: "5.5", title: "Teorema d'equipartició" }
          ]
        },
        {
          title: "5.6 · Sistemes discrets",
          items: [
            { href: "flux_canonica_discrets.html", tag: "5.6", title: "Canònica discreta" },
            { href: "flux_canonica_oscillador_quantic.html", tag: "5.6.1", title: "Oscil&middot;lador quàntic" },
            { href: "flux_canonica_limit_continu.html", tag: "5.6.1", title: "Del discret al continu" }
          ]
        }
      ]
    }
  ];

  function escapeAttr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }

  function render() {
    var nav = document.getElementById("flux-sidebar");
    if (!nav) return;

    var here = location.pathname.split("/").pop();
    if (!here) here = "index.html";

    var html = '<div class="sb-home"><a href="index.html">&larr; Índex de guies</a></div>';

    // quin capitol conte la pagina actual? nomes aquest es mostra desplegat
    var activeTema = -1;
    for (var a = 0; a < SECTIONS.length; a++) {
      for (var b = 0; b < SECTIONS[a].groups.length; b++) {
        for (var c = 0; c < SECTIONS[a].groups[b].items.length; c++) {
          if (SECTIONS[a].groups[b].items[c].href === here) activeTema = a;
        }
      }
    }

    for (var s = 0; s < SECTIONS.length; s++) {
      var tema = SECTIONS[s];
      var isOpen = (s === activeTema);
      html += '<button type="button" class="sb-tema' + (isOpen ? " open" : "") + '" aria-expanded="' + (isOpen ? "true" : "false") + '">' +
              '<span>' + tema.tema + '</span><span class="sb-caret" aria-hidden="true">›</span></button>';
      html += '<div class="sb-body"' + (isOpen ? "" : " hidden") + '>';
      for (var g = 0; g < tema.groups.length; g++) {
        var group = tema.groups[g];
        html += '<div class="sb-group-title">' + group.title + "</div>";
        html += '<ul class="sb-list">';
        for (var i = 0; i < group.items.length; i++) {
          var it = group.items[i];
          var cls = it.href === here ? ' class="active"' : "";
          html +=
            "<li><a" + cls + ' href="' + escapeAttr(it.href) + '">' +
            '<span class="sb-tag">' + it.tag + "</span>" +
            "<span>" + it.title + "</span>" +
            "</a></li>";
        }
        html += "</ul>";
      }
      html += "</div>";
    }

    nav.innerHTML = html;

    // plegar / desplegar un capitol en fer-hi clic
    nav.addEventListener("click", function (e) {
      var btn = e.target.closest("button.sb-tema");
      if (!btn) return;
      var body = btn.nextElementSibling;
      var nowOpen = btn.classList.toggle("open");
      if (body) body.hidden = !nowOpen;
      btn.setAttribute("aria-expanded", nowOpen ? "true" : "false");
    });
  }


  // ---------- navegacio anterior / seguent ----------
  // L'ordre es el mateix de SECTIONS, aplanat. Qualsevol pagina nova que
  // s'afegeixi alla apareix automaticament a la cadena.

  var INDEX_ITEM = { href: "index.html", tag: "", title: "\u00cdndex de guies" };

  function flatList() {
    var out = [];
    for (var s = 0; s < SECTIONS.length; s++) {
      for (var g = 0; g < SECTIONS[s].groups.length; g++) {
        var items = SECTIONS[s].groups[g].items;
        for (var i = 0; i < items.length; i++) out.push(items[i]);
      }
    }
    return out;
  }

  function pagerButton(item, dir, label) {
    return '<a class="pager-btn ' + dir + '" href="' + escapeAttr(item.href) + '">' +
      '<span class="pager-dir">' + label + "</span>" +
      (item.tag ? '<span class="pager-tag">' + item.tag + "</span>" : "") +
      '<span class="pager-title">' + item.title + "</span>" +
      "</a>";
  }

  function renderPager() {
    var here = location.pathname.split("/").pop();
    if (!here) here = "index.html";
    if (here === "index.html") return;

    var list = flatList();
    var pos = -1;
    for (var i = 0; i < list.length; i++) if (list[i].href === here) pos = i;
    if (pos < 0) return;

    var prev = pos > 0 ? list[pos - 1] : INDEX_ITEM;
    var next = pos < list.length - 1 ? list[pos + 1] : INDEX_ITEM;

    // capcalera: fletxes compactes i posicio dins del recorregut
    var topnav = document.querySelector(".topnav");
    if (topnav) {
      var tp = document.createElement("span");
      tp.className = "topnav-pager";
      tp.innerHTML =
        '<a href="' + escapeAttr(prev.href) + '" title="' + escapeAttr(prev.title) +
        '" aria-label="Anterior">&larr;</a>' +
        '<span class="tp-pos">' + (pos + 1) + " / " + list.length + "</span>" +
        '<a href="' + escapeAttr(next.href) + '" title="' + escapeAttr(next.title) +
        '" aria-label="Seg\u00fcent">&rarr;</a>';
      topnav.appendChild(tp);
    }

    // peu: dos botons amb el titol sencer, just abans del footer
    var pager = document.createElement("nav");
    pager.className = "pager";
    pager.setAttribute("aria-label", "Navegaci\u00f3 entre guies");
    pager.innerHTML = pagerButton(prev, "prev", "&larr; Anterior") +
                      pagerButton(next, "next", "Seg\u00fcent &rarr;");

    var wrap = document.querySelector(".wrap");
    var foot = wrap ? wrap.querySelector("footer") : null;
    if (foot) foot.parentNode.insertBefore(pager, foot);
    else if (wrap) wrap.appendChild(pager);

    // fletxes del teclat (no si s'esta escrivint a l'editor)
    document.addEventListener("keydown", function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      var t = document.activeElement;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.key === "ArrowLeft") location.href = prev.href;
      else if (e.key === "ArrowRight") location.href = next.href;
    });
  }


  // ---------- mode classe: amaga el que no es contingut i engrandeix ----------
  function renderClassMode() {
    var topnav = document.querySelector(".topnav");
    if (!topnav) return;
    var KEY = "fluxModeClasse";
    var on = false;
    try { on = localStorage.getItem(KEY) === "1"; } catch (e) {}
    var btn = document.createElement("button");
    btn.className = "classe-btn";
    btn.type = "button";
    function paint() {
      document.body.classList.toggle("classe", on);
      btn.textContent = on ? "Surt del mode classe" : "Mode classe";
      btn.title = on ? "Torna a mostrar el men\u00fa i la navegaci\u00f3"
                     : "Amaga el men\u00fa i la navegaci\u00f3 i engrandeix el contingut, per projectar";
    }
    btn.addEventListener("click", function () {
      on = !on;
      try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) {}
      paint();
    });
    paint();
    var first = topnav.querySelector("a");
    if (first && first.nextSibling) topnav.insertBefore(btn, first.nextSibling);
    else topnav.appendChild(btn);
  }

  function wireToggle() {
    var btn = document.getElementById("sb-toggle");
    var sidebar = document.getElementById("flux-sidebar");
    if (!btn || !sidebar) return;
    btn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
    sidebar.addEventListener("click", function (e) {
      if (e.target.closest("a")) sidebar.classList.remove("open");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      render();
      wireToggle();
      renderPager();
      renderClassMode();
    });
  } else {
    render();
    wireToggle();
    renderPager();
    renderClassMode();
  }
})();
