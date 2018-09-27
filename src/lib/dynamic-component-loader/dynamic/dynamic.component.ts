import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentLocation, ComponentRecipe, DynamicComponentLoader } from '../dynamic-component-loader';

@Component({
    selector: 'wt-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnChanges {

    @Input() location: ComponentLocation;
    @Input() inputs: { [key: string]: any };
    @Input() outputs: { [key: string]: (...args) => void };

    componentRecipe$: Observable<ComponentRecipe<any>>;

    constructor(private _dynamicComponentLoader: DynamicComponentLoader) {
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.location != null) {
            this.componentRecipe$ = this._dynamicComponentLoader.getComponentRecipe(this.location);
        }

    }

}
