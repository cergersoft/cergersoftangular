import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {FormsModule, FormGroup, FormControl, Form, NgModel} from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [routerTransition()]
})

export class ContactComponent implements OnInit {

    send = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    constructor() { }

    ngOnInit() { }

    onSend() {
        console.warn(this.send);
    }
}
