import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  message = '';

  constructor(private http: HttpClient) {}

  onSignup() {
    this.http.post('http://localhost:3000/signup', {
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => this.message = res.message,
      error: (err) => this.message = 'Signup failed!'
    });
  }
} 