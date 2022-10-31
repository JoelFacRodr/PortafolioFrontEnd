export class Experiencia {
    id? :number;
    nombreE : string;
    descripcionE : string;
    tituloP: string;
    periodoF: Date;
    periodoI: Date;



    constructor(nombreE:string, descripcionE:string,periodoF:Date, periodoI:Date, tituloP:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.periodoF = periodoF;
        this.periodoI = periodoI;
        this.tituloP = tituloP;
    }
}
