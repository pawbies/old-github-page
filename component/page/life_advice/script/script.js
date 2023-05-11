let advice = document.getElementById("advice");
let run = document.getElementById("run");

let quotes = [
    ["You shall never watch youtube while shaving", "Frido"],
    ["Do your homework", "Frido"],
    ["Buy ultimate chicken horse", "Frido"],
    ["A bosna a day keeps the kaisa away", "Ele"],
    ["OneHit ~boom - Alle Kinder Tot", "Ele"],
    ["Salad ist eine Beilage", "Frau Pröll"],
    ["Don't go grocery shopping if you're hungry<br>Cus you'll grab the wrong things", "Ju"],
];

run.onclick = function() {
    console.log(quotes);
    let choice = Math.floor(Math.random()*quotes.length);
    console.log(choice);
    advice.innerHTML = `<p>${quotes[choice][0]}</p><address>${quotes[choice][1]}</address>`;
}