import anime from "../../lib/anime/lib/anime.es.js";

let animation = anime({
    targets: 'img',
    rotate: '1turn',
    duration: 1000,
    autoplay: false,
});
document.getElementById("meme").addEventListener("click", function() {
    let main = document.getElementsByClassName("body")[0];
    let picture = document.getElementById("picture");
    picture.hidden = false;
    main.removeChild(document.getElementById("meme"));

    main.addEventListener("click", function() {
        animation.play();
    });


});