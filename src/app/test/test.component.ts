import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() public checkName;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.checkName);
  }

  fireEvent(){
    this.childEvent.emit('Helloooooo');
  }

  notifyMe() {
  
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
  
   
    else if (Notification.permission === "granted") {
      
      var notification = new Notification("Hi I am the notification!");
    }
  
   
    else if (Notification.permission !== 'denied' ) {
      Notification.requestPermission(function (permission) {

        if (permission === "granted") {
          var notification = new Notification("Hi I am the notification!");
        }
      });
    }
  }

}
