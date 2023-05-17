class Character {
    constructor(text, info, picture) {
        this.text = text,
        this.info = info,
        this.picture = picture
    }


    replaceText() {
        let textField = document.getElementById("bio");
        textField.innerHTML = this.text;
    }
    replaceInfo() {
        document.getElementById("names").innerHTML = this.info.names;
        document.getElementById("born").innerHTML = this.info.born;
        document.getElementById("died").innerHTML = this.info.died;
        document.getElementById("class").innerHTML = this.info.class_;
        document.getElementById("gender").innerHTML = this.info.gender;
        document.getElementById("height").innerHTML = this.info.height;
        document.getElementById("hair").innerHTML = this.info.hair;
        document.getElementById("culture").innerHTML = this.info.culture;
        document.getElementById("race").innerHTML = this.info.race;
    }
    replaceImage() {
        let picture = document.getElementById("picture");
        picture.src = this.picture;
    }
    replace() {
        this.replaceText();
        this.replaceInfo();
        this.replaceImage();
    }
}

const alexanderf = new Character(
    "Alex is a charming young femboy with a strikingly adorable appearance. He has always loved expressing himself through fashion and makeup, and his feminine look has captured the hearts of many. Alex's passion for beauty and style has led him to become a successful influencer, inspiring others to embrace their unique styles. Despite facing some challenges as a gender non-conforming individual, Alex continues to stay confident and true to himself, spreading positivity and love everywhere he goes.",
    {
        names: "fridolin",
        born: "25.09.2006",
        died: "-",
        class_: "healer",
        gender: "-",
        height: "175",
        hair: "brown",
        culture: "The high rohrbachers",
        race: "femboi"
    },
    "pictures/tank.png"
);

const elias = new Character(
    "Meet Elias, the devious, playful seal! With a cunning glint in his eyes and a knack for mischief, Elias is a master of pranks and laughter. His charismatic smile and wicked sense of humor keep everyone on their toes, while its rotund figure hides a mischievous nature that's hard to resist. Get ready for endless amusement and unpredictable antics with this sly and playful seal!",
    {
        names: "elias, seal",
        born: "25.12.2006",
        died: "-",
        class_: "tank",
        gender: "male",
        height: "170",
        hair: "brown",
        culture: "seal but fat",
        race: "seal"
    },
    "pictures/dd.png"
);

const ju = new Character(
    "As a child, Ju necromancer spent most of his days alone, talking to the spirits that visited him while others shunned him. This led him to delve further into the world of magic, eventually mastering the art of necromancy. However, despite his power, he remained isolated, as the society feared and rejected him. He now spends his days in solitude, communing with the dead and longing for the company of humans who will not fear him.",
    {
        names: "Julien",
        born: "unknown",
        died: "-",
        class_: "necromancer",
        gender: "nb",
        height: "172",
        hair: "red",
        culture: "unknown",
        race: "human"
    },
    "pictures/necromancer.png"
);

document.getElementsByClassName("select")[0].addEventListener("click", function(e) {
    let button = e.target.id;
    switch (button) {
        case "alexanderf": alexanderf.replace(); break;
        case "elias": elias.replace(); break;
        case "ju": ju.replace(); break;
        default: break;
    }
});
