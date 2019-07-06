import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Mensaje } from '../../../interfaces/mensaje.unterface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje = '';
  elemento: any;

  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes()
      .subscribe(() => {

        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20);
      });
  }

  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this.chatService.agregarMensaje(this.mensaje)
      .then(() => this.mensaje = '')
      .catch((err) => console.error('error al enviar', err));
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }


}
