import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAeYgB5PAPrv3AQ3k0gBRkpWSekCbdyZ4A",
      authDomain: "comprasapp-b37be.firebaseapp.com",
      databaseURL: "https://comprasapp-b37be.firebaseio.com",
      projectId: "comprasapp-b37be",
      storageBucket: "comprasapp-b37be.appspot.com",
      messagingSenderId: "21263855122"
    })
  }
}
