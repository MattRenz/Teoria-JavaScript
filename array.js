
    // ARRAY

const array_numeri = [20, 43, 5, 9]
const array_stringhe = ['apple', 'banana', 'orange'];
const array_misto = [1, 'apple', true, { name: 'John' }];

// Accaedere ad un elemento di un array:

    console.log(array_numeri[0]) // <20>

// Modificare un elemento di un array

    array_numeri[2] = 15;

// Lunghezza Array

    console.log(array_numeri.length) // lunghezza array (4)


    // METODI ARRAY


    array_numeri.push(56) //  Aggiunge uno o più elementi alla fine dell'array.

    array_numeri.pop() // Rimuove l'ultimo elemento dall'array e lo restituisce.v

    array_numeri.shift() // Rimuove il primo elemento dall'array e lo restituisce.

    array_numeri.unshift() // Aggiunge uno o più elementi all'inizio dell'array.

    array_numeri.splice() // Modifica l'array rimuovendo, sostituendo o aggiungendo elementi.

    array_numeri.concat() //  Combina due o più array creando un nuovo array.

    array_numeri.slice() //  Restituisce una copia di una porzione dell'array.

    array_numeri.join() //  Unisce tutti gli elementi dell'array in una stringa.

    array_numeri.indexOf() //  Restituisce l'indice del primo elemento corrispondente trovato nell'array.

    array_numeri.includes() // Verifica se un elemento è presente nell'array.

    array_numeri.forEach() // Esegue una funzione per ogni elemento dell'array. (vedere in seguito)

    array_numeri.map() // Crea un nuovo array con i risultati dell'applicazione di una funzione su ogni elemento dell'array (vedere in seguito)

    array_numeri.filter() // Crea un nuovo array con tutti gli elementi che soddisfano una determinata condizione.

    array_numeri.reduce() // Applica una funzione riduttore su ogni elemento dell'array, restituendo un singolo valore accumulato.

    array_numeri.sort() // Rioridina in modo casuale l'Array

    array_misto.reverse() // inverte gli elementi di un array

    Math.max.apply(null, array_numeri) // massimo in un array

    Math.min.apply(null, array_numeri) // minimo in un array


// --------------------------------------------------------------

        // forEach()

        array_stringhe.forEach(element => console.log(element)); // output: <'apple' \n 'banana' \n orange'>
                                                                        
        // itera ogni elemento di un array (buon sostituto di for e while)

// --------------------------------------------------------------

        // map()

        let numeri = [1,2,3,4];

        let numeri_add_uno = numeri.map((item) => item+1)

        // Array con aggiunta di 1 ad ogni elemento
        console.log(numeri_add_uno) // output: <[ 2, 3, 4, 5 ]>

        // Array originale 
        console.log(numeri) // output: <[ 1, 2, 3, 4 ]>

        // Esegue una funzione su ogni elemento dell'array

// --------------------------------------------------------------

        // filter() 

        let numeri_2 = [1,2,3,4];

        let pari = numeri_2.filter(item => item % 2 == 0);

        // Stampo funzione modificata
        console.log(pari) // output: <[ 2, 4 ]>
       
        // Stampo array originale
        console.log(numeri_2) // output: < [ 1, 2, 3, 4 ]> 

        // Restituisce un nuovo array con la condizione che gli abbiamo passato (in questo caso prende solo i nuneri pari)

// --------------------------------------------------------------

        // every()

        let eta = [23,22,19,20,21,20]
        let controllo = eta.every(maggiore_eta)

        function maggiore_eta(value, index, array){ // [bolleano <true>]
            return value > 18;
        } 

        if (controllo){
            console.log("Tutti sopra 18")
        } else {
            console.log("Non tutti sopra 18")
        }
        
    
// --------------------------------------------------------------


        // reduce()

        let numeri_3 = [1,2,3,4];

        let somma = numeri_3.reduce((accumulator, n) => accumulator + n , 0);

        /*
        accumlator tiene traccia del risultato parziale o accumulato della riduzione, 
        number rappresenta l'elemento corrente che viene combinato con l'accumulator
        per ottenere un nuovo valore parziale. Alla fine dell'iterazione, il valore finale dell'accumulator
        rappresenta il risultato finale della riduzione. 
        */

        console.log(somma);


        // media con reduce

        let voti = [6,7,3,5]

        let media_voti = voti.reduce((acc, n, i, array) => {
            
            acc = acc + n;

            if (i == array.length - 1){
                return acc / array.length
            } else {
                return acc;
            }

        }, 0)

    console.log("Voti studente " + voti)
    console.log("Media studente " + media_voti)
