import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        FormsModule
    ],
    declarations: [
        ContactComponent
    ]
})
export class ContactModule { }
