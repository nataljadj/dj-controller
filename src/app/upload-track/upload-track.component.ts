import { Component } from '@angular/core';
import { routerTransition } from './../shared/router.animation';

@Component({
    selector: 'upload-track',
    templateUrl: 'upload-track.component.html',
    animations: [routerTransition().toLeft],
    host: {'[@routerTransition]': ''}
})

export class UploadTrackComponent {

    title = 'Daily Deals';

    constructor() {}
}
