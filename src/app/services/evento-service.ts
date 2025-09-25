import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  ruta_servidor: string = "http://localhost:8080/romip";
  recurso: string = "eventos"; 
  constructor(private http: HttpClient) { }

getAll(): Observable<Evento[]> {
  const token = localStorage.getItem('jwtToken');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<Evento[]>(`${this.ruta_servidor}/${this.recurso}`, { headers });
}

  // Obtener evento por ID
  getById(id: number): Observable<Evento> {
    return this.http.get<Evento>(this.ruta_servidor + "/" + this.recurso + "/" + id);
  }

  // Crear evento
  create(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.ruta_servidor + "/" + this.recurso + "/add", evento);
  }

  // Actualizar evento
  update(evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(`${this.ruta_servidor}/${this.recurso}/${evento.eventId}`, evento);
  }

  // Borrar evento
  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.ruta_servidor + "/" + this.recurso + "/delete" + id);
  }

  logout() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("authorities");
  }
}
