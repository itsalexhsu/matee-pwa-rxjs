import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'arrayBuffer'})
export class ArrayBufferPipe implements PipeTransform {
    transform(arrayBuffer: ArrayBuffer | null) {
        if (arrayBuffer) {
            let blob = new Blob([new Uint8Array(arrayBuffer)]);
            return URL.createObjectURL(blob)
        }
    }
}