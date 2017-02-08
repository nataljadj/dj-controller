import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DjControllerComponent } from "./dj-controller/dj-controller.component";
import { RoutingModule } from "./app-routing.module";
import { TrackListComponent } from './track-list/track-list.component'
import { UploadTrackComponent } from "./upload-track/upload-track.component";
import { TrackPlayerComponent } from "./track-player/track-player.component";
import { DjControllerGuard } from './shared/services/dj-controller-guard';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedTackListService } from "./shared/services/shared-track-list.service";

@NgModule({
    imports: [
        BrowserModule,
        RoutingModule,
        FileUploadModule
    ],
    declarations: [
        AppComponent,
        DjControllerComponent,
        TrackListComponent,
        UploadTrackComponent,
        TrackPlayerComponent
    ],
    providers:[ DjControllerGuard, SharedTackListService],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
