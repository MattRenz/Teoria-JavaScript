

    // OGGETTI JS (tipo di dato)

// Anche gli oggetti sono variabili. Ma gli oggetti possono contenere molti valori.

// Questo codice assegna molti valori (Fiat, 500, bianco) ad una variabile chiamata auto:

const car = {type:"Fiat", model:"500", color:"white"};

// I valori sono scritti come coppie nome:valore (nome e valore separati da due punti).
// È pratica comune dichiarare oggetti con la parola chiave const .


// Per facilitare la scrittura di un oggetto si può estendere su più righe

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };


    // ACCEDERE AGLI OGG.:

    // objectName.propertyName
    console.log(person.firstName) // <John>

    // objectName["propertyName"]
    console.log(person["lastName"]) // <Doe>

    // Modificare la proprietà 
    person['lastName'] = "Terpis" // Modificato da "Doe" a "Terpis"




    // METODI OGG.

    const person_2 = {
        firstName: "Mari",
        lastName : "Doris",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName; // this fa riferimento all'oggetto persona
        }
      };


    // ACCEDERE AI METODI OGG.

    // objectName.methodName()
    console.log(person_2.fullName()) // <Mari Doris>
    

    


    



