/* ============================================================
   firebase-data.js — PUBLIC read layer
   Loads listings + site settings live from Firebase (if configured)
   and refreshes the page. Safe no-op until Firebase is set up.
   Do not edit — managed for you.
   ============================================================ */
(function () {
  var cfg = window.FIREBASE_CONFIG || {};
  var configured = cfg.apiKey && cfg.apiKey.indexOf("PASTE_") !== 0;
  if (!configured) { return; } // not set up yet → static fallback (properties.js)

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  var BASE = "https://www.gstatic.com/firebasejs/10.12.2/";
  Promise.all([
    loadScript(BASE + "firebase-app-compat.js")
  ]).then(function () {
    return Promise.all([
      loadScript(BASE + "firebase-firestore-compat.js")
    ]);
  }).then(function () {
    try { firebase.initializeApp(cfg); } catch (e) {}
    var db = firebase.firestore();

    // ---- listings ----
    db.collection("properties").get().then(function (snap) {
      var list = [];
      snap.forEach(function (doc) {
        var d = doc.data() || {};
        d.id = d.id || doc.id;
        list.push(d);
      });
      // Order: For Sale/Pending first, then Sold (newest sold first if order field present)
      list.sort(function (a, b) {
        var aw = (a.status || '').toLowerCase() === 'sold' ? 1 : 0;
        var bw = (b.status || '').toLowerCase() === 'sold' ? 1 : 0;
        if (aw !== bw) return aw - bw;
        return (b.order || 0) - (a.order || 0);
      });
      if (list.length) {
        window.LIVE_PROPERTIES = list;
        if (typeof window.loadProperties === 'function') window.loadProperties();
        if (typeof window.renderProperty === 'function') window.renderProperty();
      }
    }).catch(function (e) { /* keep static fallback */ });

    // ---- site settings (contact details / addresses) ----
    db.collection("settings").doc("site").get().then(function (doc) {
      if (!doc.exists) return;
      var s = doc.data() || {};
      applySettings(s);
    }).catch(function () {});
  }).catch(function () { /* SDK failed to load → static fallback */ });

  // Update any element marked with data-site="phone|email|office|..."
  function applySettings(s) {
    document.querySelectorAll('[data-site]').forEach(function (el) {
      var key = el.getAttribute('data-site');
      if (s[key] == null) return;
      if (el.tagName === 'A') {
        if (key === 'phone') { el.textContent = s.phone; el.href = 'tel:' + String(s.phone).replace(/[^+\d]/g, ''); }
        else if (key === 'email') { el.textContent = s.email; el.href = 'mailto:' + s.email; }
        else { el.textContent = s[key]; if (s[key + 'Url']) el.href = s[key + 'Url']; }
      } else {
        el.textContent = s[key];
      }
    });
    // social links
    ['facebook', 'instagram', 'linkedin', 'youtube', 'tiktok'].forEach(function (net) {
      var a = document.querySelector('[data-social="' + net + '"]');
      if (a && s[net]) { a.href = s[net]; a.style.display = ''; }
    });
  }
})();
