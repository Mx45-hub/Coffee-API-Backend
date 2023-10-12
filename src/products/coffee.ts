export enum Flavour {
    Vanilla,
    Caramel,
    Hazelnut,
    Chocolate,
    Peppermint,
    Almond,
  }
  
  export enum Dietary {
    Regular,
    Decaf,
    SugarFree,
    DairyFree,
  }
  
  export enum Size {
    SHORT,
    TALL,
    GRANDE,
    VENTI,
  }
  
  export enum Strength {
    Strong,
    Mild,
    ExtraShot,
  }


  export class Coffee {
    constructor(
      public id: number,
      public name: string,
      public size: Size,
      public flavour: Flavour,
      public dietary: Dietary,
      public strength: Strength,
      public imageUrl: string ,
    ) {}
  }
  



