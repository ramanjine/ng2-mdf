import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2MDFValidationMessagesModule } from 'ng2-mdf-validation-messages';

import { AppComponent } from './app.component';

//Start:: Solution using 'useFactory'

//End:: Solution using 'useFactory'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
         Ng2MDFValidationMessagesModule.globalConfig({
        class: 'text-danger',
    })
    ],
    //Start:: Solution using 'useFactory'
   
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    //End:: Solution using 'useFactory'
    bootstrap: [AppComponent]
})
export class AppModule { }
