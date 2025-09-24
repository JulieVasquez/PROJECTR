import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

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
  

  constructor(
    private cdr: ChangeDetectorRef,
    private usuarioService: UserService,
    private router: Router

  ) { }

  opened = false; // empieza abierto
  menuExpandido = false;

  onOpened() {
    console.log("El menú se abrió");
  }

  onClosed() {
    console.log("El menú se cerró");
  }
timeline = [
  { titulo: "Primer mensaje", fecha: "02/01/2023", descripcion: "Ese día me hablaste y me hiciste sonreír 💌" },
  { titulo: "Primera cita", fecha: "15/01/2023", descripcion: "La pizza más linda porque estabas tú 🍕" },
  { titulo: "Nuestro viaje", fecha: "05/06/2023", descripcion: "La aventura que nunca olvidaré ✈️" },
  { titulo: "Cumpleaños sorpresa", fecha: "10/09/2023", descripcion: "Te preparé una sorpresa con tus amigos 🎉" },
  { titulo: "Primer regalo", fecha: "20/09/2023", descripcion: "Ese detalle que sé que te encantó 🎁" },
  { titulo: "Día de cine", fecha: "02/10/2023", descripcion: "Maratón de películas y palomitas 🍿" },
  { titulo: "Paseo al parque", fecha: "15/10/2023", descripcion: "Caminata larga y picnic bajo el sol 🌳" },
  { titulo: "Cena romántica", fecha: "31/12/2023", descripcion: "Brindis por un año juntos 🥂" },
  { titulo: "Primer concierto juntos", fecha: "14/02/2024", descripcion: "Tu banda favorita en vivo 🎸" },
  { titulo: "Fin de semana de escapada", fecha: "01/04/2024", descripcion: "Escapada a la playa y risas sin fin 🏖️" },
  { titulo: "Selfie divertido", fecha: "15/04/2024", descripcion: "Ese momento donde nos reímos sin parar 🤳😂" },
  { titulo: "Día de lluvia", fecha: "05/05/2024", descripcion: "Caminata bajo la lluvia y abrazos 💧❤️" },
  { titulo: "Noche de juegos", fecha: "12/05/2024", descripcion: "Competencia de juegos de mesa 🎲" },
  { titulo: "Tarde de helados", fecha: "20/05/2024", descripcion: "Probando todos los sabores juntos 🍦" },
  { titulo: "Visita a museo", fecha: "05/06/2024", descripcion: "Aprendiendo y riendo juntos 🖼️" },
  { titulo: "Picnic nocturno", fecha: "14/06/2024", descripcion: "Bajo las estrellas y música suave 🌌🎵" },
  { titulo: "Día de deportes", fecha: "22/06/2024", descripcion: "Jugando y animándonos mutuamente ⚽🏀" },
  { titulo: "Regalo inesperado", fecha: "01/07/2024", descripcion: "Una sorpresa que iluminó tu día 🎀" },
  { titulo: "Cena temática", fecha: "15/07/2024", descripcion: "Cocinamos juntos un menú divertido 🍝🍰" },
  { titulo: "Primer festival juntos", fecha: "28/07/2024", descripcion: "Música, luces y bailes inolvidables 🎶✨" }
];


  ngOnInit() {
    this.startCountUp();
      this.opened = false;
      this.cdr.detectChanges();
      this.menuExpandido = false;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
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
