import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private auth: AuthService
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
        console.log("RESPOSTA", response);

      })


  }

}
