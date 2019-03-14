import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorporategiftingComponent } from './header/corporategifting/corporategifting.component';
import { GiftscardsComponent } from './header/giftscards/giftscards.component';
import { JflpaymentsComponent } from './header/jflpayments/jflpayments.component';
import { StorelocatorComponent } from './header/storelocator/storelocator.component';
import { CorporateComponent } from './header/corporate/corporate.component';
import { InvestorsComponent } from './header/investors/investors.component';
import { LoginComponent } from './subheader/login/login.component';
import { RegisterComponent } from './subheader/register/register.component';
import { CartComponent } from './subheader/cart/cart.component';
import { FavoritesComponent } from './subheader/favorites/favorites.component';

const appRoutes:Routes=[
  {
    path:'CorporateGifting',
  component:CorporategiftingComponent
},
{
  path:'GiftCards',
  component:GiftscardsComponent
},
{
  path:'JflPayments',
  component:JflpaymentsComponent
},
{
  path:'StoreLocator',
  component:StorelocatorComponent
},
{
  path:'Corporate ',
  component:CorporateComponent
},
{
  path:'Investors',
  component:InvestorsComponent
},
{
 path:'login',
 component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'cart',
  component:CartComponent
},
{
  path:'favorites',
  component:FavoritesComponent
}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})
export class AppRoutingModule { }
