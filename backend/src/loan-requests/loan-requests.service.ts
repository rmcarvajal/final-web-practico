import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateLoanRequestDto } from "./dto/create-loan-request.dto";
import { LoanRequestEntity } from "./loan-request.entity";
import { ToolEntity } from "./tool.entity";
import { ListLoanRequestsDto } from "./dto/list-loan-requests.dto";

@Injectable()
export class LoanRequestsService {
  constructor(
    @InjectRepository(LoanRequestEntity) private readonly requests: Repository<LoanRequestEntity>,
    @InjectRepository(ToolEntity) private readonly tools: Repository<ToolEntity>,
  ) {}

  findAll(query: ListLoanRequestsDto) {
    // TODO BACK-A: recibir el filtro y aplicarlo en la consulta del repositorio.
    return this.requests.find({ 
      where: query.toolId ? { id: query.toolId } : {},
      relations: { tool: true }, order: { id: "ASC" } });
  }

  async findOne(id: number) {
    const request = await this.requests.findOne({ where: { id }, relations: { tool: true } });
    if (!request) throw new NotFoundException("Loan request not found.");
    return request;
  }

  async create(dto: CreateLoanRequestDto) {
    const tool = await this.tools.findOneBy({ id: dto.toolId });
    if (!tool) throw new NotFoundException("Tool not found.");

    // TODO BACK-B: aplicar la regla de duración antes de guardar la solicitud.

    const request = this.requests.create({ purpose: dto.purpose, days: dto.days, tool });
    return this.requests.save(request);
  }
}

