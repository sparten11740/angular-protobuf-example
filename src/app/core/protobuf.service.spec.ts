import { TestBed, inject } from '@angular/core/testing';

import { ProtobufService } from './protobuf.service';

describe('ProtobufService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtobufService]
    });
  });

  it('should ...', inject([ProtobufService], (service: ProtobufService) => {
    expect(service).toBeTruthy();
  }));
});
