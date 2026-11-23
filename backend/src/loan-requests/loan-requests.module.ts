import { Controller, Get, Module, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthModule } from "../auth/auth.module";
import { LoanRequestEntity } from "./loan-request.entity";
import { LoanRequestsController } from "./loan-requests.controller";
import { LoanRequestsService } from "./loan-requests.service";
import { SeedService } from "./seed.service";
import { ToolEntity } from "./tool.entity";

@UseGuards(AuthGuard("jwt"))
@Controller("tools")
class ToolsController {
  constructor(@InjectRepository(ToolEntity) private readonly tools: Repository<ToolEntity>) {}

  @Get()
  findAll() {
    return this.tools.find({ order: { id: "ASC" } });
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([ToolEntity, LoanRequestEntity]), AuthModule],
  controllers: [LoanRequestsController, ToolsController],
  providers: [LoanRequestsService, SeedService],
})
export class LoanRequestsModule {}

