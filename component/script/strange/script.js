class Confession {
    constructor() {
        this.quotes = [
            ["You will always be fond of me. I represent to you all the sins you never had the courage to commit.", "Oscar Wilde", 10],
            ["Some tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin", "John Green", 10],
            ["Hate the sin, love the sinner.", "Mahatma Gandhi", 10],
            ["I am not a saint, unless you think of a saint as a sinner who keeps on trying.", "Nelson Mandela", 10],
            ["I'd rather laugh with the sinners than cry with the saints.", "Billy Joel", 10],
            ["And sin, young man, is when you treat people like things.", "Terry Pratchett", 10],
            ["What is sin?<br>" +
            "It is the glory of God not honored.<br>" +
            "The holiness of God not reverenced.<br>" +
            "The greatness of God not admired.<br>" +
            "The power of God not praised.<br>" +
            "The truth of God not sought.<br>" +
            "The wisdom of God not esteemed.<br>" +
            "The beauty of God not treasured.<br>" +
            "The goodness of God not savored.<br>" +
            "The faithfulness of God not trusted.<br>" +
            "The commandments of God not obeyed.<br>" +
            "The justice of God not respected.<br>" +
            "The wrath of God not feared.<br>" +
            "The grace of God not cherished.<br>" +
            "The presence of God not prized.<br>" +
            "The person of God not loved.<br>" +
            "That is sin.<br>", "John Piper", 20],
            ["The gospel is this: We are more sinful and flawed in ourselves than we ever dared believe, yet at the very same time we are more loved and accepted in Jesus Christ than we ever dared hope.", "Timothy Keller", 15],
            ["Be a sinner and sin boldly, but believe and rejoice in Christ even more boldly.", "Martin Luther", 10],
        ];
        this.text = "<br><br>I thank you for checking out my site<br>You may be a sinner but I forgive you<br><br><br><h1>Credits</h1><br><h2>Coding</h2><p>Alexander Fuchs as Alexlexlexlex</p><h2>Ideas</h2><p>Alexlexlexlex<br>and some help of Dooklin</p><h2>Music</h2><p>Music by <a href=\"https://pixabay.com/users/the_mountain-3616498/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=141475\">The_Mountain</a> from <a href=\"https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=141475\">Pixabay</a></p><br><br><br><br><h1>Sinner Ending</h1>";
        this.playAudio();
        this.addBackground();
        this.makeFullscreen();
        this.removeButton();
        this.addText().then();
    }
    playAudio() {
        let audio = new Audio("./component/audio/for-documentary.mp3");
        audio.play().then();
    }
    addBackground() {
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(\"component/image/forest.jpg\")"
    }
    makeFullscreen() {
        document.getElementsByTagName("html")[0].requestFullscreen().then();
    }
    removeButton() {
        document.getElementsByTagName("body")[0].removeChild(document.getElementById("confess"));
    }
    async addText() {
        await new Promise(r => setTimeout(r, 5000));
        for (let i = 0; i < this.quotes.length; i++) {
            let left = Math.round(Math.random()*80);
            let top = Math.round(Math.random()*80);
            let quote = this.quotes[i][0];
            let author = this.quotes[i][1];
            let time = this.quotes[i][2];
            console.log(i);

            let line = `<div id="current_text" style="left: ${left}%; top: ${top}%; position: relative; max-width: 20%; animation: text-animation ${time}s linear;"><q>${quote}</q><address>${author}</address></div>`
            document.getElementsByTagName("body")[0].innerHTML += line;
            await new Promise(r => setTimeout(r, time*1000));
            document.getElementsByTagName("body")[0].removeChild(document.getElementById("current_text"));
        }
        let end = `<div id="ending" style="text-align: center; animation: end-animation 10s linear;">${this.text}</div>`
        document.getElementsByTagName("body")[0].innerHTML += end;
    }
}

document.getElementById("confess").addEventListener("click", function () {
    new Confession();
});
