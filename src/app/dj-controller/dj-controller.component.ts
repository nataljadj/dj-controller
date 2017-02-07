import { Component } from '@angular/core';
import { routerTransition } from './../shared/router.animation';
@Component({
    selector: 'dj-controller',
    templateUrl: 'dj-controller.component.html',
    animations: [routerTransition().toRight],
    host: {'[@routerTransition]': ''}
})

export class DjControllerComponent{}