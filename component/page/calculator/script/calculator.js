document.addEventListener("click", function(e) {
    let output = document.getElementById("output");
    if (output.innerHTML === "Your Result will show up here")
        output.innerHTML = "";
    switch (e.target.id) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0': output.innerHTML += e.target.id; break;
        case 'calc': output.innerHTML = eval(output.innerHTML); break;
        case 'clr': output.innerHTML = "";
    }
})