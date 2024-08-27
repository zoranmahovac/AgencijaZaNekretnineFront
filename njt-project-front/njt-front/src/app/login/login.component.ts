import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    
    this.authService.login(this.username, this.password).subscribe(
      obj => {
        if (obj!=null) {
          this.router.navigate(['/home']);
        } else {
          this.loginError = true;
        }
      },
      error => {
        console.error('Login error', error);
        this.loginError = true;
      }
    );
  }
}
