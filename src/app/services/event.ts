import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:3000/events';
  private tasksUrl = 'http://localhost:3000/tasks';
  private invitationsUrl = 'http://localhost:3000/invitations';

  constructor(private http: HttpClient) {}

  private authHeader() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }

  // ========== EVENT OPERATIONS ==========
  
  // Get all events (for current user)
  getEvents(): Observable<any> {
    return this.http.get(this.apiUrl, this.authHeader());
  }

  // Alias for backwards compatibility
  getMyEvents(): Observable<any> {
    return this.getEvents();
  }

  // Get single event
  getEvent(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, this.authHeader());
  }

  // Create event
  createEvent(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, this.authHeader());
  }

  // Update event
  updateEvent(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data, this.authHeader());
  }

  // Delete event
  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.authHeader());
  }

  // ========== ATTENDEE OPERATIONS ==========
  
  // Get event attendees
  getEventAttendees(eventId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${eventId}/attendees`, this.authHeader());
  }

  // Invite attendee
  inviteAttendee(eventId: number, data: { email: string; role?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/${eventId}/invite`, data, this.authHeader());
  }

  // Respond to invitation (update RSVP status)
  respondToInvitation(eventId: number, status: string): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/${eventId}/rsvp`,  // ← Changed to /rsvp to match backend
      { status },
      this.authHeader()
    );
  }

  // Get my invitations
  getMyInvitations(): Observable<any> {
    return this.http.get(`${this.invitationsUrl}/my`, this.authHeader());
  }

  // ========== TASK OPERATIONS ==========
  
  // Get tasks for an event
  getTasks(eventId: number): Observable<any> {
    return this.http.get(`${this.tasksUrl}/${eventId}/tasks`, this.authHeader());
  }

  // Add task to event
  addTask(eventId: number, data: any): Observable<any> {
    return this.http.post(`${this.tasksUrl}/${eventId}/tasks`, data, this.authHeader());
  }

  // Update task
  updateTask(eventId: number, taskId: number, data: any): Observable<any> {
    return this.http.put(`${this.tasksUrl}/${taskId}`, data, this.authHeader());
  }

  // Delete task
  deleteTask(eventId: number, taskId: number): Observable<any> {
    return this.http.delete(`${this.tasksUrl}/${taskId}`, this.authHeader());
  }

  // ========== SEARCH ==========
  
  // Search events
  searchEvents(params: any): Observable<any> {
    const queryParams = new URLSearchParams(params).toString();
    return this.http.get(`http://localhost:3000/search?${queryParams}`, this.authHeader());
  }
}