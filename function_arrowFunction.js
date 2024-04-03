
    
    // FUNZIONI JAVASCRPT

    /* 
        Una funzione JavaScript è un blocco di codice progettato per eseguire una particolare attività.
        Una funzione JavaScript viene eseguita quando "qualcosa" la richiama (la chiama).
    */



// Funzione che esegue la somma di 2 numeri
function FunzioneSomma(a, b){

    return a + b;
}

// Richiamo funzione: 

    console.log(FunzioneSomma(2, 5)) // output: 7

    let x = FunzioneSomma(2,2)
    console.log(x + 4) //x = 4 output: 8



// ----------------------------------------------------------

        // ARROW FUNCTION

    /* 
    Le arrow function (funzioni freccia) sono una sintassi più concisa 
    e compatta per definire funzioni in JavaScript.

    Più utilizzate
    */

    let cubo = (x) => {     // Tipo varaibile + nomeFunzione + (parametri) => {istruzione + return}
        return x * x * x;
    }


        // In caso sono Funzioni piccoli possiamo anche non mettere return (metodo più veloce)

        let cubo_2 = (x) => x * x * x;  //  Tipo varaibile + nomeFunzione + (parametri) => istruzione 
        

    // this

    /* 
    Le arrow function mantengono il legame del contesto (this) dell'ambiente circostante.
    Ciò significa che il valore di this all'interno di una arrow function corrisponde al 
    valore di this nel contesto esterno in cui è stata definita.
    */

    let divisione = (a,b) => {

        this.a = a;
        this.b = b;

        return a / b;
    }  

// ----------------------------------------------------------

    // Funzioni callback 

    /* 
        Le funzioni di callback in JavaScript sono funzioni che vengono passate come 
        argomenti ad altre funzioni e vengono invocate all'interno di queste funzioni 
        per eseguire un'azione specifica in un determinato momento. Le funzioni di callback 
        sono un aspetto fondamentale della programmazione asincrona e consentono di gestire eventi, 
        richieste di rete, animazioni e molto altro.
    */


    function calculate(a, b, callback) {
        const result = a + b;
         callback(result);
    }
    
    function displayResult(result) {
        console.log(`Il risultato è: ${result}`);
        }
        
    calculate(5, 3, displayResult);
        
    
    