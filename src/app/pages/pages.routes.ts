import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettinsComponent } from './account-settins/account-settins.component';


const pagesRoutes: Routes = [
    {
        path: '', component: PageComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'accounts-settings', component: AccountSettinsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
