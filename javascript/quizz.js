
// CORRECTION du Quizz

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------------    VERSION ALAIN    -----------------------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function resultat(){
//     let score = 0;
//     let rep1 = document.querySelector("input[name=q01]:checked").value;
//     let rep2 = document.querySelector("input[name=q02]:checked").value;

//     if (rep1 == "true"){
//         score++;
//     }

//     if (rep2 == "true"){
//         score++;
//     }

//     document.getElementById("repResultat").innerHTML = `Votre score est de ${score} points.`

//     const divBonneRep = document.querySelectorAll('.bonneRep');

//     divBonneRep.forEach((elem) =>{
//         elem.style.backgroundColor = "green";
//     })

// }




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------------    VERSION TEST 1    -----------------------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function resultat(){
    let score = 0;
    let rep1 = document.querySelector("input[name=q01]:checked").value;
    let rep2 = document.querySelector("input[name=q02]:checked").value;

    if (rep1 == "true"){
        score++;
    }

    if (rep2 == "true"){
        score++;
    }

    document.getElementById("repResultat").innerHTML = `Votre score est de ${score} points.`
    document.getElementById("repResultat").classList.add("exoGuide");


    const divBonneRep = document.querySelectorAll('.bonneRep');

    divBonneRep.forEach((elem) =>{
        elem.style.backgroundColor = "green";
    })



    
    // sélectionner toutes les réponses fausses
    let falseReponse = document.querySelectorAll(".falseReponse");
    console.log(falseReponse);

    // sélectionner les réponses fausses choisies par l'utilisateur
    const divFalseReponse = document.querySelectorAll("input[value=false]:checked");
    console.log(divFalseReponse);

    
    
    // comment changer le backgroundColor de toutes les réponses fausses choisies par l'utilisateur ???
    divFalseReponse.forEach((elem) =>{
        console.log(elem);
        // pour sélectionner la div qui est le parent de l'input
        console.log(elem.parentNode); 
        elem.parentNode.style.backgroundColor = "red";
        // OU BIEN... (avec 'parentElement' au lieu de 'parentNode')
        // elem.parentElement.style.backgroundColor = "red";
    })

    
    
}







// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------------    VERSION TEST 2    -----------------------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// function resultat(){
//     let score = 0;
//     let rep1 = document.querySelector("input[name=q01]:checked").value;
//     let rep2 = document.querySelector("input[name=q02]:checked").value;

//     if (rep1 == "true"){
//         score++;
//     }

//     if (rep2 == "true"){
//         score++;
//     }

//     document.getElementById("repResultat").innerHTML = `Votre score est de ${score} points.`

//     const divBonneRep = document.querySelectorAll('.bonneRep');

//     divBonneRep.forEach((elem) =>{
//         elem.style.backgroundColor = "green";
//     })

// }