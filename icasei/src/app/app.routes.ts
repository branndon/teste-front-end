import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { VideoComponent } from './modules/video/video.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'video/:id', component: VideoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
