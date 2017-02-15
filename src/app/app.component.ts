import {Component} from '@angular/core';


@Component({
    selector: 'my-app', // <my-app></my-app>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public value: number;

    setValue = (value) =>{

        this.value = value;

    }
}
