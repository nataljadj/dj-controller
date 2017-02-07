import { Component } from '@angular/core';

@Component({
    // We'll call our root component daily-deals
    selector: 'app-root',
    template: `
       <router-outlet ></router-outlet>`,
})
export class AppComponent {

    constructor() {}
}