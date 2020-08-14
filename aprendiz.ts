import { Curso } from './curso.js'

export enum NivelEducativo {
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado"
}


export class Aprendiz {

  
    constructor(public nombres: string, public apellidos: string, public avatar: string, public edad: number,public nivelEducativo: NivelEducativo, public cursos: Curso[]){
       
    }

    public darCursosCertificados():number{
        let total_cursos_ap = 0;
        for (let curso of this.cursos)
        {
            if(curso.certificado){
                total_cursos_ap += 1;
            }                  
        }
        return total_cursos_ap;
    }

}
