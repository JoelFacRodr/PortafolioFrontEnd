export class Skill {
    id?: number;
    nombreSkill: string;
    porcSkill: number;

    constructor(nombreSkill:string, porcSkill:number){
        this.nombreSkill = nombreSkill;
        this.porcSkill = porcSkill;
    }
}
