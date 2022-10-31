export class persona{
    id?: number;
    nombre: string;
    apellido:string;
    img:string;
    informacion:string;
    perfil:string;

    constructor(nombre:string , apellido:string, img:string, informacion:string, perfil:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.informacion = informacion;
        this.perfil = perfil;
    }
}