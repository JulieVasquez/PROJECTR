import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Token } from '../models/token';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ruta_servidor: string = "http://localhost:8080/romip";
  recurso: string = "users"; 

  constructor(private http: HttpClient) { }

  login(user:User){
    return this.http.post<Token>(this.ruta_servidor + "/" + this.recurso+"/"+"login",user).pipe(
      tap((respuesta: Token)=>{
        localStorage.setItem("jwtToken", respuesta.jwtoken);
        localStorage.setItem("userId", respuesta.id.toString());
        localStorage.setItem("authorities", respuesta.authorities);

      })
    );    
  }
  logout() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("authorities");
  }
  getUserIdActual() {
    if (typeof localStorage !== "undefined") {
          if (localStorage.getItem('userId')!==null)
            return parseInt(localStorage.getItem('userId')!.toString());
        }
        return 1;
  }

  //para llamar el username 
  getUsuarioPorId(id: number) {
    return this.http.get<User>(this.ruta_servidor + "/" + this.recurso + "/" + id);
  }

  getTokenActual(){
    if(typeof localStorage!=="undefined"){
      return localStorage.getItem('jwtToken');
    }
    return "";
  }

  getUsuario(): { id: number } | null {
  const id = this.getUserIdActual();
  if (id) {
    return { id };
  }
  return null;
}
  getAuthoritiesActual(){
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem('authorities');
    }
    return "";
  }
}
