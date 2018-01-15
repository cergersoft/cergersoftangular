import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})

export class DashboardComponent implements OnInit {

    public title = 'Cergersoft';
    public descrip = 'A Blog Theme by Start Bootstrap 4 And Angular5';
    
    constructor() {}

    ngOnInit() {}
}
