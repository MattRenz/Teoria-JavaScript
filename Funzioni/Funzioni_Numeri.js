
    // Conversione str --> int, float

    // Funzione Number() 
    let stringa = "4";
    let stringa_conv_num = Number(stringa) // Ora 4 sarà un numero

    // isInteger()
    Number.isInteger(stringa) // restituisce truese l'argomento è un numero intero. <false>

    // Funzione parseInt()
    var num = parseInt("20") // Converte "20" in un numero intero

    // Funzione parseFloat()
    var floatNum = parseFloat("23.5") // Converte "23.5" in un numero float

// ----------------------------------------------------------------------------------

    // FUNZIONE MATH

    // Math.round() [arrotondamento]
    var roundNum = Math.round(4.7) // Arrotonda 4.7 all'intero più vicino (5)

    // Math.random() [numero causale]
    var randomNum = Math.random() // Restituisce un numero casuale tra 0 e 1

    // Math.ceil() [arrotondamento >]
    var roundCeil = Math.ceil(3.6) // Arrotonda verso l'alto all'intero più vicino

    // Math.floor() [arrotondamento <]
    var roundFloor = Math.floor(3.6) // Arrotonda verso il basso all'intero più vicino

    // Math.max() [massimo, tra numeri forniti come argomenti]
    var x = 10;
    var y = 7;
    var max_value = Math.max(x,y); // Restituisce il numero più grande tra 10 e 7 <10>

    // Math.min() [minimo, tra numeri forniti come argomenti]
    var x = 10;
    var y = 7;
    var min_value = Math.min(x,y); // Restituisce il numero più piccolo tra 10 e 7 <10>

    // Math.pow() [potenza]
    var x = 4;
    var y = 2;
    var potenza = Math.pow(x,y) // restituisce il risultato di 4^2

    // Math.sqrt() [radice quadrata]
    var x = 16;
    var radice_quadrata = Math.sqrt(x);


