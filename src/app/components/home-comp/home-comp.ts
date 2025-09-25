import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento-service';

@Component({
  selector: 'app-home-comp',
  standalone: false,
  templateUrl: './home-comp.html',
  styleUrl: './home-comp.css'
})
export class HomeComp implements OnInit, OnDestroy{
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private intervalId: any;
  startDate = new Date('2023-01-02T00:00:00');
  timeline: Evento[] = [];
  opened = false; // empieza abierto
  menuExpandido = false;


  constructor(
    private cdr: ChangeDetectorRef,
    private usuarioService: UserService,
    private eventoService: EventoService,
    private router: Router

  ) { }
  
  ngOnInit() {
    this.startCountUp();
      this.opened = false;
      this.cdr.detectChanges();
      this.menuExpandido = false;
      this.cargarEventos();
  }

  onOpened() {
    console.log("El menú se abrió");
  }

  onClosed() {
    console.log("El menú se cerró");
  }





  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  cargarEventos() {
    //cargar eventos desde el servicio
    this.eventoService.getAll().subscribe({
      next:(eventos) =>{
        this.timeline = eventos;
        this.cdr.detectChanges();
      },
      error:(err) => console.error('Error al cargar eventos', err)
    })
  }
  startCountUp() {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const elapsed = now - this.startDate.getTime();

      this.days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
      this.minutes = Math.floor((elapsed / (1000 * 60)) % 60);
      this.seconds = Math.floor((elapsed / 1000) % 60);
    }, 1000);
    this.cdr.detectChanges();

  }



  cerrarSesion() {
    console.log(localStorage.getItem('jwtToken'));
    this.usuarioService.logout();
    console.log('Sesión cerrada correctamente');
    this.router.navigate(['/recibidor']);
  }

}
