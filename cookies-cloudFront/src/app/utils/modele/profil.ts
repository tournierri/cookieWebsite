export interface IProfil {
    _id?:number | string;
    nom:string;
    prenom:string;
    age?:number;
    genre?:string;
    panierEnCours:string;
    panier:string;
    photoProfil:string;
}