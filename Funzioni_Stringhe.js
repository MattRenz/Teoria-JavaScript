
    const text ="Studio JavaScript"
    const num = 5;

    // length

    let length = text.length; // lungehzza stringa

    // charAt(index)

    let sing_char = text.charAt(1); //  restituisce il carattere nella stringa corrispondente all'indice specificato.

    // toLowerCase()
    console.log(text.toLowerCase()); // Output: "studio javascript"

    // toUpperCase()
    console.log(text.toUpperCase()); // Output: "STUDIO JAVASCRIPT"

    // split()
    const array_text = text.split(" ") // suddivide una stringa in un array di sottostringhe basato sul separatore specificato

    // replace()
    console.log(text.replace('Studio', 'Imparo')); // Sostituisce una stringa con un'altra

    // trim()
    text.trim() // rimuove tutti gli spazi bianchi all'inizio e alla fine della strnga

    // toString()
    num.toString() // restituisce un numero come stringa


        // METODI DI RICERCA STRINGA

        // indexOf()
        text.indexOf("JavaScript") // restituisce l' indice (posizione) della prima occorrenza di una stringa in una stringa:

        // search() 
        text.search("JavaScript") // cerca una stringa per una stringa (o un'espressione regolare) e restituisce la posizione della corrispondenza:

        // includes() [boolean]
        text.includes("Java") // restituisce true se una stringa contiene un valore specificato. <false>

        // startWith() [boolean]
        text.startsWith("Imparo") // restituisce true se una stringa inizia con un valore specificato. <true>

        // endWith() [boolean]
        text.endsWith("JavaScript") // restituisce true se una stringa termina con un valore specificato. <true>



    // MODI DI SCRVIERE STRINGHE (String.format java)

    let firstName = "John";
    let lastName = "Doe";
    let stampa = `Welcome ${firstName}, ${lastName}`; // output: <Welocome John, Doe>



 


    
    
    


