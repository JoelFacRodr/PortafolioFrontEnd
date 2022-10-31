export class Proyects {    
        id?: number;
        nombreP: string;
        descriptionP: string;
        periodoF: Date;
        periodoI: Date;
        link: string
    
        constructor(nombreP: string, descriptionP:string, periodoF:Date, periodoI:Date, link:string){
            this.nombreP = nombreP;
            this.descriptionP = descriptionP;
            this.periodoF = periodoF;
            this.periodoI = periodoI;
            this.link = link;
        }    
}
