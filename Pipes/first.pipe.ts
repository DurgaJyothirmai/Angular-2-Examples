import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
	'name':'character'
})

export class FirstPipe implements PipeTransform {
	transform(value) {
		return value.replace(/\s/g,'');
	}
}