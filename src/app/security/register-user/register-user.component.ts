import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandlerService } from 'src/app/service/error-handler.service';
import { RegisterUserService } from 'src/app/service/register-user.service';
import { RegisterUser } from '../../model/register-user';
import { ConfirmPassword } from '../../shared/validator/confirm-password';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerUserForm: FormGroup;
  passwordVisible: boolean;
  confirmPasswordVisible: boolean;
  isLoading: boolean;
  registerUser: RegisterUser;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private registerUserService: RegisterUserService,
    private router: Router,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.passwordVisible = false;
    this.iniciarFormulario()
  }

  iniciarFormulario() {
    this.registerUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validators: [ConfirmPassword]
      })
  }

  submit() {
    this.isLoading = true;
    this.registerUser = this.registerUserForm.getRawValue();
    delete this.registerUser.confirmPassword;
    this.registerUserService
      .registerUser(this.registerUser)
      .subscribe(
        () => {
          this.isLoading = false;
          this.toastr
            .success('Usuário cadastrado com sucesso', 'Sucesso')
            .onHidden
            .subscribe(() => {
              this.router.navigate(['login']);
            })
        },
        err => {
          this.isLoading = false;
          this.errorHandler.showErrors(err);
        }
      )
  }

}
