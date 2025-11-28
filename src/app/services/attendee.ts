import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AttendeeService {
  private baseUrl = 'http://localhost:3000/attendees';

  constructor(private http: HttpClient) {}

  private authHeader() {
    return {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
  }

  invite(eventId: string, email: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/${eventId}/invite`,
      { email },
      this.authHeader()
    );
  }

  updateStatus(eventId: string, status: string): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/${eventId}/status`,
      { status },
      this.authHeader()
    );
  }

  getAttendees(eventId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${eventId}`, this.authHeader());
  }
}
