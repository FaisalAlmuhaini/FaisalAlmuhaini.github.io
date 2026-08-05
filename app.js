const CAPTIONS = {
  home:        ["Home", "Jeddah, Saudi Arabia"],
  work:        ["Work", "Six selected projects"],
  about:       ["About", "Jeddah, Saudi Arabia"],
  credentials: ["Credentials", "Degree and certifications"],
  contact:     ["Contact", "Open to roles"]
};

const views = document.querySelectorAll("[data-view]");
const navLinks = document.querySelectorAll(".navgroup a");
const capTitle = document.getElementById("cap-title");
const capSub = document.getElementById("cap-sub");

function show(name){
  const target = CAPTIONS[name] ? name : "home";
  views.forEach(v => v.toggleAttribute("data-active", v.dataset.view === target));
  navLinks.forEach(a =>
    a.getAttribute("href") === "#" + target
      ? a.setAttribute("aria-current", "page")
      : a.removeAttribute("aria-current")
  );
  const [t, s] = CAPTIONS[target];
  capTitle.textContent = t; capSub.textContent = s;
  window.scrollTo(0, 0);
}

function route(){
  show(location.hash.slice(1) || "home");
}

/* index.html has multiple [data-view] sections and hash-routes between
   them; the standalone case-*.html pages have exactly one, already
   marked data-active in the markup, so routing must not run there —
   it would hide the page's only section. */
if(views.length > 1){
  window.addEventListener("hashchange", route);
  route();
}

/* image zoom lightbox — shared by credential thumbnails (index.html)
   and case-study figures (index.html + every case-*.html page) */
const lightbox = document.getElementById("lightbox");
if(lightbox){
  const lightboxImg = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  let lastTrigger = null;

  function openLightbox(thumb){
    const img = thumb.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lastTrigger = thumb;
    lightbox.toggleAttribute("data-open", true);
    lightboxClose.focus();
  }

  function closeLightbox(){
    lightbox.removeAttribute("data-open");
    lightboxImg.src = "";
    if(lastTrigger) lastTrigger.focus();
  }

  document.addEventListener("click", e => {
    const thumb = e.target.closest(".creds-thumb, .case-img-btn");
    if(thumb){ openLightbox(thumb); return; }
    if(lightbox.hasAttribute("data-open") && (e.target.closest(".lightbox-close") || e.target === lightbox)){
      closeLightbox();
    }
  });

  document.addEventListener("keydown", e => {
    if(e.key === "Escape" && lightbox.hasAttribute("data-open")) closeLightbox();
  });
}
