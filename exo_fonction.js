"use strict";

/**         Fonction
 * 
 * 
 * Declarer trois variables a="jean" et b="paul" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */

let aQ="jean";
let bBis="Paul";
let result=checkName(aQ,bBis)

function checkName(name1, name2){
    return name1===name2
}
console.log(result);