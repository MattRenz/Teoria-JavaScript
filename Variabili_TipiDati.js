
        // VARIABILI

/* 
Una varaibile in JavaScript come negli altri linguaggi è un contenitore
che tiene traccia di un valore o di un riferimento a un valore

Le variabili in JavaScript sono var, let, const

VAR: (SI ri-declarate, SI ri-assegnate.)

    hanno uno scope di funzione o di script, il che significa che sono 
    accessibili solo all'interno della funzione o dello script in cui 
    sono state dichiarate. Le variabili dichiarate con var possono 
    essere ri-declarate e ri-assegnate.


LET: (NO ri-declarate, SI ri-assegnate.)

    Le variabili dichiarate con let sono accessibili solo all'interno
    del blocco di codice in cui sono state dichiarate. Rispetto a var, 
    le variabili dichiarate con let non possono essere ri-declarate nello 
    stesso scope, ma possono essere ri-assegnate.

CONST: (NO ri-declarate, NO ri-assegnate.)

    Le variabili dichiarate con const sono simili alle variabili dichiarate 
    con let, ma non possono essere ri-assegnate una volta inizializzate. 
    Tuttavia, le variabili dichiarate con const devono essere inizializzate 
    con un valore e questo valore non può essere modificato successivamente.
*/

var numero = 10;

let saluto = "Ciao"; 

const numero_flaot = 3.45;


        // TIPI DI DATI

// Le variabili possono contenere diversi tipi di dati: 

var a = 10;     // Numero intero
var b = "hello"; // Stringa
var c = true;    // Booleano
var d = [1, 2, 3]; // Array
var e = { nome: "John", età: 30 }; // Oggetto
var f = null // assenza di un valore 
var g = undefined // non esiste la variabile, non inazializzata

// per accedere ad una variabile e quindi stamparla è possibile fare:

    console.log(d) // <[1, 2, 3]>


// Sostanzialmente JavaScript ha 8 tipi di dati

    /*
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object
    */

    