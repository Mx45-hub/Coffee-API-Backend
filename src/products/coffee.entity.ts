import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class coffeeentity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 30 })
    name: string;
  
    @Column({ type: 'varchar', length: 15 })
    size: string;
  
    @Column({ type: 'varchar', length: 40 })
    flavour: string;
  
    @Column({ type: 'varchar' })
    dietary: string;
  
    @Column({ type: 'varchar' })
    strength: string;

    @Column({ type: 'varchar' })
    imageurl: string;


}
