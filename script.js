
 
function caricamentodinamico(sezione, elemento){
    //crea div e aggiungi classe
    const divRiga = document.createElement("div");
    divRiga.classList.add("divRiga");

    //crea immagine
    const image = document.createElement("img");
    image.src=elemento.immagine;
    image.classList.add("immagine");
 
    //crea titolo
    const divElemento = document.createElement("div");
    divElemento.classList.add("divElemento");
    const titolo = document.createElement("h3");
    titolo.textContent=elemento.nome;  
 
    //crea descrizione
    const description = document.createElement("p");
    description.textContent = elemento.descrizione;
    description.classList.add("descrizione");
    description.classList.add("hidden");

    
    divElemento.appendChild(image);
    divElemento.appendChild(titolo);
    divElemento.appendChild(description);    
 
    const bottoneDescrizione = document.createElement("button");
    bottoneDescrizione.classList.add("pulsante");
    divElemento.appendChild(bottoneDescrizione);
    bottoneDescrizione.textContent=("Maggiori dettagli");
    bottoneDescrizione.addEventListener('click',scopriDettagli);

    const carrello = document.createElement("button");
    carrello.classList.add("carrello");
    divElemento.appendChild(carrello);
    carrello.textContent="Aggiungi al carrello";
    carrello.addEventListener('click', aggiungiCarrello);

    divRiga.appendChild(divElemento);
    sezione.appendChild(divRiga);
 
}
 
function aggiungiCarrello(event){
    const comprato = event.currentTarget.parentNode.parentNode;

    const div_1 = document.querySelector("#carrello #negozio");

    const new_div_1 = document.createElement('div');
    new_div_1.classList.add("nuovo_div_1");
    const div_ordina = document.createElement('div');
    div_ordina.classList.add("div_ordina");
    const nuovonome = document.createElement('h3');
    const new_img = document.createElement('img');
    new_img.classList.add("img_prenotazione");
     
    
    new_img.src = comprato.querySelector('img').src;
    nuovonome.textContent = comprato.querySelector('h3').textContent;

    const boxes = document.querySelectorAll("#carrello #negozio div");   

    
        div_1.appendChild(new_div_1);
        new_div_1.appendChild(div_ordina);
        div_ordina.appendChild(nuovonome);
        div_ordina.appendChild(new_img);

        const bottone_rimuovi = document.createElement("button");
        bottone_rimuovi.classList.add("rimuovi");
        bottone_rimuovi.textContent = "Rimuovi dal carrello";
        bottone_rimuovi.addEventListener('click', rimuoviCarrello);

        div_ordina.appendChild(bottone_rimuovi);

    
}

function rimuoviCarrello(event){
    const comprato = event.currentTarget.parentNode.parentNode;    
    comprato.innerHTML="";
}

function scopriDettagli(e) {
    const divPadre =e.target.parentNode;
    const descr = divPadre.getElementsByTagName("p")[0];
    const puls = divPadre.getElementsByTagName("button")[0];
    descr.classList.toggle("hidden"); 
    change = !change;
    if (change){
        puls.textContent="Nascondi";
    } else {
        puls.textContent="Mostra dettagli";
    }
}

function ricercaTesto(){
    const barra_di_ricerca = document.querySelector("#myInput");
    const testo = barra_di_ricerca.value.toLowerCase();
    const sezione_ricerca = document.querySelector(".negozio").querySelectorAll(".divRiga");    
    for (let elem of sezione_ricerca){
        if(elem.querySelector("h3").textContent.toLowerCase().includes(testo)){
            elem.classList.remove("hidden");
    }
    else {
        elem.classList.add("hidden");
    }
}
}

let change=false;
for(let elemento of shop){
    let sezione = undefined;
    sezione = document.querySelector("div.negozio")
    caricamentodinamico(sezione,elemento);
}