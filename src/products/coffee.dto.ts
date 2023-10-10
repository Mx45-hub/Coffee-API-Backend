import { Size, Flavour, Dietary, Strength } from "./coffee";

export class coffeedto {
    id: number;
    name: string;
    size: Size;       // Use Size enum
    flavour: Flavour; // Use Flavour enum
    dietary: Dietary; // Use Dietary enum
    strength: Strength; // Use Strength enum
  }