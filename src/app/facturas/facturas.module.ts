import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {GuardService} from '../servicios/guard.service';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './facturas/facturas/facturas.component';
import { AddfraComponent } from './facturas/addfra/addfra.component';
import { FacturasService } from './facturas.service';
import { EditfraComponent } from './facturas/editfra/editfra.component';



const routes: Routes = [
  { path: 'facturas', component: FacturasComponent,canActivate:[GuardService] },
  { path: 'addfra', component: AddfraComponent,canActivate:[GuardService] },
  { path: 'editfra/:id', component: EditfraComponent,canActivate:[GuardService]  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  declarations: [FacturasComponent,AddfraComponent, EditfraComponent],
  providers:[FacturasService]
})
export class FacturasModule { }
