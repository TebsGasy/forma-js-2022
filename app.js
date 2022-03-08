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
console.log("\n\n");

/* Excercice:

Supposons texte iray "Techzara",
misy text iray atao hoe "Javascript" ohatra.
Atambatra izy roa ireo, zany hoe "TechzaraJavascript" ary
misy nombre n iray, manambara ny hiverenany Javascript aorinan'ilay Techzara.
Raha n < 0 dia ilay Techzara indray no multipliena par n

Ex:
n = 2 =>> TechzaraJavascriptJavascript
n = 1 =>> TechzaraJavascript
n = -2 =>> TechzaraTechzaraJavascript */


const text1 = "Techzara";
const text2 = "Javascript";
let stringResult = "";

let number=prompt("Veuillez entrer un nombre s'il vous plaît ?");;

if(number==0) {
    stringResult=text1+text2;
    console.log(stringResult);
} else if(number>0) {
    let tmp="";
    for(let i=0; i<number; i++) {
        tmp+=text2;
    }
    stringResult=text1+tmp;
    console.log(stringResult);
} else if(number<0) {
    let tmp="";
    for(let i=number; i<0 ; i++) {
        tmp+=text1;
    }
    stringResult=tmp+text2;
    console.log(stringResult);
}
else {
    console.log("Veuillez entrer un nombre");
}