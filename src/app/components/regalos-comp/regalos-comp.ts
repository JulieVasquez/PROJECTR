import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regalos-comp',
  standalone: false,
  templateUrl: './regalos-comp.html',
  styleUrl: './regalos-comp.css'
})
export class RegalosComp {
  constructor(
    private cdr: ChangeDetectorRef,
    private usuarioService: UserService,
    private router: Router

  ) { }
  ngOnInit() {
    this.opened = true;
    this.cdr.detectChanges();
    this.menuExpandido = true;
  }
  opened = false; // empieza abierto
  menuExpandido = false;
    onOpened() {
    console.log("El menú se abrió");
  }

  onClosed() {
    console.log("El menú se cerró");
  }
  cerrarSesion() {
    console.log(localStorage.getItem('jwtToken'));
    this.usuarioService.logout();
    console.log('Sesión cerrada correctamente');
    this.router.navigate(['/recibidor']);
  }
}
