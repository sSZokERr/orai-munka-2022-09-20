let a = [];

export function teszt(max, min){
    return Math.floor(Math.random() * (max - min) + min)
}

export function hozzaad(b){
    if(b >= 0){
         a.push(b)
         console.log(a)
    }else{
        console.log("Kisebb mint 0")}
}

export function atlag(){
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
       sum += a[i]
    }
    return Math.round(sum / a.length)
}


