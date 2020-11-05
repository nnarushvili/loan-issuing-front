import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {LoanApplicationComponent} from './components/loan-application/loan-application.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {AppService} from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { ApplicationRequestComponent } from './components/application-request/application-request.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'loans', component: LoanApplicationComponent},
  { path: 'newapplication', component: ApplicationRequestComponent}
];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });

    const clonedRequest = xhr.clone({ headers: req.headers.set('Authorization', 'Basic ' + sessionStorage.getItem('authHeader')) });

    return next.handle(clonedRequest);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoanApplicationComponent,
    LoginComponent,
    RegistrationComponent,
    ApplicationRequestComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  providers: [AppService, {
    provide: HTTP_INTERCEPTORS,
    useClass: XhrInterceptor,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}


