import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tools")
export class ToolEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 80 })
  name!: string;

  @Column({ type: "integer" })
  maxLoanDays!: number;
}

