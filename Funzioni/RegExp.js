/*
Sono un potente strumento utilizzato nella programmazione per la gestione di pattern di testo. 
Le RegExp consentono di trovare, manipolare e analizzare stringhe di testo in modo flessibile 
ed efficiente. (import re in python)
*/

// 2 Modi per usarlo

// Usando il costruttore RegExp
const regex1 = new RegExp("pattern");
const regex2 = new RegExp("pattern", "flags");

// Utilizzando la sintassi letterale
const regex3 = /pattern/;
const regex4 = /pattern/flags;


// "flags" sono le opzioni facoltative per modificare il comportamento della RegExp. 
// Le opzioni possono includere:

    /*
        i: Effettua una ricerca case-insensitive (ignora maiuscole/minuscole).
        g: Effettua una ricerca globale, trovando tutte le corrispondenze anziché solo la prima.
        m: Effettua una ricerca multilinea, consentendo di corrispondere anche a inizio e fine riga (^ e $) all'interno di un testo multiriga.
    */

// Ci sono diversi metodi: 

    /*
    
    test(string): Verifica se la RegExp corrisponde a una parte o all'intera stringa 
    e restituisce un valore booleano.

    exec(string): Restituisce un array contenente informazioni sulla prima 
    corrispondenza trovata nella stringa o null se non viene trovata alcuna corrispondenza.

    match(regex): Restituisce un array contenente tutte le corrispondenze 
    trovate nella stringa.

    replace(regex, replacement): Sostituisce le corrispondenze trovate nella 
    stringa con un testo di sostituzione specificato.

    split(regex): Divide la stringa in un array di sottostringhe utilizzando 
    la RegExp come separatore.
    
    */

    const regex = /ciao/g;
    const str = "Ciao a tutti! Ciao mondo!";
    
    console.log(regex.test(str)); // Output: true
    console.log(str.match(regex)); // Output: ["Ciao", "Ciao"]
    console.log(str.replace(regex, "Hello")); // Output: "Hello a tutti! Hello mondo!"
    console.log(str.split(regex)); // Output: ["", " a tutti! ", " mondo!"]
    