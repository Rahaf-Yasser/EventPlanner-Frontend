import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  error = '';
  success = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSignup() {
    this.auth.signup(this.username, this.email, this.password).subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => this.error = 'Signup failed'
    });
  }
}
