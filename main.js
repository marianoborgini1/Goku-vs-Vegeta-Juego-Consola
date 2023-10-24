let vidaGoku = 100
let vidaVegeta = 100

console.log("---------VIDA---------");
console.log("Vida de Goku: 100");
console.log("Vida de Vegeta: 100");

let round = 1

function mostrarVida(){
console.log("---------VIDA RESTANTE---------");
console.log("Vida de Goku: " + (vidaGoku));
console.log("Vida de Vegeta: " + (vidaVegeta));
}

while(vidaGoku > 0 && vidaVegeta > 0){

console.log("--------ROUND " + round + "--------");

console.log("---------ATAQUES----------");
let golpeGoku = parseInt(Math.random()*90);
let golpeVegeta = parseInt(Math.random()*90);
console.log("Golpe de Goku: " + (golpeGoku));
console.log("Golpe de Vegeta: " + (golpeVegeta));

if(golpeGoku > 59){
    console.log("--------SUPER ATAQUES--------");
    console.log("SUPER ATAQUE DE GOKU");
}else if(golpeVegeta > 59){
    console.log("--------SUPER ATAQUES--------");
    console.log("SUPER ATAQUE DE VEGETA");
}else if(golpeGoku < 15){
    console.log("-------CANSANCIO-------");
    console.log("GOKU ESTA MUY CANSADO");
}else if(golpeVegeta < 15){
    console.log("-------CANSANCIO---------");
    console.log("VEGETA ESTA MUY CANSADO");
}

vidaGoku -= golpeVegeta;
vidaVegeta -= golpeGoku;
mostrarVida();

round = round + 1

}

if(vidaGoku <= 0){
    console.log("------GANADOR------");
    console.log("VEGETA A DERROTADO A GOKU");
}else if(vidaVegeta <= 0){
    console.log("------GANADOR------");
    console.log("GOKU A DERROTADO A VEGETA");
}






























