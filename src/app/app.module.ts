
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppingList } from './shoppingList/shoppingList.component';

//Angular Router Module
import { RouterModule, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {CdsIconModule} from "@cds/angular";

import '@cds/core/icon/register.js';
import {
  ClarityIcons,
  userIcon,
  shoppingBagIcon,
  shoppingCartIcon,
  trashIcon,
  arrowIcon
} from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, shoppingBagIcon, shoppingCartIcon, trashIcon, arrowIcon);


@NgModule({
  declarations: [
    AppComponent,
    ShoppingList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule,
    RouterModule.forRoot([
      {path: '', component: ShoppingList}
    ]),
    CdsIconModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
