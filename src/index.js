import { hozzaad, atlag } from "./lista.js"

let gomb = document.getElementById("gomb")
gomb.addEventListener("click", function(){
    let szam1 = document.getElementById("szam1")
    let szam2 = document.getElementById("szam2")
    hozzaad(teszt(parseInt(szaam1), parseInt(szam2)))
    alert(atlag())
});