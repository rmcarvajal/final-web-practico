import { Transform } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from "class-validator";

export class CreateLoanRequestDto {
  @Transform(({ value }) => typeof value === "string" ? value.trim() : value)
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  purpose!: string;

  @IsInt()
  @Min(1)
  days!: number;

  @IsInt()
  @Min(1)
  toolId!: number;
}

