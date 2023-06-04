function temparatureConversion(){
    let celcius     =   document.getElementById("c").value;
    let farenheit   =   (celcius * 9/5) + 32;
    document.getElementById("f").value  =   farenheit;
}

function weightConversion(){
    let kilograms   =   document.getElementById("k").value;
    let pounds      =   kilograms * 2.2;
    document.getElementById("p").value  =   pounds;
}

function distanceConversion() {
    let kilometers  =   document.getElementById("km").value;
    let miles       =   kilometers * 0.62137;
    document.getElementById("m").value  =   miles;
}