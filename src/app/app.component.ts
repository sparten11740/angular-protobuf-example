import { Component, OnInit } from '@angular/core';
import { ProtobufService } from './core/protobuf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(private protobufService: ProtobufService){

  }

  ngOnInit() {
      let binaryMessage = this.protobufService.serializeBinaryMessage({
          title: 'Hello World',
          message: 'If you seeing this message in your browser, means protobuf works!',
          type: this.protobufService.proto.Message.MessageType.HELLO_WORLD
      });

      let protoMessage = this.protobufService.deserializeMessageBinary(binaryMessage);
      console.log(protoMessage.getType());

      this.title = `${protoMessage.getTitle()}: ${protoMessage.getMessage()} (Message Type:${this.protobufService.getMessageTypeName(protoMessage.getType())})`;
  }
}
