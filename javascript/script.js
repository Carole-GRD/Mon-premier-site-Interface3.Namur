// Ceci est un commentaire

/* Ceci est un commentaire 
sur plusieurs lignes */

function bonjour(){
    document.getElementById("reponseBonjour").innerHTML = "Bonjour !";
}

// Via addEventListener
const direBonjour = document.querySelector("#direBonjour");

direBonjour.addEventListener("click", () =>{
    document.getElementById("reponseBonjour").innerHTML = "Bonjour via addEventListener !<br>Comment allez-vous ?";
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Récupération des valeurs et affichage dans la page
function exoGuide(){
    let userFirstName = document.getElementById("userFirstName").value;
    let userName = document.getElementById("userName").value;
    const retourExoGuide = document.getElementById("retourExoGuide");

    retourExoGuide.innerHTML = "Bonjour " + userFirstName + " " + userName + " !";
    retourExoGuide.classList.add("exoGuide");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Concaténation et fonction prompt()
function nomEtPrenom(){
    let prenom = prompt("Veuillez entrer votre prénom");
    let nom = prompt("Veuillez entrer votre nom");
    alert("Bonjour " + prenom + " " + nom + " !\nComment allez-vous?");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Majeur ou pas ?
function exoAge(){
    let ageUser = document.getElementById("ageUser").value;
    
    const reponseMajorite = document.getElementById("reponseMajorite");
    reponseMajorite.classList.add("exoGuide");

    if(ageUser>=18){
        reponseMajorite.innerHTML = "Vous êtes majeur.";
    }
    else {
        reponseMajorite.innerHTML = "Vous êtes encore mineur.";
    }   
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Calcul de prix
function exoPrix(){
    let prixArticle = document.getElementById("prixArticle").value;
    let nbrArticles = document.getElementById("nbrArticles").value;
    let tva = document.getElementById("tva").value;

    let totalHTVA = nbrArticles * prixArticle;
    let totalTVAC = totalHTVA * (1 + tva / 100);

    const reponsePrixTotal = document.getElementById("reponsePrixTotal");

    // reponsePrixTotal.innerHTML = "Prix total : " + total + " euros";
    reponsePrixTotal.innerHTML = `<p>Prix total HTVA : ${totalHTVA} euros</p><p>Prix total TVAC : ${totalTVAC} euros</p>`;

    reponsePrixTotal.classList.add("exoGuide");    
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Calcul du volume d'une sphère
function exoVolume(){
    let rayon = document.getElementById("rayon").value;
    let pi = Math.PI
    let volume = (4 / 3) * pi * rayon ** 3;
    let volume_arrondi = volume.toFixed(2)

    const reponseVolume = document.getElementById("reponseVolume");

    reponseVolume.innerHTML = `Le volume d'une sphère de ${rayon} cm de rayon est de : ${volume_arrondi} cm<sup>3</sup>.`

    reponseVolume.classList.add("exoGuide");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Possibilité de formation
function exoFormation(){
    let annee_naissance = document.getElementById("annee_naissance").value;

    // let date_actuelle = new Date().getFullYear();
    // let annee_actuelle = date_actuelle.getFullYear();
    // let age = annee_actuelle - annee_naissance;

    let annee_actuelle = new Date().getFullYear();
    let age = annee_actuelle - annee_naissance;

    // const reponseFormation = document.getElementById("reponseFormation");

    let msg ="";

    if (age>=18 && age<=35){
        msg = `<p>Vous avez ${age} ans, vous pouvez suivre une formation.</p><p>Rendez-vous sur la page : <a href="https://www.interface3namur.be/" target="_blank">Interface3.Namur</a></p>`
    }else{
        msg = `<p>Vous avez ${age} ans, vous n'avez pas l'âge pour suivre une formation.</p>`
    }

    // reponseFormation.innerHTML = msg

    document.getElementById("reponseFormation").innerHTML = msg;
    document.getElementById("reponseFormation").classList.add("exoGuide");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    - Lier script au HTML
    - declaration/affectation des variables "var let const"
    - lire/ecrire :
        - getElementById().value
        - getElementById().innerHTML
    - conditions :
        - if
        - if else
        - if else if
    - opérateur de comparaison < > == ===
    - opérateur logique && ||  
*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Bissextile ou pas ?
function exoBissextile(){
    let annee_user = document.getElementById("annee_user").value;

    const reponseBissextile = document.getElementById("reponseBissextile");
    reponseBissextile.classList.add("exoGuide");

    // let msg = "";

    if (annee_user % 4 == 0 && annee_user % 100 != 0 || annee_user % 400 == 0){
        reponseBissextile.innerHTML = `${annee_user} est une année bissextile !`;
        reponseBissextile.style.backgroundColor = "green";
        
    }else{
        reponseBissextile.innerHTML = `${annee_user} n'est pas une année bissextile !`;
        reponseBissextile.style.backgroundColor = "crimson";
    }
}





// function exoBissextile(){
//     let annee_user = document.getElementById("annee_user").value;

//     // msg.classList.add("exoGuide");

//     let msg = "";

//     if (annee_user % 4 == 0 && annee_user % 100 != 0 || annee_user % 400 == 0){
//         msg = `${annee_user} est une année bissextile !`;
//         document.getElementById("reponseBissextile").style.backgroundColor = "green";
        
//     }else{
//         msg = `${annee_user} n'est pas une année bissextile !`;
//         document.getElementById("reponseBissextile").style.backgroundColor = "crimson";
//     }

//     document.getElementById("reponseBissextile").innerHTML = msg;
// }


// ATTENTION : ERREUR DANS CE CODE

// function exoBissextile(){
//     let annee_user = document.getElementById("annee_user").value;

//     // const reponseBissextile = document.getElementById("reponseBissextile");
//     // reponseBissextile.classList.add("exoGuide");

//     let msg = "";
//     msg.classList.add("exoGuide");
//     // let colorRep = true;

//     if (annee_user % 4 == 0 && annee_user % 100 != 0 || annee_user % 400 == 0){
//         msg = `${annee_user} est une année bissextile !`;
//         document.getElementById("reponseBissextile").style.backgroundColor = "green";
        
//     }else{
//         msg = `${annee_user} n'est pas une année bissextile !`;
//         document.getElementById("reponseBissextile").style.backgroundColor = "crimson";
//     }

//     document.getElementById("reponseBissextile").innerHTML = msg;
    
// }



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Concordance de mot de passe

function exoPassword(){
    let password_1 = document.getElementById("password_1").value;
    let password_2 = document.getElementById("password_2").value;

    let msg = "";
    
    // document.getElementById("reponsePassword").classList.add("exoGuide");

    if (password_1 == password_2){
        msg = "Mot de passe validé !";
    }else{
        msg = "Erreur, recommencez !";
        document.getElementById("reponsePassword").style.backgroundColor = "crimson";
    }

    document.getElementById("reponsePassword").innerHTML = msg;

    document.getElementById("reponsePassword").classList.add("exoGuide");
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// La condition SWITCH (pour des cas précis !)

function condSwitch(){
    let nbreUser = document.getElementById("condSwitch").value;
    switch(nbreUser){
        case "1":
        case "i":
            alert("Vous avez appuyez sur 1");
            break;
        case "2":
            alert("Vous avez appuyez sur 2");
            break;
        case "3":
            alert("Vous avez appuyez sur 3");
            break;
        case "4":
            alert("Vous avez appuyez sur 4");
            break;
        default:
            alert("Entre 1 et 4 on t'a dit !");
    }
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Droit ou pas ?

function exoDroit(){
    let genre = document.getElementById("genre").value;
    let age = document.getElementById("age").value;

    let msg = "";
    
    if (genre=="homme" && age>=25 && age<=55){
        msg = "Vous devez payer l'entrée !";
    }else if (age<18){
        msg = "<p>Vous avez moins de 18 ans !</p><p>Entrée interdite !</p>";
        document.getElementById("reponseDroit").style.backgroundColor = "crimson";
    }else{
        msg = "C'est gratuit !";
        document.getElementById("reponseDroit").style.backgroundColor = "green";
    }
    
    document.getElementById("reponseDroit").innerHTML = msg;
    document.getElementById("reponseDroit").classList.add("exoGuide");
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// QCM


// document.getElementsByClassName("css").classList.add("css");

// document.getElementsByClassName("logo").classList.add("logo");





// function scoreTotal(){
//     // Récupérer les réponses de l'utilisateur
//     let rep1 = document.querySelector("input[name=logo1]:checked").value;
//     let rep2 = document.querySelector("input[name=logo2]:checked").value;

//     let score = 0;
    
//     if (rep1 == "true"){
//         score++;
//         document.querySelector("input[value=true]").backgroundColor = "green";
//     }

//     if (rep2 == "true"){
//         score++;
        
//     }

//     document.getElementById("scoreTotal").innerHTML = `Votre score est de ${score} points.`

//     document.getElementById("scoreTotal").classList.add("exoGuide");

//     document.querySelector("input[value=true]").style.backgroundColor = "green";
// }





// CORRECTION du Quizz

// function resultat(){
//     let score = 0;
//     let rep1 = document.querySelector("input[name=q01]:checked").value;

// }

// if (rep1 == "true"){
//     score++;
//     console.log(score);
// }



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Première boucle while

function boucleWhile(){
    let repUser = prompt("Veuillez appuyez qur 4");
    while(repUser != '4'){
        repUser = prompt("On t'a dit d'appuyez qur 4");
    }
    alert("Merci pour le 4");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Boucle while avec compteur

function whileCompteur(){
    let compteur = 0;
    while(compteur < 10){
        alert("Mon compteur vaut " + compteur);
        compteur++;
    }
    alert("Boucle terminée");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Boucle Do...While

function boucleDoWhile(){
    let repUser = "";
    do{
        repUser = prompt("Appuyez sur 4");
    } while (repUser != "4");
    alert("Merci pour le 4");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// La boucle For

function boucleFor(){
    for(i=0; i<10; i++){
        alert("La valeur de i est " + i);
    }
    alert("Boucle terminée");
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Concaténation dans une boucle

function concaBoucle(){
    let motUser = "";
    let msg = "";

    for(i=0; i<3; i++){
        motUser = prompt("Veuillez entrer un mot : ")
        msg += motUser + "\n";
    }
    alert(msg);
}



