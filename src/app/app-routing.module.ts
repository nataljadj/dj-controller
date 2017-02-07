import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { DjControllerComponent } from "./dj-controller/dj-controller.component";
import { UploadTrackComponent } from "./upload-track/upload-track.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/upload',
        pathMatch: 'full'
    },
    {
        path: 'upload',
        component: UploadTrackComponent,
        pathMatch: 'full'
    },
    {
        path: 'dj-controller',
        component: DjControllerComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }
