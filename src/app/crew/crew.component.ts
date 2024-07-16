import { Component } from '@angular/core';
import { CrewDesignationsComponent } from "../crew-designations/crew-designations.component";

@Component({
    selector: 'app-crew',
    standalone: true,
    templateUrl: './crew.component.html',
    styleUrl: './crew.component.scss',
    imports: [CrewDesignationsComponent]
})
export class CrewComponent {
   messageForComponent: string = "Hello world";
   receivedMessage: string ="";
   receivingMessage(message: string):void{
     this.receivedMessage = message;
   }
}
