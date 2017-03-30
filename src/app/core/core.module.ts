import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtobufService } from './protobuf.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ProtobufService]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
