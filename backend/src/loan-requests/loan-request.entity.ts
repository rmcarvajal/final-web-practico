import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ToolEntity } from "./tool.entity";

@Entity("loan_requests")
export class LoanRequestEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 120 })
  purpose!: string;

  @Column({ type: "integer" })
  days!: number;

  @ManyToOne(() => ToolEntity, { nullable: false })
  @JoinColumn({ name: "tool_id" })
  tool!: ToolEntity;
}

