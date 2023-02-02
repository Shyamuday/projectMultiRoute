import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'shoes', component: ShoesComponent },
      { path: 'books', component: BooksComponent },
    ],
  },
  {
    path: 'productInfo',
    component: ProductInfoComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'adjustments', component: AdjustmentComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'relatedProduct', component: RelatedproductComponent },
      { path: 'offers', component: OfferComponent },
      { path: 'order', component: OrderComponent },
      { path: 'purchase', component: PurchaseComponent },
      { path: 'serialNo', component: SerialnoComponent },
      { path: 'history', component: HistoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
