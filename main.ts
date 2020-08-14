import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';

var cursos = [new Curso("Prácticas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingeniería de software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("Principios de diseño y arquitectura", 30, 75, true, 2020)];
const ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);

let aprendizTbody: HTMLElement = document.getElementById('aprendiz')!;
let cursosTbody: HTMLElement = document.getElementById('cursos')!;
let estadisticasTbody: HTMLElement = document.getElementById('estadisticas')!;

mostrarDatosAprendiz(ap);
mostrarCursosAprendiz(ap);
mostrarEstadisticas(ap);

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

function mostrarCursosAprendiz(aprendiz: Aprendiz): void{
    let cursos: Curso[] = aprendiz.cursos;
    let tbodyElement = document.createElement("tbody");
    for(let index = 0; index < cursos.length; index++){
        let curso: Curso = cursos[index];
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
                               <td>${curso.horas}</td>
                               <td>${curso.calificacion}</td>
                               <td>${curso.certificado}</td>
                               <td>${curso.anio}</td>`;
        tbodyElement.appendChild(trElement);
    }
    cursosTbody.appendChild(tbodyElement);
}

function mostrarEstadisticas(ap: Aprendiz): void{
    let promedio = ap.darCursosCertificados();
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos certificados:</b></td>
                            <td>${promedio}</td>`;
    estadisticasTbody.appendChild(trElement);
                
}