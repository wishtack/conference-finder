import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Pipe({
    name: 'isFuture'
})
export class IsFuturePipe implements PipeTransform {

    transform(value: Moment): boolean {

        if (value == null) {
            return false;
        }

        return value.isAfter(moment());

    }

}
