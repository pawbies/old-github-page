let out = document.getElementById("output");
let len = document.getElementById("lenght");
let sc = document.getElementById("special");
let n = document.getElementById("num");
let get = document.getElementsByTagName("form")[0];

let chars = "qwertzuiopüäölkjhgfdsayxcvbnmMNBVCXYASDFGHJKLÖÄÜPOIUZTREWQ";
let nums = "1234567890";
let special = "!§$%&/()=?";


get.onsubmit = function() {
    let pwd = "";
    let cs = chars;
    if (sc.checked)
        cs = cs.concat(special);
    if (n.checked)
        cs = cs.concat(nums);
    

    for (let i = 0; i < len.value; i++) {
        pwd += cs[Math.round(Math.random() * cs.length)];
    }

    out.value = pwd;

    return false;
};