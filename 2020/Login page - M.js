var valid_id = "JoonHeo01539";
var valid_pw = "masterhand01";
var id = document.getElementById("login");
var pw = document.getElementById("pw");
var submit = document.getElementById("submit");

submit.onclick = function() {
    if(valid_id == id.value)
    if(valid_pw == pw.value)
        window.location.href = "./Medic.html";
}