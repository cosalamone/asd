import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() userEvent = new EventEmitter<any>();


  constructor(private readonly formBuilder: FormBuilder, 
    private logInService: LoginService,
    private router: Router ) { }
    
  minLengthForPass: number = 6;

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(this.minLengthForPass)]],
    })
  }


  submitLogin(formulario: FormGroup) {
    console.log(JSON.stringify(formulario.value))
    this.userEvent.emit("Logeado")
    
  }
}
