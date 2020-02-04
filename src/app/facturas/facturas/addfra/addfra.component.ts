import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FacturasService} from '../../facturas.service';



 

@Component({
  selector: 'app-addfra',
  templateUrl: './addfra.component.html',
  styleUrls: ['./addfra.component.css']
})
export class AddfraComponent implements OnInit {

  FacturasForm:FormGroup;
  factura:any;
  base:any;
  tipo:any;
  iva:any = 0; 
  total:any = 0;


  constructor(private pf:FormBuilder,
              private facturasService:FacturasService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {

    this.FacturasForm = this.pf.group({
      proveedor: ['',Validators.required],
      fecha:  ['',Validators.required],
      concepto:  ['',[Validators.required,Validators.minLength(10)]] ,
      base: ['',Validators.required],
      tipo: ['',Validators.required],
      iva:  ['',Validators.required],
      total: ['',Validators.required],

    });
    this.onchanges();
  }

 onchanges():void{
   this.FacturasForm.valueChanges.subscribe(valor=>{
     this.base =valor.base;
     this.tipo =valor.tipo;
     this.FacturasForm.value.iva = this.base * this.tipo;
     this.FacturasForm.value.total = this.base + (this.base * this.tipo);
   });


 }


  onSubmit(){
    this.factura = this.saveFactura();
    this.facturasService.postFactura(this.factura)
    .subscribe(newfac => {

    })
    console.log(this.FacturasForm);
    this.FacturasForm.reset();
  }

  saveFactura(){
  const saveFactura ={
    proveedor: this.FacturasForm.get('proveedor').value,
    fecha: this.FacturasForm.get('fecha').value,
    concepto: this.FacturasForm.get('concepto').value,
    base: this.FacturasForm.get('base').value,
    tipo: this.FacturasForm.get('tipo').value,
    iva: this.FacturasForm.get('iva').value,
    total: this.FacturasForm.get('total').value
     
  }
  return saveFactura;
  }

}
