import anime from "../..//lib/anime/lib/anime.es.js";

function secret() {
    location.replace("hell.html")
}

let animation = anime({
    targets: 'img',
    rotate: '1turn',
    duration: 1000,
    autoplay: false,
});

let clicks = 0;


document.getElementById("schmoser").addEventListener("click", function() {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url(\"component/image/ceo.jpg\")";
    document.getElementsByTagName("body")[0].style.color = "white";
    animation.play();
    clicks++;
    if (clicks == 10) {
        secret();
    }
});