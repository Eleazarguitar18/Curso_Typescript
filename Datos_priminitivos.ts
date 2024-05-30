let Bolivar: number = 11;
let Tigre: number = 11;
let messi: number = 1;
let JuegaMessi: boolean = true;

let palabras: string = "Algo tenia que venir aqui";

function jugar(equipo1: number, equipo2: number, JuegaMessi: boolean) {
  let motivo: string = "";
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
