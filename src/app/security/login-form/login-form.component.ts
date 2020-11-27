import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Login } from './login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formulario: FormGroup;

  passwordVisible: boolean;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.montarFormulario();
    this.passwordVisible = false;
  }

  montarFormulario() {
    this.formulario = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

  submit() {
    const formValues = this.formulario.value;
    const login: Login = new Login(formValues.username, formValues.password);

    this.auth.logar(login)
      .subscribe(response => {
        this.auth.storeToken(response);
        this.router.navigate(['/']);
      },

        err => {
          if (err.error.error == 'invalid_grant') {
            this.toastr.error("usuário e/ou senha inválida")
          } else {
            this.toastr.error("Falha no servidor")
          }

        })

  }

}
