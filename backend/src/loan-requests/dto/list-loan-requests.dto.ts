import { Type } from "class-transformer";
import { IsOptional, Min, IsInt } from "class-validator";

export class ListLoanRequestsDto {
  // TODO BACK-A: agregar las validaciones del filtro opcional indicado en el enunciado.
  // La conversión de la consulta a número ya está preparada.
  @Type(() => Number)
  @IsOptional()
  @Min(1)
  @IsInt()
  toolId?: number;
}

