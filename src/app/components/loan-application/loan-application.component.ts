import {Component, OnInit} from '@angular/core';
import {LoanApplicationService} from '../../services/loan-application-service/loan-application.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication-service/authentication.service';
import { CommonModule } from '@angular/common';
export class LoanApplication {
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

  addingNew: boolean;

  newLoanApplication: LoanApplication;

  constructor(private loanApplicationService: LoanApplicationService, private router: Router, private authenticationService: AuthenticationService) {
    this.loanApplicationService = loanApplicationService;
    this.router = router;
  }

  ngOnInit(): void {
    this.loanApplicationService.getLoanApplications().subscribe(loanApplications => {
        this.loanApplications = loanApplications;
      }
    );
    this.addingNew = false;
    this.newLoanApplication = new LoanApplication();
    document.getElementById('new-loan-application').style.display = 'none';
  }

  addNew(): void {
    if (this.addingNew) {
      return;
    }
    this.addingNew = true;
    document.getElementById('new-loan-application').style.display = 'grid';

  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }

  createLoanApplication(loanApplication: LoanApplication): void {
    this.loanApplicationService.createLoanApplication(loanApplication, false).subscribe(r => {
        if (r.id) {
          this.ngOnInit();
        }

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
