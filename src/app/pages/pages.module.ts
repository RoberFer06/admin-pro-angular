import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { ChartsModule } from 'ng2-charts';
import { ProgresDonaComponent } from './progres-dona/progres-dona.component';
import { AccountSettinsComponent } from './account-settins/account-settins.component';



@NgModule({
    declarations: [
        PageComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        ProgresDonaComponent,
        AccountSettinsComponent
    ],
    exports: [
        PageComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        AccountSettinsComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        ChartsModule
    ]
})

export class PageModule {}
