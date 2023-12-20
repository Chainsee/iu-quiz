import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router'; //login verbinden RouterLink, RouterLinkActive
import { OnInit } from '@angular/core';   //Für Registrierung
import { FormsModule } from '@angular/forms';   //Für Registrierung

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule], //login verbinden RouterLink, RouterLinkActive
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  signupUsers: any[]=[];    //Deklaration Array
  loginObj:any ={   //Objekt für Login
    username: '',
    password: ''
  };

  ngOnInit(): void {    //Für Registrierung
    
  }
  onLogin(){    //Speichern der Eingaben in Objekt
    this.signupUsers.push(this.loginObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this. loginObj = {     
      username: '',
      password: ''
    };
   //let test?: string = localStorage.getItem('signUpRegisterUsers')
  } 

}
