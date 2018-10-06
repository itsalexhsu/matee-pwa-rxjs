import { bindCallback } from 'rxjs'

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toBase64'})
export class ToBase64Pipe implements PipeTransform {

    transform(file: any) {
        const toBase64 = bindCallback<string>(this.toBase64)
        return toBase64(file)
    }

    toBase64(file, callback) {
        var reader = new FileReader();
        reader.onload = function() {
            callback(reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""));
        };
        reader.readAsDataURL(file);
    }
    
}