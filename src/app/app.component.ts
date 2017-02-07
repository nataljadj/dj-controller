import { Component } from '@angular/core';

@Component({
    // We'll call our root component daily-deals
    selector: 'app-root',
    template: `
        <!-- The router-outlet directive will display the component based on the route we are on, more on this soon -->
        <router-outlet ></router-outlet>`,
})
export class AppComponent {

    title = 'Daily Deals';

    constructor() {}
}