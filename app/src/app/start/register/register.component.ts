import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';//register verbinden RouterLink, RouterLinkActive
import { OnInit } from '@angular/core';   //Für Registrierung
import { FormsModule } from '@angular/forms';   //Für Registrierung

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule], //register verbinden RouterLink, RouterLinkActive
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {      //implments OnInit für Registrierung
  signupUsers: any[]=[];    //Deklaration Array
  signupObj: any ={      //Objekt für Registrierung
    username: '',
    email: '',
    password: ''
  };
  

  ngOnInit(): void { }     //Für Registrierung

  onSignUp(){       //Speichern der Eingaben in Objekt
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpRegisterUsers', JSON.stringify(this.signupUsers));
    this. signupObj = {     
      username: '',
      email: '',
      password: ''
    };
  }
  
 

}



