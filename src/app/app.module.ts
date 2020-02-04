import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProveedoresService} from './servicios/proveedores.service';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import {AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import {GuardService} from './servicios/guard.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {enviroment} from './config/firebase.config';
import {AngularFireList } from 'angularfire2/database';
import { environment } from '../environments/environment';

import{FacturasModule} from './facturas/facturas.module';
import {FacturasService} from './facturas/facturas.service';
import { FacturasComponent } from './facturas/facturas/facturas/facturas.component';
import { EditproComponent } from './proveedores/editpro/editpro.component';
import { UploadComponent } from './uploads/upload/upload.component';
import{LoadfileService} from  './servicios/loadfile.service';
import { ContratosComponent } from './uploads/contratos/contratos.component';
import {DetallesComponent } from './uploads/detalles/detalles.component';

const routes:Routes =[
{path:'',component:InicioComponent},
{path:'proveedores',component:ProveedoresComponent,canActivate:[GuardService]},
{path:'addprovee',component:AddproveeComponent,canActivate:[GuardService]},
{path:'addpres',component:AddpresComponent,canActivate:[GuardService]},
{path:'editpro/:id',component:EditproComponent,canActivate:[GuardService]},
{path:'presupuestos',component:PresupuestosComponent,canActivate:[GuardService]},
{path:'editpres/:id',component:EditpresComponent,canActivate:[GuardService]},
{path:'registro',component:RegistroComponent},
{path:'inises',component:InisesComponent},  
{ path: 'facturas', component: FacturasComponent,canActivate:[GuardService] },
{ path: 'uploads', component: UploadComponent,canActivate:[GuardService] },
{path:'contratos',component:ContratosComponent},  
{path:'**',component:InicioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    EditproComponent,
    UploadComponent,
    ContratosComponent,
    DetallesComponent,
    

  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(routes),
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  HttpClientModule,
  FacturasModule,
  AngularFireModule.initializeApp(enviroment.firebase),AngularFireDatabaseModule,
  AngularFireDatabaseModule,
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AutenticacionService,
    GuardService,
    LoadfileService,
    FacturasService],
  bootstrap: [AppComponent]

})
export class AppModule { }
