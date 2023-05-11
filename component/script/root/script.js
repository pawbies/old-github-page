import anime from "../../lib/anime/lib/anime.es.js";
let links = document.querySelectorAll(".page");
let onanimation = function(e) {
    anime({
        targets: `#${e.target.id}p`,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        fontWeight: "700",
        duration: 3000,
    });
}
let leaveanimation = function(e) {
    anime({
        targets: `#${e.target.id}p`,
        backgroundColor: "rgba(0, 0, 0, 0)",
        fontWeight: "400",
        duration: 3000,
    });
}

for (let i = 0; i < links.length; i++) {
    links[i].onmouseover = onanimation;
    links[i].onmouseleave = leaveanimation;
}