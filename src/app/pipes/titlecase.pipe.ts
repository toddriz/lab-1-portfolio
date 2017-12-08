import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
    transform(str: string): any {
        return (
            str.charAt(0).toLocaleUpperCase() + str.substr(1).toLocaleLowerCase()
        );
    }
}
