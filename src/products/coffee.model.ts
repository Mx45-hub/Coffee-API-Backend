

export class Product{
    id: number;
    name: string;
    size: number;
    flavour: string;
    dietary: string;
    strength: string
    imageUrl: string;


    constructor( id: number, name: string, size: number, flavour: string, dietary: string, strength: string, imageUrl: string,

      ) 
      {
        this.id = id;
        this.name = name;
        this.size = size;
        this.flavour = flavour;
        this.dietary = dietary
        this.strength = strength;
        this.imageUrl = imageUrl;


      }

}