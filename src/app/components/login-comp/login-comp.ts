import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-comp',
  standalone: false,
  templateUrl: './login-comp.html',
  styleUrl: './login-comp.css'
})
export class LoginComp {
  step = 0;

  nextStep() {
    this.step++;
  }

  goToStep(index: number) {
  this.step = index;
}

  loginForm!: FormGroup;
  errorMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ){}

    ngOnInit() {
    this.createForm();

  }
  createForm() {
        this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    if (this.loginForm.invalid) return;

    const usuario: User = {
      userId: 0,
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
      enabled: true,
      authorities: ''
    };

    this.userService.login(usuario).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = true;
        console.log(err);
      }
    });
  }
}
