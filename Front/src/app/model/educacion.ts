export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    periodoF: Date;
    periodoI: Date;

    constructor(nombreE: string, descripcionE:string, periodoF:Date, periodoI:Date){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.periodoF = periodoF;
        this.periodoI = periodoI;
    }
}
