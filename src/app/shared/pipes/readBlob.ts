import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'blob'})
export class BlobPipe implements PipeTransform {
    transform(blob: Blob | null) {
        if (blob) { return URL.createObjectURL(blob) }
    }
}