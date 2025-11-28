import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = "http://localhost:3000/events";

  constructor(private http: HttpClient) {}

  // CREATE event
  createEvent(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
  }

  // GET all my events
  getMyEvents(): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
  }

  // GET event by ID (id: number)
  getEvent(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
  }

  // DELETE event (id: number)
  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
  }

  // UPDATE event (id: number)
  updateEvent(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
  }

  searchEvents(filters: any) {
    const query: string[] = [];
  
    if (filters.keyword) query.push(`keyword=${filters.keyword}`);
    if (filters.role) query.push(`role=${filters.role}`);
    if (filters.start) query.push(`start=${filters.start}`);
    if (filters.end) query.push(`end=${filters.end}`);
  
    const queryString = query.length ? '?' + query.join('&') : '';
  
    return this.http.get<any[]>(`http://localhost:3000/search${queryString}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
  }
  
}
