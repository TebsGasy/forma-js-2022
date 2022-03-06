console.log("Nombre de 1 à 10 :");
for(let i=1; i<=10; i++) {
        console.log(i);
}
console.log("\n\n");

console.log("Nombre de 10 à 1 :");
for(let i=10; i>=1; i--) {
        console.log(i);  
}
console.log("\n\n");

console.log("Nombre de 1 à 10 où on affiche juste ceux divisible par 2 utilisant modulo :");
for(let i=1; i<=10; i++) {
    if(i%2==0){
        console.log(i);
    }   
}
console.log("\n\n");

console.log("Nombre de 1 à 10 où on affiche juste ceux divisible par 2 sans utiliser modulo :");
for(let i=1; i<=10; i++) {
    if(i - 2 * parseInt(i / 2) === 0){
        console.log(i);
    }   
}
console.log("\n\n");

console.log("Nombre de 1 à 10 où on affiche juste ceux qui sont inférieurs à 5 :");
for(let i=1; i<=10; i++) {
    if(i<5){
        console.log(i);
    }   
}
console.log("\n\n");

console.log("Autre méthode - Nombre de 1 à 10 où on affiche juste ceux qui sont inférieurs à 5 :");
for(let i=1; i<=10; i++) {
    console.log(i);
    if(i>=4){
        break;
    }   
}
console.log("\n\n");

console.log("Factoriel de 5 :");
let result=1;
for(let i=5; i>1; i--) {
    result*=i;  
}
console.log(result);