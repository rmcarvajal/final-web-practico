import { BadRequestException, Injectable } from "@nestjs/common";
import { ToolEntity } from "./tool.entity";

@Injectable()
export class LoanLimit {
    ensureLimitOnLoan(tool: ToolEntity): void {
        if(tool.maxLoanDays > 3) {
            throw new BadRequestException(
                'cannot loan for over 3 days.'
            )
        }
    }
}
