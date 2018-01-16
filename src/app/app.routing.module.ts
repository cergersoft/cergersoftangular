import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { useHash : true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
