import { NgModule } from '@angular/core';

import { BlobPipe } from "./readBlob";
import { ArrayBufferPipe } from "./readArrayBuffer";
import { OrientationPipe } from "./resetOrientation";
import { DatetimePipe } from './toTimestamp';
import { ToBase64Pipe } from "./fileToBase64";

export const PIPES = [BlobPipe, ArrayBufferPipe, OrientationPipe, DatetimePipe, ToBase64Pipe]

@NgModule({
    declarations: PIPES,
    exports: PIPES,
})
export class PipesModule {}