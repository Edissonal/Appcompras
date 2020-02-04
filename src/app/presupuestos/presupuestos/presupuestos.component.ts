import { Component, OnInit } from '@angular/core';
import {PresupuestosService} from '../../servicios/presupuestos.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos:any[]=[];

  constructor(private presupuestosService:PresupuestosService) {
    this.presupuestosService.getpresupuestos()
    .subscribe(presupuestos=>{
      for(const id$ in presupuestos){
      const p =presupuestos[id$];
      p.id$ =id$;
      this.presupuestos.push(presupuestos[id$]);
      }
    })

   }

  ngOnInit() {
  }

  eliminarPresupuesto($id:String){
    this.presupuestosService.delpresupuesto($id)
    .subscribe(res => {
      this.presupuestos =[];
      this.presupuestosService.getpresupuestos()
      .subscribe(presupuestos=>{
        for(const id$ in presupuestos){
        const p =presupuestos[id$];
        p.id$ =id$;
        this.presupuestos.push(presupuestos[id$]);
        }
      })

    })


  }
}
