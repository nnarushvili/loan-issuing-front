import {Component, OnInit} from '@angular/core';
import {LoanApplication} from '../loan-application/loan-application.component';
import {LoanApplicationService} from '../../services/loan-application-service/loan-application.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-application-request',
  templateUrl: './application-request.component.html',
  styleUrls: ['./application-request.component.css']
})
export class ApplicationRequestComponent implements OnInit {

  newLoanApplication: LoanApplication;

  constructor(private loanApplicationService: LoanApplicationService, private router: Router) {
    this.loanApplicationService = loanApplicationService;
    this.router = router;
  }

  ngOnInit(): void {
    this.newLoanApplication = new LoanApplication();
  }

  createLoanApplication(): void {
    this.loanApplicationService.createLoanApplication(this.newLoanApplication, true).subscribe(r => {
      this.router.navigateByUrl('/');
    });
  }

}
