import { Aprendiz, NivelEducativo } from './aprendiz.js';

export const ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO);

let aprendizTbody: HTMLElement = document.getElementById('aprendiz')!;

mostrarDatosAprendiz(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void{
    let tbodyElemento = document.createElement("tbody");
    tbodyElemento.innerHTML = `
    <tr>
    <img src="./${aprendiz.avatar}" height="100" alt="Avatar">
    </tr>
    <tr>
    <td>Nombres:</td>
    <td>${aprendiz.nombres}</td>
    </tr>
    <tr>
    <td>Apellidos:</td>
    <td>${aprendiz.apellidos}</td>
    </tr>
    <tr>
    <td>Nivel Educativo:</td>
    <td>${aprendiz.nivelEducativo}</td>
    </tr>
    <tr>
    <td>Edad:</td>
    <td>${aprendiz.edad}</td>
    </tr>`
    aprendizTbody.appendChild(tbodyElemento); 

}
