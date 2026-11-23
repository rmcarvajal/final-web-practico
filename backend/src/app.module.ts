import { Controller, Get, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { LoanRequestsModule } from "./loan-requests/loan-requests.module";

@Controller("health")
class HealthController {
  @Get()
  health() {
    return { status: "ok" };
  }
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "127.0.0.1",
      port: Number(process.env.DB_PORT ?? 5452),
      username: "tool_lab",
      password: "tool_lab_local",
      database: "tool_lab",
      autoLoadEntities: true,
      // Solo para la base local y exclusiva de este ejercicio, no para producción.
      synchronize: true,
      retryAttempts: 4,
      retryDelay: 1000,
    }),
    AuthModule,
    LoanRequestsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}

