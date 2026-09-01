/* Reel della location — il video prende il posto della prima foto del blocco
   editoriale, subito sotto il primo H2, e la sezione reel di fondo pagina
   sparisce perché il video non si veda due volte. Vale su mobile e su desktop.
   Il reel sta in una <section> sorella dell'intro: spostarlo dentro al blocco
   editoriale non si può fare in CSS, serve muovere il nodo. Il blocco si chiama
   .location-intro-editorial su due pagine e .lake-editorial-media sulle altre
   quindici: stessa struttura, classi diverse, quindi si cercano entrambe.
   Se lo script non parte la pagina resta quella di sempre — foto in alto, reel
   in fondo — e la classe che nasconde la foto non viene mai messa. */
(function () {
  "use strict";

  var figure = document.querySelector(".location-intro-editorial figure, .lake-editorial-media");
  var reel = document.querySelector(".location-reel");
  var video = reel ? reel.querySelector(".location-reel-video") : null;

  if (!figure || !video) {
    return;
  }

  figure.appendChild(video);
  document.body.classList.add("location-reel-moved");
}());
