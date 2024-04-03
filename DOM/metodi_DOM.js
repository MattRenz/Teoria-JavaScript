

    // getElementById() [Puntato tramite ID]
    var id = document.getElementById("idElemento"); 
    // Restituisce un riferimento a un elemento HTML in base al suo attributo id.

// -------------------------------------------

    // getElementsByClassName() [Puntato tramite classe]
    var classe = document.getElementsByClassName("nomeClasse");
    // Restituisce una collezione di elementi HTML che hanno una classe specifica.

// -------------------------------------------

    // getElementsByTagName() [Puntato tramite tag] <p></p>
    var tag = document.getElementsByTagName("tag");
    // Restituisce una collezione di elementi HTML che hanno un determinato nome di tag.

// -------------------------------------------

    // querySelector() 
    var elemento = document.querySelector("selettoreCSS");
    // Questo metodo restituisce il primo elemento HTML che corrisponde a un selettore CSS specificato.

// -------------------------------------------

    // querySelectorAll()
    var elementi = document.querySelectorAll("selettoreCSS");
    // Questo metodo restituisce tutti gli elementi HTML che corrispondono a un selettore CSS specificato come NodeList.

// -------------------------------------------

    // parentNode() 
    var genitore = elemento.parentNode;
    // Questo metodo restituisce il genitore diretto di un elemento HTML.

// -------------------------------------------

    // children()
    var figli = elemento.children;
    // Restituisce una collezione di tutti gli elementi figlio di un elemento HTML.

// -------------------------------------------

    // getAttribute(), setAttribute()
    var valoreAttributo = elemento.getAttribute("nomeAttributo");
    elemento.setAttribute("nomeAttributo", "nuovoValore");
    // Questi metodi consentono di ottenere o impostare il valore di un attributo specifico di un elemento HTML.

    // es: id = "prova" (get) setAttribute("id", "newId") (set)


// -------------------------------------------

    // .addEventListener(event, callback);

    /*
        Consente di associare una funzione, nota come "gestore degli eventi", 
        a un determinato evento su un elemento HTML. Questo metodo consente 
        di ascoltare e rispondere agli eventi generati dagli utenti o dal browser.
    */

    elemento.addEventListener("click", "funzione")

// -------------------------------------------
       
    classe.classList.add('nomeClasse'); // Aggiungi una classe ad un elemento
    classe.classList.remove('nomeClasse'); // Rimuove una classe da un elemento

// -------------------------------------------

    tag.textContent // ottiene il testo contenuto all'interno dell'elemento
    tag.textContent // Modificare il testo all'interno dell'elemento

// -------------------------------------------

    tag.innerHTML // restituisce il contenuto HTML all'interno dell'elemento
    id.innerHTML = '<h2>Nuovo titolo</h2><p>Nuovo paragrafo</p>'; // modificare il contenuto HTML di un elemento

// -------------------------------------------

    id.createElement("li") // creare elementi

// -------------------------------------------

    id.appendChild() // aggiunge un nuovo nodo come figlio di un altro nodo esistente all'interno di un documento HTML.
    // esempio: <div><div> appendChild("p") = <div><p></p></div>