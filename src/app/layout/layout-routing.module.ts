import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { Component } from '@angular/core/src/metadata/directives';

const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'dashboard' },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule { }
