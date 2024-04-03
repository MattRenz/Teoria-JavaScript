
// IF ELSE SWITCH

let eta = 18;

if (eta >= 18){
    console.log("sei maggiorenne")
} else {
    console.log("Sei minorenne")
}

    // oppure 

    console.log(eta >= 18 ? 'sei maggiorenne' : 'sei minorenne')

    //         condizioene    caso true         caso false


switch (eta){

    case 18: 
        console.log("Maggiorenne")
        break;

    case 17: 
        console.log("Minorenne")
        break;

    case 50: 
        console.log("Hai 50 anni")
        break;

    default: 
        console.log("Eta non conosciuta")

}


/* 
    // or logico 

    && and logico 

    ! not logico 
*/