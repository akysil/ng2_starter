import { Component } from '@angular/core';
import _u from './app.utility.service'

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    
    constructor() {
        console.dir(_u.name);
    }
}