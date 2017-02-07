import { Component } from '@angular/core';

@Component({
    // We'll call our root component daily-deals
    selector: 'daily-deals',
    template: `
    <div class="container">
        <!-- The router-outlet directive will display the component based on the route we are on, more on this soon -->
        <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent {

    title = 'Daily Deals';

    constructor() {}
}