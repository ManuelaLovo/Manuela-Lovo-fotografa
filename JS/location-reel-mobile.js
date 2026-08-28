/* Reel della location sul mobile — sotto i 780px il video prende il posto della
   prima foto del blocco editoriale, subito sotto il primo H2, e la sezione reel
   di fondo pagina sparisce perché il video non si veda due volte. Sopra i 780px
   torna tutto dov'era.
   Il reel sta in una <section> sorella dell'intro: spostarlo dentro al blocco
   editoriale non si può fare in CSS, serve muovere il nodo. Se lo script non
   parte la pagina resta quella di sempre — foto in alto, reel in fondo — e la
   classe che nasconde la foto non viene mai messa. */
(function () {
  "use strict";

  var figure = document.querySelector(".location-intro-editorial figure");
  var reel = document.querySelector(".location-reel");
  var video = reel ? reel.querySelector(".location-reel-video") : null;

  if (!figure || !video) {
    return;
  }

  var mobile = window.matchMedia("(max-width: 780px)");

  function apply() {
    if (mobile.matches) {
      if (video.parentNode !== figure) {
        figure.appendChild(video);
      }
    } else if (video.parentNode !== reel) {
      reel.appendChild(video);
    }

    document.body.classList.toggle("location-reel-moved", mobile.matches);
  }

  apply();

  if (mobile.addEventListener) {
    mobile.addEventListener("change", apply);
  } else {
    mobile.addListener(apply);
  }
}());
