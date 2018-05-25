import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {App} from "botframework-webchat";
/**
 * Generated class for the ChatBotComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-bot',
  templateUrl: 'chat-bot.html'
})
export class ChatBotComponent implements OnInit{

  @ViewChild("botWindow") botWindowElement: ElementRef;
  text: string;

  constructor() {
    console.log('Hello ChatBotComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    App({
      adaptiveCardsHostConfig: {
        fontFamily: '"Myriad Pro", sans-serif'
      },
      directLine: {secret: 'f0U4GgfLXeQ.cwA.PbA.efbJoWeP7mQyWoW-QiZuwsJVD6MDZyw9JO1BpNAa9mY'},
      user: {id: 'user'},
      bot: {id: 'bot'},
    }, this.botWindowElement.nativeElement);
  }

}
