import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { BranchListComponent } from './components/branches/branch-list/branch-list.component';
import { BranchListItemComponent } from './components/branches/branch-list-item/branch-list-item.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './components/transactions/transaction-list-item/transaction-list-item.component';
import { NewBranchModalComponent } from './components/modals/new-branch-modal/new-branch-modal.component';
import { FormsModule } from '@angular/forms';
import { NewTransactionModalComponent } from './components/modals/new-transaction-modal/new-transaction-modal.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DefaultBarComponent,
    BranchListComponent,
    BranchListItemComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    NewBranchModalComponent,
    NewTransactionModalComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
