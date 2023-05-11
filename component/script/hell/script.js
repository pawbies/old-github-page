import anime from "../../lib/anime/lib/anime.es.js";

let text_out = anime({
    targets: "main",
    opacity: 0,
    duration: 1000,
    autoplay: false,
});
let text_in = anime({
    targets: "main",
    opacity: 1,
    duration: 100,
    autoplay: false,
});

let text_output = document.getElementById("text");
let choice = document.getElementById("field");

function add_button(id, value) {
    choice.innerHTML += `<button id="${id}">${value}</button><br>`
}
function remove_button(id) {
    choice.removeChild(document.getElementById(id));
}

text_output.onclick = async function() {
    let audio = new Audio("component/audio/a-fond-memory.mp3");
    audio.volume = 0.1;
    audio.play();
    text_out.play();
    await new Promise(r => setTimeout(r, 3000));
    console.log(document.getElementsByTagName("main")[0].style.opacity);
    text_output.innerHTML = "Huh... It seems i woke up in hell<br>Should i walk through this weird portal?";
    add_button("yes", "yes");
    add_button("no", "no");
    text_in.play();

    document.getElementById("yes").addEventListener("click", function() {
        location.replace("index.html")
    });

    document.getElementById("no").addEventListener("click", async function() {
        remove_button("yes");
        remove_button("no");
        text_output.innerHTML = "Looks like this is your new home now<br>";
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(\"component/image/nether.png\")"

        text_output.innerHTML += '<h1>Hellbound Ending</h1><h1>Credits</h1><br><h2>Coding</h2><p>Alexander Fuchs as Alexlexlexlex</p><h2>Ideas</h2><p>Alexlexlexlex<br>and some help of Dooklin</p><h2>Music</h2>Music by <a href="https://pixabay.com/users/sunsetflowerray-25021233/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=116759">sunsetflowerray</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=116759">Pixabay</a>'
    
        for (audio.volume; audio.volume < 10; audio.volume += 0.1) {
            await new Promise(r => setTimeout(r, 1000));
        }
    });
}