"use strict";
let Bolivar = 11;
let Tigre = 11;
let messi = 1;
let JuegaMessi = true;
let palabras = "Algo tenia que venir aqui";
function jugar(equipo1, equipo2, JuegaMessi) {
    let motivo = "";
    if (JuegaMessi) {
        equipo1 += messi;
        motivo = "porque juega messi";
    }
    if (equipo1 > equipo2) {
        console.log(`Gana Bolivar ${motivo}`);
    }
    if (equipo1 == equipo2) {
        console.log(`Empatan`);
    }
    if (equipo1 < equipo2) {
        console.log(`Gana Tigre`);
    }
}
jugar(Bolivar, Tigre, JuegaMessi);
