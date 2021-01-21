import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooknewComponent } from './booknew/booknew.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdeleteComponent } from './updelete/updelete.component';
import { BooklibService } from './booklib.service';

@NgModule({
  declarations: [
    AppComponent,
    BooknewComponent,
    AddbookComponent,
    UpdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [BooklibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
