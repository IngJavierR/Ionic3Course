import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { App, DirectLine } from "botframework-webchat";
//import { SpeechRecognizer, SpeechSynthesizer } from "botframework-webchat/CognitiveServices";

@Component({
  selector: 'chat-bot',
  templateUrl: 'chat-bot.html'
})
export class ChatBotComponent implements OnInit{

  @Input("bot-key") botKey: string;
  @ViewChild("botWindow") botWindowElement: ElementRef;
  text: string;

  constructor() {
    console.log('Hello ChatBotComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    /*const speechOptions = {
      speechRecognizer: new SpeechRecognizer({ locale: 'es-MX', subscriptionKey: '10f9295026404043a17267bac3cfe22a'}),
      speechSynthesizer: new SpeechSynthesizer({
          subscriptionKey: '10f9295026404043a17267bac3cfe22a',
          voiceName: 'Microsoft Server Speech Text to Speech Voice (es-MX, HildaRUS)',
      })
    };*/
    const user = {
      id: 'userid', 
      name: 'username'
    }
    const bot = {
      id: 'botid', 
      name: 'botname'
    }
    const botConnection = new DirectLine({
      secret: this.botKey,
      webSocket: true
    });

    App({
      adaptiveCardsHostConfig: {
        fontFamily: '"Myriad Pro", sans-serif'
      },
      user: user,
      bot: bot,
      botConnection: botConnection
    }, this.botWindowElement.nativeElement);

    botConnection.postActivity({ type: "event", value: "", from: user, name: "conversationUpdate" })
                 .subscribe(x => console.log('postActivity', x));
  }

}
