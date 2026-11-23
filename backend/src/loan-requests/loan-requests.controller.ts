import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { requestValidationPipe } from "../common/request-validation.pipe";
import { CreateLoanRequestDto } from "./dto/create-loan-request.dto";
import { LoanRequestsService } from "./loan-requests.service";

@UseGuards(AuthGuard("jwt"))
@Controller("loan-requests")
export class LoanRequestsController {
  constructor(private readonly service: LoanRequestsService) {}

  @Get()
  findAll() {
    // TODO BACK-A: recibir la consulta con @Query, validarla con el pipe y pasar el filtro.
    return this.service.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body(requestValidationPipe) dto: CreateLoanRequestDto) {
    return this.service.create(dto);
  }
}

