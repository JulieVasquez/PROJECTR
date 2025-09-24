import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DTOUser } from '../../models/DTOUser';
import { E } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-registro-comp',
  standalone: false,
  templateUrl: './registro-comp.html',
  styleUrl: './registro-comp.css'
})
export class RegistroComp {
usuarioForm: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService,private router: Router, private snack:MatSnackBar) {
    this.usuarioForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      authorities: ['ROLE_USER'],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  registrar() {
    if (this.usuarioForm.valid) {
      const nuevoUsuario: DTOUser = this.usuarioForm.value;
      this.userService.registrarUsuario(nuevoUsuario).subscribe({
        next: (res) => {
          this.snack.open('Usuario registrado con éxito', 'Cerrar'),{
            duration: 3000
          }
          this.usuarioForm.reset();
          this.router.navigate(['/registro']);
        },
        error: (err) => {
          console.error(err);
          alert('Error al registrar usuario');
        }
      });
    } else {
      // si el formulario no es válido
      this.snack.open('Campos incompletos o inválidos, por favor revisa.', 'Cerrar', {
        duration: 3000
      });
    }
  }
}
