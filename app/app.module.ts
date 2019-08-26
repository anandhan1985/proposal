import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProposalModule } from './modules/proposal/proposal.module';

import { ApiService } from './core/service/api.service';
import { ProposalPromotionDialogComponent } from './shared/proposal-promotion-dialog/proposal-promotion-dialog.component';
import { MessageDialogComponent } from './shared/message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProposalPromotionDialogComponent,
    MessageDialogComponent,
  ],
  entryComponents: [
    ProposalPromotionDialogComponent, 
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProposalModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    StorageServiceModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
