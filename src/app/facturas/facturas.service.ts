import { Injectable } from '@angular/core';
import { Headers,Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { HttpParameterCodec } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

frasURL='https://comprasapp-b37be.firebaseio.com/facturas.json';
preURL='https://comprasapp-b37be.firebaseio.com/facturas';
  constructor(private http:Http) {}

 postFactura(factura:any){
   const newfac = JSON.stringify(factura);
    const headers = new  Headers({
   'ContentType':'application/json'
 });
 return this.http.post(this.frasURL,newfac,{headers})
 .map(res=>{

   console.log(res.json());
   return res.json();

 })

     }
     getFacturas(){
       return this.http.get(this.frasURL)
       .map(
         res=>res.json()
       )
     }

     getFactura(id$:String){
       const  url = `${this.preURL}/${id$}.json`;
       return this.http.get(url)
       .map(res=>res.json());

     }

     putFactura(factura:any,id$:string ){
      const newpre =JSON.stringify(factura); 
      const headers = new  Headers({
        'content-type':'application/json'
      });
      const  url = `${this.preURL}/${id$}.json`;

      return this.http.put(url,newpre,{headers})
      .map( res =>{
        console.log(res.json());
        return res.json();
      })
     }

     delFactura(id$:string){
      const  url = `${this.preURL}/${id$}.json`;
      return this.http.delete(url) 
      .map(res =>res.json());
       

     }
   
}
