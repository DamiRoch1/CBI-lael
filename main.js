function check() {
    var fieldValue1 = document.getElementById("inputField1").value.trim();
    var passwordValue = document.getElementById("passwordField").value.trim();
    
    
    if (fieldValue1 !== "" && passwordValue !== "") {

        if ((fieldValue1 === "lael.emery@gmail.com" || fieldValue1 === "colin.chatelain@gmail.com" || fieldValue1 === "blackgugus3@gmail.com") && passwordValue === "FQErVWV6" || passwordValue === "Tw4t2LuRq!") {

            window.location.replace("https://damiroch1.github.io/CBI-lael/deep-page/acceuilloger.html");
            alert("")
            return true;
        } else if ((fieldValue1 === "0000") && passwordValue === "asdf" ) {

            window.location.replace("https://damiroch1.github.io/CBI-lael/deep-page/pascompte.html");
            alert("")
            return true;    
        } else {
            alert("La valeur du premier champ ou le mot de passe n'est pas valide !");
            return false;
        }
    } else {
        alert("Veuillez remplir tous les champs !");
        return false;
    }
}

document.getElementById("submitButton").addEventListener("click", function() {
    check();
});