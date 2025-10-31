import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    this.http.post('http://localhost:3000/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => this.message = 'Login successful!',
      error: (err) => this.message = 'Invalid credentials!'
    });
  }
}
