import { BadRequestException, Injectable } from "@nestjs/common";
import { ToolEntity } from "./tool.entity";
import { CreateLoanRequestDto } from "./dto/create-loan-request.dto";

@Injectable()
export class LoanLimit {
    ensureLimitOnLoan(tool: ToolEntity, dto: CreateLoanRequestDto): void {
        if(tool.maxLoanDays < dto.days) {
            throw new BadRequestException(
                'cannot loan for over the specified time.'
            )
        }
    }
}
