import { Component, OnInit } from '@angular/core';
import {LoadfileService} from  '../../servicios/loadfile.service';
import {Archivo} from  './../file.modal';
//import {FirebaseListObservable} from  'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFireObject, AngularFireList,AngularFireDatabase} from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

 // uploads: FirebaseListObservable<Archivo>;
    uploads: any[];
  constructor(private loadfileService:LoadfileService) { }

  //ngOnInit() {
   // this.uploads= this.loadfileService.getUploads();

  //}

  ngOnInit() {
    // Use snapshotChanges().pipe(map()) to store the key
    this.loadfileService.getUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(uploads => {
      this.uploads = uploads;
    });

}
}