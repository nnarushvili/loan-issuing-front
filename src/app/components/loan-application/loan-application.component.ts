import {Component, OnInit} from '@angular/core';
import {LoanApplicationService} from '../../services/loan-application.service';

export interface LoanApplication {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  employer: string;
  salary: number;
  monthlyLiability: number;
  requestedAmount: number;
  requestedTermInDays: bigint;
  status: string;
  loanScore: number;
}


@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  loanApplications: Array<LoanApplication>;

  constructor(private loanApplicationService: LoanApplicationService) {
    this.loanApplicationService = loanApplicationService;
  }

  ngOnInit(): void {
    this.loanApplicationService.getLoanApplications().subscribe(loanApplications => {
        this.loanApplications = loanApplications;
      }
    );
  }

  updateLoanApplication(loanApplication: LoanApplication): void {
    this.loanApplicationService.updateLoanApplication(loanApplication.id, loanApplication.status, loanApplication.loanScore).subscribe();
  }

  deleteLoanApplication(loanApplication: LoanApplication): void {
    this.loanApplicationService.deleteLoanApplication(loanApplication.id);
    document.getElementById(loanApplication.id.toString()).style.display = 'none';
  }

  changeLoanScore(loanApplication: LoanApplication): void {
    const newScore = document.getElementById(loanApplication.id.toString()).getElementsByTagName('input')[0].value;
    loanApplication.loanScore = Number(newScore);
  }

  changeLoanStatus(loanApplication: LoanApplication, newStatus): void {
    console.log(newStatus);
    loanApplication.status = newStatus;
  }

}
