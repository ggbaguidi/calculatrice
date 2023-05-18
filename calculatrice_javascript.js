let liste_nombre = document.getElementsByClassName("numerique");//recuperation de tous les elements possedant
                                                                //la classe numerique
let liste_operateur = document.getElementsByClassName("operateur");/*recuperation de tous les elements possedant
                                                                   la classe operateur*/
let glob = ""
let nombre_1=0,nombre_2=0;
let entrer = document.getElementById("entrer");
entrer.innerHTML = "0";
let effacer = document.getElementById("Effacer");

effacer.addEventListener("click",function(event){
    event.preventDefault();
    event.stopPropagation();
    let tmp = "";
    glob = entrer.innerHTML;
    if(glob.length >1){
        for(let i=0;i<glob.length-1;i++){
            tmp += glob[i];
        }
        glob = tmp;
        entrer.innerHTML = glob;
    }
    else if(glob.length == 1 || entrer.innerHTML == "ZeroDivionError"){
        glob = "";
        entrer.innerHTML = 0;
    }
})
let quitter = document.getElementById("Quitter");
quitter.addEventListener("click",function(event){
    event.preventDefault();
    event.stopPropagation();
    glob = ""
    entrer.innerHTML = 0;
})

let oper = "+";// par defaut c'est l'operation d'addition
let vrai = true;//permet de dire si la virgule a ete clickee
for(let i=0; i<liste_nombre.length;i++){
    liste_nombre[i].addEventListener("click",function(event){
        event.preventDefault();
        event.stopPropagation();
        glob +=liste_nombre[i].innerHTML;
        entrer.innerHTML = glob;
    })
}
for(let i=0; i<liste_operateur.length;i++){
    liste_operateur[i].addEventListener("click",function(event){
        event.preventDefault();
        event.stopPropagation();
        oper = liste_operateur[i].innerHTML;
        glob = "";
        vrai = true;
        nombre_1 = entrer.innerHTML;
    })
}
let egal = document.getElementById("equal");

egal.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    nombre_2 = entrer.innerHTML;
    nombre_1 = parseFloat(nombre_1);
    nombre_2 = parseFloat(nombre_2);
    if(oper == "+"){entrer.innerHTML = nombre_1+nombre_2;glob = "";}
    else if(oper == "-"){entrer.innerHTML = nombre_1-nombre_2;glob = "";}
    else if(oper == "*"){entrer.innerHTML = nombre_1*nombre_2;glob = glob = "";}
    else{
        if(nombre_2 == 0){
            entrer.innerHTML = "ZeroDivionError";glob = 0;

        }
        else{entrer.innerHTML = nombre_1/nombre_2;glob = "";}
    }
})
let point = document.getElementById("dot");
point.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    glob +=point.innerHTML;
    entrer.innerHTML = glob;
})