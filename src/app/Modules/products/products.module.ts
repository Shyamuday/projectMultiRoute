import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdjustmentComponent } from './components/productInfo/adjustment/adjustment.component';
import { HistoryComponent } from './components/productInfo/history/history.component';
import { InventoryComponent } from './components/productInfo/inventory/inventory.component';
import { OfferComponent } from './components/productInfo/offer/offer.component';
import { OrderComponent } from './components/productInfo/order/order.component';
import { OverviewComponent } from './components/productInfo/overview/overview.component';
import { ProductInfoComponent } from './components/productInfo/product-info/product-info.component';
import { PurchaseComponent } from './components/productInfo/purchase/purchase.component';
import { RelatedproductComponent } from './components/productInfo/relatedproduct/relatedproduct.component';
import { SerialnoComponent } from './components/productInfo/serialno/serialno.component';
import { TransferComponent } from './components/productInfo/transfer/transfer.component';
import { ProductsComponent } from './components/products/products.component';
import { BooksComponent } from './components/productType/books/books.component';
import { LaptopComponent } from './components/productType/laptop/laptop.component';
import { MobileComponent } from './components/productType/mobile/mobile.component';
import { ShoesComponent } from './components/productType/shoes/shoes.component';

@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    ShoesComponent,
    BooksComponent,
    OverviewComponent,
    InventoryComponent,
    AdjustmentComponent,
    TransferComponent,
    RelatedproductComponent,
    OfferComponent,
    OrderComponent,
    PurchaseComponent,
    SerialnoComponent,
    HistoryComponent,
    ProductInfoComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
  ],
})
export class ProductsModule {}
