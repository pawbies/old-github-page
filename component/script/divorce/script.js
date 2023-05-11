function add_text(text) {
    document.getElementById("res").innerHTML += "<p class=\"text\">" + text + "</p>";
}
function add_button(id, text) {
    document.getElementById("res").innerHTML += "<button id=\"" + id + "\">" + text + "</button>";
}
function shame() {
    location.replace("index.html");
}
function confess() {
    location.replace("strange.html");
}


document.getElementById("yes").addEventListener("click", function() {
    add_text("Children of divorce are more likely to experience poverty, educational failure, early and risky sexual activity, <br> non-marital childbirth, earlier marriage, cohabitation, marital discord and divorce. In fact, emotional problems associated with divorce actually increase during young adulthood.<br>Shame on you");

    document.getElementById("dialog").removeChild(document.getElementById("yes"));
    document.getElementById("dialog").removeChild(document.getElementById("no"));

    add_button("confess", "confess your sins");
    add_button("shame", "live in shame");

    document.getElementById("shame").addEventListener("click", function() {
        shame();
    });
    document.getElementById("confess").addEventListener("click", function() {
        confess();
    });
});
document.getElementById("no").addEventListener("click", function() {
    add_text("I am glad you are such a cool person<br>Here take this:<br><img src=\"component/image/bj.png\" alt=\"Coupon\">");

    document.getElementById("dialog").removeChild(document.getElementById("yes"));
    document.getElementById("dialog").removeChild(document.getElementById("no"));
});