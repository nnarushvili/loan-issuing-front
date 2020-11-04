import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoanApplication} from '../components/loan-application/loan-application.component';

const apiUrl = 'http://localhost:18080/loanapplications/';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {


  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }


  getLoanApplications(): Observable<LoanApplication[]> {
    return this.httpClient.get<Array<LoanApplication>>(apiUrl);
  }

  updateLoanApplication(id, status, loanScore): Observable<LoanApplication> {
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      });

    const body = {
      status, loanScore
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.put<LoanApplication>(apiUrl + id, body, httpOptions);
  }

  deleteLoanApplication(id): void {
    this.httpClient.delete(apiUrl + id).subscribe();
  }

}
