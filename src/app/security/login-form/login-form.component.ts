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

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.montarFormulario()
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
        const access_token = response.access_token;
        console.log(access_token)
        this.auth.storeToken(access_token);
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
