import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { LoanRequestEntity } from "./loan-request.entity";
import { ToolEntity } from "./tool.entity";

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async onApplicationBootstrap() {
    await this.dataSource.transaction(async (manager) => {
      const tools = manager.getRepository(ToolEntity);
      if (await tools.count()) return;
      const [drill, sewingMachine] = await tools.save([
        { name: "Electric drill", maxLoanDays: 3 },
        { name: "Sewing machine", maxLoanDays: 7 },
      ]);
      await manager.getRepository(LoanRequestEntity).save([
        { purpose: "Build a display stand", days: 2, tool: drill },
        { purpose: "Prepare workshop materials", days: 4, tool: sewingMachine },
      ]);
    });
  }
}

