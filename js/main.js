// cours suvit sur Open Classroom pour apprendre la JS.







// appel la fonction "check" une fois que le bouton de connection est clic

document.getElementById("submitButton").addEventListener("click", function() {
    check();
});


// declar la fonction check

function check() {

    // ninitalise les variable avec les valeur recuperer dans les champs de connection

    var fieldValue1 = document.getElementById("inputField1").value.trim();
    var passwordValue = document.getElementById("passwordField").value.trim();
    
    
    // regarde si les champs de sont pas vide 

    if (fieldValue1 !== "" && passwordValue !== "") {

        // regarde si les champs coresponde au differant argumants

        if ((fieldValue1 === "lael.emery@gmail.com" || fieldValue1 === "colin.chatelain@gmail.com" || fieldValue1 === "adminlog") && passwordValue === "FQErVWV6" || passwordValue === "admindamien") {
            
            // si les arguments rentré sont dans la liste une nouvelle page sera ouverte (page de acceuil sacuriisé)

            window.location.replace("https://damiroch1.github.io/CBI-lael/deep-page/acceuilloger.html");
            alert("")
            return true;

            // regarde si les champs on les valeur sité en doussou

        } else if ((fieldValue1 === "0000") && passwordValue === "asdf" ) {

            // si les valeurs sont verifié une page avec une erreur sera ouverte

            window.location.replace("https://damiroch1.github.io/CBI-lael/deep-page/pascompte.html");
            alert("")
            return true;  

        } else if ((fieldValue1 === "admin") && passwordValue === "admindamien1" ) {

                // si les valeurs sont verifié une page avec la page de test
    
                window.open("https://damiroch1.github.io/CBI-lael/test/test.html");

            
                return true;    
            } else {  
       

            // indique que le email ou le mot de passe est incorecte 

            alert("L'email ou le mot de passe n'est pas valide !");
            return false;
        }
    } else {

        // si les champs son vide ecrit ce message 

        alert("Veuillez remplir tous les champs !");
        return false;
    }
}
