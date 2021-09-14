import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { HearderComponent } from './hearder/hearder.component';
import { ListService } from './list/list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListComponent,
    HearderComponent,
    FilterPipe,
    SortPipe,
    ModalComponent,
    ModalAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [ListService],
  entryComponents: [
    ModalComponent,
    ModalAlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
