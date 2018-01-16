import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PeticionesService } from '../../services/peticiones.service'


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers: [PeticionesService]
})

export class DashboardComponent implements OnInit {

    public title = 'Cergersoft';
    public descrip = 'A Blog Theme by Start Bootstrap 4 And Angular5';
    public Eps;
    
    constructor(private _peticionesService : PeticionesService) {}

    ngOnInit() {
        this._peticionesService.getEps().then(
            result => {
                this.Eps = result;

                if(!this.Eps){
                    console.error("Error en el servidor")
                }
            },
            error =>{
                let errorMessage = <any>error;
                console.warn(errorMessage);
            }
        );
    }
}
