import { Type } from "class-transformer";

export class ListLoanRequestsDto {
  // TODO BACK-A: agregar las validaciones del filtro opcional indicado en el enunciado.
  // La conversión de la consulta a número ya está preparada.
  @Type(() => Number)
  toolId?: number;
}

