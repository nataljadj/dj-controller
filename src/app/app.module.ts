import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DjControllerComponent } from "./dj-controller/dj-controller.component";
import { RoutingModule } from "./app-routing.module";
import { TrackListComponent } from './track-list/track-list.component'
import { UploadTrackComponent } from "./upload-track/upload-track.component";
import { TrackPlayerComponent } from "./track-player/track-player.component";

@NgModule({
    imports: [
        BrowserModule,
        RoutingModule
    ],
    declarations: [
        AppComponent,
        DjControllerComponent,
        TrackListComponent,
        UploadTrackComponent,
        TrackPlayerComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }