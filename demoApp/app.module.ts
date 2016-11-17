import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './shared/header/index';
import { FooterComponent }  from './shared/footer/index';
import { BackendCommunicationComponent } from './backend-communication/index'

//import {InputTextModule} from 'primeng/primeng';
//import {CalendarModule} from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BackendCommunicationComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
