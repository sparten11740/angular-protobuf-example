import { Injectable } from '@angular/core';
import * as goog from 'google-protobuf';

declare function require(path: string) : any;
let proto = require('../../assets/js/schemas_pb.js');

@Injectable()
export class ProtobufService {
  readonly proto : any = proto;

  constructor() {

  }

  serializeBinaryMessage(data) : Uint8Array {
      var message = new proto.Message();
      message.setTitle(data.title);
      message.setMessage(data.message);
      message.setType(data.type);

      return message.serializeBinary();
  }

  deserializeMessageBinary(data : Uint8Array) {
      return proto.Message.deserializeBinary(data);
  }

  getMessageTypeName(a: number) : string {
      for(let prop in proto.Message.MessageType){
          if(a === proto.Message.MessageType[prop])
              return prop;
      }

      return '';
  }
}
