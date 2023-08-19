import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutcsModule } from './produtcs/produtcs.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProdutcsModule,
    DashboardModule,
    CustomersModule,
    OrdersModule
  ]
})
export class ComponentsModule { }
