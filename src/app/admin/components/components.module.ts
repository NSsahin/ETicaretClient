import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    DashboardModule,
    CustomersModule,
    OrdersModule
  ]
})
export class ComponentsModule { }
